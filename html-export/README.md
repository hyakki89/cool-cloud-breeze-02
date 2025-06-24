
# Code HTML/CSS pour Thème Shopify - FreshBreeze

Ce dossier contient la conversion complète de votre landing page React en code HTML/CSS pur, prêt à être intégré dans un thème Shopify.

## Fichiers inclus

### 1. `complete-landing-page.html`
- Landing page complète avec toutes les sections
- Prêt à utiliser directement
- Inclut le JavaScript pour les animations et le countdown

### 2. Fichiers de sections séparées
- `hero-section.html` - Section héro avec produit et prix
- `benefits-section.html` - Section des avantages du produit
- `testimonials-section.html` - Section des témoignages clients
- `cta-section.html` - Section call-to-action finale

### 3. `styles.css`
- Tous les styles CSS nécessaires
- Design responsive (mobile, tablette, desktop)
- Animations et effets visuels
- Variables CSS pour faciliter la personnalisation

## Intégration dans Shopify

### Option 1: Page complète
1. Créez une nouvelle page dans Shopify Admin
2. Copiez le contenu de `complete-landing-page.html`
3. Ajoutez le CSS dans votre fichier `theme.liquid` ou créez un fichier CSS séparé

### Option 2: Sections séparées
1. Créez des sections Shopify séparées pour chaque partie
2. Utilisez les fichiers HTML individuels comme base
3. Adaptez avec les variables Liquid de Shopify

## Personnalisation

### Variables CSS principales
```css
:root {
  --sky-blue: #87ceeb;
  --lavender: #e6e6fa;
  --pastel-pink: #ffc0cb;
  --cloud-white: #f8fafc;
  --mint-fresh: #f0ffff;
}
```

### Points d'adaptation pour Shopify
- Remplacez les prix par `{{ product.price }}`
- Intégrez les boutons avec `{{ 'Add to cart' | t }}`
- Utilisez `{{ product.featured_image | img_url }}`
- Adaptez les témoignages avec des métafields

## Fonctionnalités incluses
- ✅ Design responsive
- ✅ Animations au scroll
- ✅ Effets de survol
- ✅ Countdown timer fonctionnel
- ✅ Optimisé pour la conversion
- ✅ Code sémantique et accessible

## Notes importantes
1. L'image du produit est référencée depuis `/lovable-uploads/...` - remplacez par votre URL Shopify
2. Les boutons CTA ont un gestionnaire d'événement basique - adaptez selon vos besoins
3. Le design est optimisé pour un produit unique (Single Product Page)

## Support navigateurs
- Chrome/Safari/Firefox (dernières versions)
- Edge moderne
- Mobile Safari/Chrome mobile
- Internet Explorer non supporté

Votre code est maintenant prêt pour l'intégration Shopify ! 🚀
