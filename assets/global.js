// Fonctions JavaScript globales pour le thème Zen Ring

// Utilitaires généraux
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Gestion du panier
class CartManager {
  constructor() {
    this.init();
  }

  init() {
    this.bindEvents();
    this.updateCartCount();
  }

  bindEvents() {
    // Écouter les événements d'ajout au panier
    document.addEventListener('submit', (e) => {
      if (e.target.action && e.target.action.includes('/cart/add')) {
        e.preventDefault();
        this.addToCart(e.target);
      }
    });
  }

  async addToCart(form) {
    try {
      const formData = new FormData(form);
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        this.showNotification('Produit ajouté au panier !', 'success');
        this.updateCartCount();
        
        // Animation du bouton
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
          submitButton.classList.add('animate-pulse');
          setTimeout(() => {
            submitButton.classList.remove('animate-pulse');
          }, 1000);
        }
      } else {
        throw new Error('Erreur lors de l\'ajout au panier');
      }
    } catch (error) {
      console.error('Erreur:', error);
      this.showNotification('Erreur lors de l\'ajout au panier', 'error');
    }
  }

  async updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      
      const cartCountElements = document.querySelectorAll('[data-cart-count]');
      cartCountElements.forEach(element => {
        element.textContent = cart.item_count;
        element.style.display = cart.item_count > 0 ? 'flex' : 'none';
      });
    } catch (error) {
      console.error('Erreur lors de la mise à jour du compteur du panier:', error);
    }
  }

  showNotification(message, type = 'success') {
    // Créer une notification toast
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
      type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animer l'entrée
    setTimeout(() => {
      notification.classList.remove('translate-x-full');
    }, 100);
    
    // Supprimer après 3 secondes
    setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }
}

// Gestion des variantes de produit
class ProductVariants {
  constructor() {
    this.init();
  }

  init() {
    const variantSelectors = document.querySelectorAll('[data-variant-selector]');
    variantSelectors.forEach(selector => {
      selector.addEventListener('change', this.onVariantChange.bind(this));
    });
  }

  onVariantChange(event) {
    const form = event.target.closest('form');
    if (!form) return;

    const formData = new FormData(form);
    const options = {};
    
    // Collecter les options sélectionnées
    for (let [key, value] of formData.entries()) {
      if (key.startsWith('options[')) {
        const optionName = key.replace('options[', '').replace(']', '');
        options[optionName] = value;
      }
    }

    // Trouver la variante correspondante
    const productData = this.getProductData(form);
    if (productData) {
      const variant = this.findMatchingVariant(productData.variants, options);
      if (variant) {
        this.updatePrice(variant);
        this.updateAvailability(variant);
        this.updateVariantId(form, variant.id);
      }
    }
  }

  getProductData(form) {
    const productDataElement = form.querySelector('[data-product-json]');
    return productDataElement ? JSON.parse(productDataElement.textContent) : null;
  }

  findMatchingVariant(variants, selectedOptions) {
    return variants.find(variant => {
      return variant.options.every((option, index) => {
        const optionName = Object.keys(selectedOptions)[index];
        return selectedOptions[optionName] === option;
      });
    });
  }

  updatePrice(variant) {
    const priceElements = document.querySelectorAll('[data-price]');
    priceElements.forEach(element => {
      element.textContent = this.formatMoney(variant.price);
    });

    if (variant.compare_at_price > variant.price) {
      const comparePriceElements = document.querySelectorAll('[data-compare-price]');
      comparePriceElements.forEach(element => {
        element.textContent = this.formatMoney(variant.compare_at_price);
        element.style.display = 'inline';
      });
    }
  }

  updateAvailability(variant) {
    const addToCartButton = document.querySelector('[data-add-to-cart]');
    if (addToCartButton) {
      if (variant.available) {
        addToCartButton.disabled = false;
        addToCartButton.textContent = addToCartButton.dataset.addToCartText || 'Ajouter au panier';
      } else {
        addToCartButton.disabled = true;
        addToCartButton.textContent = addToCartButton.dataset.soldOutText || 'Épuisé';
      }
    }
  }

  updateVariantId(form, variantId) {
    const variantIdInput = form.querySelector('input[name="id"]');
    if (variantIdInput) {
      variantIdInput.value = variantId;
    }
  }

  formatMoney(cents) {
    return (cents / 100).toLocaleString('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    });
  }
}

// Gestion des animations au scroll
class ScrollAnimations {
  constructor() {
    this.init();
  }

  init() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observer les éléments avec la classe .animate-on-scroll
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => this.observer.observe(el));
  }
}

// Gestion des images paresseuses
class LazyImages {
  constructor() {
    this.init();
  }

  init() {
    if ('loading' in HTMLImageElement.prototype) {
      // Le navigateur supporte le loading natif
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        img.src = img.dataset.src || img.src;
      });
    } else {
      // Fallback pour les navigateurs plus anciens
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src || img.src;
              img.classList.remove('lazy');
              this.observer.unobserve(img);
            }
          });
        }
      );

      const lazyImages = document.querySelectorAll('img.lazy');
      lazyImages.forEach(img => this.observer.observe(img));
    }
  }
}

// Initialisation du thème
document.addEventListener('DOMContentLoaded', function() {
  // Initialiser les composants
  new CartManager();
  new ProductVariants();
  new ScrollAnimations();
  new LazyImages();

  // Smooth scroll pour les liens d'ancrage
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Gestion du thème sombre (si nécessaire)
  const themeToggle = document.querySelector('[data-theme-toggle]');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', 
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
      );
    });

    // Appliquer le thème sauvegardé
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }
});

// Fonctions utilitaires globales
window.ThemeUtils = {
  formatMoney: function(cents, format = '{{amount}}€') {
    const amount = (cents / 100).toFixed(2).replace('.', ',');
    return format.replace('{{amount}}', amount);
  },

  debounce: debounce,

  // Animation de compteur
  animateCounter: function(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
      start += increment;
      element.textContent = Math.floor(start);
      
      if (start < target) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    }
    
    updateCounter();
  },

  // Validation d'email simple
  isValidEmail: function(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
};