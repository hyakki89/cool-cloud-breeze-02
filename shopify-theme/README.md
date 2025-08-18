# Thème Shopify FreshBreeze

Un thème Shopify moderne et minimaliste pour votre boutique en ligne, optimisé pour la conversion et entièrement personnalisable depuis l'éditeur Shopify.

## 🚀 Installation

### Méthode 1 : Import direct dans Shopify Admin

1. **Créer une archive ZIP**
   - Compressez tous les fichiers du dossier `shopify-theme/` dans un fichier ZIP
   - Assurez-vous que les dossiers `assets/`, `config/`, `layout/`, `sections/`, `templates/` sont à la racine du ZIP

2. **Importer dans Shopify**
   - Connectez-vous à votre admin Shopify
   - Allez dans **Boutique en ligne** > **Thèmes**
   - Cliquez sur **Ajouter un thème** > **Importer**
   - Sélectionnez votre fichier ZIP et importez

3. **Activer le thème**
   - Une fois importé, cliquez sur **Actions** > **Publier** pour activer le thème

### Méthode 2 : Via Shopify CLI (pour développeurs)

```bash
# Installer Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Se connecter à votre boutique
shopify login --store votre-boutique.myshopify.com

# Déployer le thème
shopify theme push
```

## 🎨 Personnalisation

### Configuration des couleurs et typographies

1. Allez dans **Boutique en ligne** > **Thèmes** > **Personnaliser**
2. Dans le panneau de gauche, cliquez sur **Paramètres du thème**
3. Vous pouvez modifier :
   - **Couleurs** : Couleur principale, secondaire, accent, texte, fond
   - **Typographie** : Police des titres et du corps de texte
   - **Réassurance** : Affichage des garanties

### Modification du contenu

#### Page d'accueil
1. **Section Hero** : Modifiez le titre, description, image produit, prix, CTA
2. **Section Bénéfices** : Ajoutez/supprimez des bénéfices, modifiez les icônes
3. **Section Témoignages** : Gérez les avis clients, photos, notes
4. **Section CTA** : Personnalisez l'offre finale, countdown, prix

#### Gestion des sections
- Chaque section peut être activée/désactivée
- Réorganisez l'ordre des sections par glisser-déposer
- Ajoutez plusieurs instances d'une même section si nécessaire

## 📱 Fonctionnalités

### Design
- ✅ Responsive (mobile-first)
- ✅ Animations fluides et professionnelles
- ✅ Effets de nuages flottants
- ✅ Dégradés et effets visuels modernes
- ✅ Mode sombre/clair automatique

### E-commerce
- ✅ Optimisé pour la conversion
- ✅ Panier sticky
- ✅ Boutons d'achat optimisés
- ✅ Réassurance clients intégrée
- ✅ SEO optimisé

### Performance
- ✅ Code optimisé et léger
- ✅ Images lazy loading
- ✅ CSS critique inline
- ✅ Scripts différés

## 🛠️ Structure des fichiers

```
shopify-theme/
├── assets/               # CSS, JS, images
│   ├── base.css         # Styles de base
│   ├── section-*.css    # Styles des sections
│   └── global.js        # JavaScript global
├── config/              # Configuration du thème
│   └── settings_schema.json
├── layout/              # Templates de base
│   └── theme.liquid     # Layout principal
├── sections/            # Sections modulaires
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero-section.liquid
│   ├── benefits-section.liquid
│   ├── testimonials-section.liquid
│   └── cta-section.liquid
├── snippets/            # Composants réutilisables
├── templates/           # Templates de pages
│   └── index.json       # Page d'accueil
└── README.md           # Ce fichier
```

## 🎯 Optimisation pour la conversion

### Pages recommandées
1. **Page d'accueil** : Utilisez toutes les sections pour maximiser l'impact
2. **Page produit** : Focalisez sur les bénéfices et témoignages
3. **Page de collection** : Mettez en avant les USP

### Bonnes pratiques
- **Prix** : Toujours afficher l'ancien prix barré
- **Urgence** : Utilisez les badges de stock limité
- **Réassurance** : Garanties visibles sur chaque section
- **Social proof** : Témoignages avec photos réelles
- **CTA** : Boutons d'action clairs et engageants

## 🔧 Support technique

### Problèmes courants

**Le thème ne s'affiche pas correctement**
- Vérifiez que tous les fichiers CSS sont bien importés
- Assurez-vous que les images sont uploadées dans `/assets/`

**Les sections ne s'affichent pas**
- Vérifiez la structure JSON dans `/templates/index.json`
- Assurez-vous que les sections sont activées dans l'éditeur

**Les couleurs ne changent pas**
- Videz le cache de votre navigateur
- Vérifiez les variables CSS dans `base.css`

### Personnalisations avancées

Pour des modifications plus poussées :
1. Éditez les fichiers `.liquid` dans `/sections/`
2. Modifiez les styles dans `/assets/`
3. Testez sur un thème de développement avant la mise en ligne

## 📞 Contact

Pour toute question ou support personnalisé, contactez notre équipe technique.

---

**Version** : 1.0.0  
**Compatibilité** : Shopify 2.0+  
**Dernière mise à jour** : {{ 'now' | date: '%d/%m/%Y' }}