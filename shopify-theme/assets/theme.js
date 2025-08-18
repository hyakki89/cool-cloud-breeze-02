// FreshBreeze Theme JavaScript

class ThemeEvents {
  constructor() {
    this.initializeAll();
  }

  initializeAll() {
    this.setupProductMedia();
    this.setupQuantitySelectors();
    this.setupVariantPickers();
    this.setupCollapsibleTabs();
    this.setupCartDrawer();
    this.setupHeaderScroll();
  }

  setupProductMedia() {
    const thumbnails = document.querySelectorAll('.thumbnail-button');
    const mediaItems = document.querySelectorAll('.product-media-item');

    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        const mediaId = thumbnail.dataset.mediaId;
        
        // Hide all media items
        mediaItems.forEach(item => {
          item.style.display = 'none';
        });
        
        // Show selected media item
        const selectedMedia = document.querySelector(`[data-media-id="${mediaId}"]`);
        if (selectedMedia) {
          selectedMedia.style.display = 'block';
        }
        
        // Update active thumbnail
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        thumbnail.classList.add('active');
      });
    });
  }

  setupQuantitySelectors() {
    const decreaseButtons = document.querySelectorAll('.quantity-decrease');
    const increaseButtons = document.querySelectorAll('.quantity-increase');

    decreaseButtons.forEach(button => {
      button.addEventListener('click', () => {
        const input = button.nextElementSibling;
        const currentValue = parseInt(input.value);
        if (currentValue > 1) {
          input.value = currentValue - 1;
        }
      });
    });

    increaseButtons.forEach(button => {
      button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        const currentValue = parseInt(input.value);
        input.value = currentValue + 1;
      });
    });
  }

  setupVariantPickers() {
    const variantInputs = document.querySelectorAll('.option-input');
    
    variantInputs.forEach(input => {
      input.addEventListener('change', () => {
        this.updateSelectedVariant();
      });
    });
  }

  updateSelectedVariant() {
    const form = document.getElementById('product-form');
    if (!form) return;

    const formData = new FormData(form);
    const options = {};
    
    for (let [key, value] of formData.entries()) {
      if (key.startsWith('options[')) {
        const optionName = key.match(/options\[(.*)\]/)[1];
        options[optionName] = value;
      }
    }

    // Find matching variant
    const variants = window.productVariants || [];
    const matchingVariant = variants.find(variant => {
      return variant.options.every((option, index) => {
        const optionName = window.productOptions[index];
        return options[optionName] === option;
      });
    });

    if (matchingVariant) {
      // Update hidden variant ID input
      const variantInput = form.querySelector('input[name="id"]');
      if (variantInput) {
        variantInput.value = matchingVariant.id;
      }

      // Update price
      this.updatePrice(matchingVariant);
      
      // Update add to cart button
      this.updateAddToCartButton(matchingVariant);
    }
  }

  updatePrice(variant) {
    const priceElement = document.querySelector('.price-regular');
    if (priceElement && variant.price) {
      priceElement.textContent = this.formatMoney(variant.price);
    }

    const compareElement = document.querySelector('.price-compare');
    if (compareElement) {
      if (variant.compare_at_price && variant.compare_at_price > variant.price) {
        compareElement.textContent = this.formatMoney(variant.compare_at_price);
        compareElement.style.display = 'inline';
      } else {
        compareElement.style.display = 'none';
      }
    }
  }

  updateAddToCartButton(variant) {
    const button = document.querySelector('.product-form__cart-submit');
    if (!button) return;

    const buttonText = button.querySelector('span');
    
    if (variant.available) {
      button.disabled = false;
      buttonText.textContent = `Ajouter au panier - ${this.formatMoney(variant.price)}`;
    } else {
      button.disabled = true;
      buttonText.textContent = 'Épuisé';
    }
  }

  setupCollapsibleTabs() {
    const collapsibleDetails = document.querySelectorAll('.collapsible-details');
    
    collapsibleDetails.forEach(details => {
      details.addEventListener('toggle', () => {
        const icon = details.querySelector('.collapsible-icon');
        if (details.open) {
          icon.style.transform = 'rotate(45deg)';
        } else {
          icon.style.transform = 'rotate(0deg)';
        }
      });
    });
  }

  setupCartDrawer() {
    // Simple cart functionality
    const addToCartForms = document.querySelectorAll('#product-form');
    
    addToCartForms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.addToCart(form);
      });
    });
  }

  async addToCart(form) {
    const formData = new FormData(form);
    const button = form.querySelector('.product-form__cart-submit');
    const originalText = button.querySelector('span').textContent;
    
    // Update button state
    button.disabled = true;
    button.querySelector('span').textContent = 'Ajout en cours...';
    
    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        // Success feedback
        button.querySelector('span').textContent = 'Ajouté !';
        setTimeout(() => {
          button.disabled = false;
          button.querySelector('span').textContent = originalText;
        }, 2000);
        
        // Update cart count if exists
        this.updateCartCount();
      } else {
        throw new Error('Erreur lors de l\'ajout au panier');
      }
    } catch (error) {
      console.error('Cart error:', error);
      button.disabled = false;
      button.querySelector('span').textContent = originalText;
    }
  }

  async updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      
      const cartCountElements = document.querySelectorAll('.cart-count-bubble');
      cartCountElements.forEach(element => {
        element.textContent = cart.item_count;
        element.style.display = cart.item_count > 0 ? 'flex' : 'none';
      });
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  }

  setupHeaderScroll() {
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');
    
    if (!header) return;
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
      } else {
        header.style.background = 'rgba(255, 255, 255, 0.9)';
        header.style.backdropFilter = 'blur(10px)';
      }
      
      lastScrollY = currentScrollY;
    });
  }

  formatMoney(cents) {
    return (cents / 100).toLocaleString('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    });
  }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeEvents();
});

// Expose for global access
window.FreshBreezeTheme = ThemeEvents;