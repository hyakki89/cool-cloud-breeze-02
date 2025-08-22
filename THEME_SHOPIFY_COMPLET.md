# THÈME SHOPIFY FRESHBREEZE - FICHIERS COMPLETS

## Structure des dossiers à créer :
```
shopify-theme/
├── layout/
│   └── theme.liquid
├── templates/
│   ├── index.json
│   ├── product.json
│   ├── collection.json
│   └── page.json
├── sections/
│   ├── hero-section.liquid
│   ├── benefits-section.liquid
│   ├── testimonials-section.liquid
│   ├── cta-section.liquid
│   ├── header.liquid
│   ├── footer.liquid
│   ├── main-page.liquid
│   ├── main-collection-product-grid.liquid
│   └── collection-banner.liquid
├── snippets/
│   ├── icon.liquid
│   └── product-card.liquid
├── assets/
│   ├── base.css
│   ├── section-hero.css
│   ├── section-benefits.css
│   ├── section-testimonials.css
│   ├── section-cta.css
│   ├── section-header.css
│   ├── section-product-header.css
│   ├── section-product-info.css
│   ├── section-product-media.css
│   ├── section-main-page.css
│   └── theme.js
├── config/
│   ├── settings_schema.json
│   ├── settings_data.json
│   └── shop.json
└── locales/
    └── fr.json
```

---

## layout/theme.liquid
```liquid
<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="theme-color" content="">
    <link rel="canonical" href="{{ canonical_url }}">
    <link rel="preconnect" href="https://cdn.shopify.com" crossorigin>

    {%- if settings.favicon != blank -%}
      <link rel="icon" type="image/png" href="{{ settings.favicon | img_url: '32x32' }}">
    {%- endif -%}

    {%- unless settings.type_header_font.system? and settings.type_body_font.system? -%}
      <link rel="preconnect" href="https://fonts.shopifycdn.com" crossorigin>
    {%- endunless -%}

    <title>
      {{ page_title }}
      {%- if current_tags %} &ndash; {{ 'general.meta.tags' | t: tags: current_tags | join: ', ' }}{% endif -%}
      {%- if current_page != 1 %} &ndash; {{ 'general.meta.page' | t: page: current_page }}{% endif -%}
      {%- assign title_separator = ' &ndash; ' -%}
      {%- unless page_title contains shop.name -%}{{ title_separator }}{{ shop.name }}{%- endunless -%}
    </title>

    {% if page_description %}
      <meta name="description" content="{{ page_description | escape }}">
    {% endif %}

    {% render 'meta-tags' %}

    <script src="{{ 'global.js' | asset_url }}" defer="defer"></script>
    {{ content_for_header }}

    {%- liquid
      assign body_font_bold = settings.type_body_font | font_modify: 'weight', 'bold'
      assign body_font_italic = settings.type_body_font | font_modify: 'style', 'italic'
      assign body_font_bold_italic = body_font_bold | font_modify: 'style', 'italic'
    %}

    {% style %}
      {{ settings.type_body_font | font_face: font_display: 'swap' }}
      {{ body_font_bold | font_face: font_display: 'swap' }}
      {{ body_font_italic | font_face: font_display: 'swap' }}
      {{ body_font_bold_italic | font_face: font_display: 'swap' }}
      {{ settings.type_header_font | font_face: font_display: 'swap' }}

      :root {
        --font-body-family: {{ settings.type_body_font.family }}, {{ settings.type_body_font.fallback_families }};
        --font-body-style: {{ settings.type_body_font.style }};
        --font-body-weight: {{ settings.type_body_font.weight }};
        --font-body-weight-bold: {{ settings.type_body_font.weight | plus: 300 | at_most: 1000 }};

        --font-heading-family: {{ settings.type_header_font.family }}, {{ settings.type_header_font.fallback_families }};
        --font-heading-style: {{ settings.type_header_font.style }};
        --font-heading-weight: {{ settings.type_header_font.weight }};

        --font-body-scale: {{ settings.body_scale | divided_by: 100.0 }};
        --font-heading-scale: {{ settings.heading_scale | times: 1.0 | divided_by: settings.body_scale }};

        --color-primary: {{ settings.color_primary.red }}, {{ settings.color_primary.green }}, {{ settings.color_primary.blue }};
        --color-secondary: {{ settings.color_secondary.red }}, {{ settings.color_secondary.green }}, {{ settings.color_secondary.blue }};
        --color-accent: {{ settings.color_accent.red }}, {{ settings.color_accent.green }}, {{ settings.color_accent.blue }};
        --color-text: {{ settings.color_text.red }}, {{ settings.color_text.green }}, {{ settings.color_text.blue }};
        --color-background: {{ settings.color_background.red }}, {{ settings.color_background.green }}, {{ settings.color_background.blue }};

        --gradient-base-background-1: #ffffff;
        --gradient-base-background-2: #f3f3f3;
        --gradient-base-accent-1: #121212;
        --gradient-base-accent-2: #334155;

        --payment-terms-background-color: {{ settings.colors_background }};

        --animation-primary: 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        --animation-secondary: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      html {
        box-sizing: border-box;
        font-size: calc(var(--font-body-scale) * 62.5%);
        height: 100%;
      }

      body {
        display: grid;
        grid-template-rows: auto auto 1fr auto;
        grid-template-columns: 100%;
        min-height: 100%;
        margin: 0;
        font-size: 1.5rem;
        letter-spacing: 0.06rem;
        line-height: calc(1 + 0.8 / var(--font-body-scale));
        font-family: var(--font-body-family);
        font-style: var(--font-body-style);
        font-weight: var(--font-body-weight);
      }

      @media screen and (min-width: 750px) {
        body {
          font-size: 1.6rem;
        }
      }
    {% endstyle %}

    {{ 'base.css' | asset_url | stylesheet_tag }}

    {%- unless settings.type_body_font.system? -%}
      <link rel="preload" as="font" href="{{ settings.type_body_font | font_url }}" type="font/woff2" crossorigin>
    {%- endunless -%}
    {%- unless settings.type_header_font.system? -%}
      <link rel="preload" as="font" href="{{ settings.type_header_font | font_url }}" type="font/woff2" crossorigin>
    {%- endunless -%}

    {%- if settings.predictive_search_enabled -%}
      <link rel="stylesheet" href="{{ 'component-predictive-search.css' | asset_url }}" media="print" onload="this.media='all'">
    {%- endif -%}

    <script>document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
    if (Shopify.designMode) {
      document.documentElement.classList.add('shopify-design-mode');
    }
    </script>
  </head>

  <body class="gradient">
    <a class="skip-to-content-link button visually-hidden" href="#MainContent">
      {{ "accessibility.skip_to_text" | t }}
    </a>

    {%- if settings.cart_type == 'drawer' -%}
      {%- render 'cart-drawer' -%}
    {%- endif -%}

    {% section 'announcement-bar' %}
    {% section 'header' %}
    <main id="MainContent" class="content-for-layout focus-none" role="main" tabindex="-1">
      {{ content_for_layout }}
    </main>

    {% section 'footer' %}

    <ul hidden>
      <li id="a11y-refresh-page-message">{{ 'accessibility.refresh_page' | t }}</li>
      <li id="a11y-new-window-message">{{ 'accessibility.link_messages.new_window' | t }}</li>
    </ul>

    <script>
      window.shopUrl = '{{ request.origin }}';
      window.routes = {
        cart_add_url: '{{ routes.cart_add_url }}',
        cart_change_url: '{{ routes.cart_change_url }}',
        cart_update_url: '{{ routes.cart_update_url }}',
        cart_url: '{{ routes.cart_url }}',
        predictive_search_url: '{{ routes.predictive_search_url }}'
      };

      window.cartStrings = {
        error: `{{ 'sections.cart.cart_error' | t }}`,
        quantityError: `{{ 'sections.cart.cart_quantity_error_html' | t: quantity: '[quantity]' }}`
      }

      window.variantStrings = {
        addToCart: `{{ 'products.product.add_to_cart' | t }}`,
        soldOut: `{{ 'products.product.sold_out' | t }}`,
        unavailable: `{{ 'products.product.unavailable' | t }}`,
        unavailable_with_option: `{{ 'products.product.value_unavailable' | t: option_value: '[value]' }}`,
      }

      window.accessibilityStrings = {
        imageAvailable: `{{ 'products.product.media.image_available' | t: index: '[index]' }}`,
        shareSuccess: `{{ 'general.share.success_message' | t }}`,
        pauseSlideshow: `{{ 'sections.slideshow.pause_slideshow' | t }}`,
        playSlideshow: `{{ 'sections.slideshow.play_slideshow' | t }}`,
      }
    </script>

    {%- if settings.predictive_search_enabled -%}
      <script src="{{ 'predictive-search.js' | asset_url }}" defer="defer"></script>
    {%- endif -%}
  </body>
</html>
```

---

## templates/index.json
```json
{
  "sections": {
    "hero": {
      "type": "hero-section",
      "settings": {
        "color_scheme": "background-1",
        "show_badge": true,
        "badge_text": "Nouveau produit tendance ✨",
        "title_highlight": "Reste frais",
        "subtitle": "sans transpirer !",
        "description": "Le ventilateur de cou portable qui révolutionne ton été. Mains libres, silencieux et ultra-stylé ☁️",
        "old_price": "29€",
        "current_price": "19€",
        "shipping_text": "Livraison gratuite 🚚",
        "cta_text": "Je veux rester frais ☁️",
        "cta_url": "/collections/all",
        "show_guarantees": true,
        "guarantee_1": "Garantie 30 jours",
        "guarantee_2": "Paiement sécurisé",
        "guarantee_3": "Stock limité",
        "padding_top": 80,
        "padding_bottom": 80
      }
    },
    "benefits": {
      "type": "benefits-section",
      "blocks": [
        {
          "type": "benefit",
          "settings": {
            "icon": "🔇",
            "icon_color": "blue",
            "title": "Ultra silencieux",
            "description": "Profite de la fraîcheur sans déranger personne autour de toi"
          }
        },
        {
          "type": "benefit",
          "settings": {
            "icon": "🔋",
            "icon_color": "purple",
            "title": "10h d'autonomie",
            "description": "Une journée entière de fraîcheur avec une seule charge"
          }
        },
        {
          "type": "benefit",
          "settings": {
            "icon": "🎧",
            "icon_color": "pink",
            "title": "Mains libres",
            "description": "Reste actif pendant que tu te rafraîchis, parfait pour le sport"
          }
        }
      ],
      "settings": {
        "color_scheme": "background-1",
        "title_part1": "Pourquoi tu vas",
        "title_highlight": "l'adorer",
        "title_part2": "?",
        "description": "Un concentré de technologie pensé pour ton confort et ton style de vie actif",
        "show_additional_benefits": true,
        "additional_benefit_1_emoji": "🎯",
        "additional_benefit_1_title": "Design ergonomique",
        "additional_benefit_1_description": "S'adapte parfaitement à toutes les morphologies",
        "additional_benefit_2_emoji": "⚡",
        "additional_benefit_2_title": "3 vitesses ajustables",
        "additional_benefit_2_description": "De la brise légère au vent rafraîchissant",
        "show_use_cases": true,
        "use_cases_title": "Parfait pour :",
        "use_case_1": "🏃‍♀️ Sport & Running",
        "use_case_2": "🚇 Transports en commun",
        "use_case_3": "💼 Bureau climatisé",
        "use_case_4": "🎪 Festivals & événements",
        "use_case_5": "🏖️ Plage & vacances",
        "padding_top": 80,
        "padding_bottom": 80
      }
    },
    "testimonials": {
      "type": "testimonials-section",
      "blocks": [
        {
          "type": "testimonial",
          "settings": {
            "text": "Incroyable ! Je peux enfin courir en été sans mourir de chaud. Le design est super discret et l'autonomie tient vraiment toute la journée.",
            "author_name": "Marie L.",
            "author_title": "Utilisatrice vérifiée",
            "rating": 5,
            "show_verified": true
          }
        },
        {
          "type": "testimonial",
          "settings": {
            "text": "Parfait pour mes trajets en métro bondé ! Ultra silencieux et vraiment efficace. Je le recommande à tous mes collègues.",
            "author_name": "Thomas M.",
            "author_title": "Client vérifié",
            "rating": 5,
            "show_verified": true
          }
        },
        {
          "type": "testimonial",
          "settings": {
            "text": "Design élégant et fonctionnel. Je porte le mien partout, même au bureau. Mes collègues sont jaloux !",
            "author_name": "Sophie R.",
            "author_title": "Acheteuse vérifiée",
            "rating": 4,
            "show_verified": true
          }
        }
      ],
      "settings": {
        "color_scheme": "background-1",
        "title_part1": "Ils adorent leur",
        "title_highlight": "FreshBreeze",
        "description": "Plus de 2000 clients satisfaits partagent leur expérience",
        "show_stats": true,
        "stat_1_number": "2000+",
        "stat_1_label": "Clients satisfaits",
        "stat_2_number": "4.8/5",
        "stat_2_label": "Note moyenne",
        "stat_3_number": "97%",
        "stat_3_label": "Recommandent",
        "padding_top": 80,
        "padding_bottom": 80
      }
    },
    "cta": {
      "type": "cta-section",
      "settings": {
        "color_scheme": "background-1",
        "show_urgency_badge": true,
        "urgency_text": "🔥 Stock limité - Plus que quelques pièces",
        "title_part1": "Prêt à dire adieu à la",
        "title_highlight": "chaleur",
        "title_part2": "?",
        "description": "Rejoins la révolution de la fraîcheur portable. Ton été ne sera plus jamais le même ☁️",
        "launch_price_text": "Prix de lancement ✨",
        "old_price": "29€",
        "current_price": "19€",
        "discount_percentage": "-34%",
        "shipping_text": "+ Livraison gratuite en France 🚚",
        "cta_text": "Je veux rester frais ☁️",
        "cta_url": "/collections/all",
        "security_text": "Paiement 100% sécurisé • Garantie satisfait ou remboursé 15 jours",
        "show_countdown": true,
        "countdown_label": "⏰ Offre limitée dans le temps !",
        "countdown_units": "Heures • Minutes • Secondes",
        "show_footer": true,
        "footer_text": "© 2024 FreshBreeze - Reste frais, reste stylé ☁️",
        "footer_link_1_text": "Mentions légales",
        "footer_link_2_text": "CGV",
        "footer_link_3_text": "Contact",
        "padding_top": 80,
        "padding_bottom": 80
      }
    }
  },
  "order": [
    "hero",
    "benefits",
    "testimonials",
    "cta"
  ]
}
```

---

## templates/product.json
```json
{
  "sections": {
    "main": {
      "type": "main-product",
      "blocks": [
        {
          "type": "title",
          "settings": {}
        },
        {
          "type": "price",
          "settings": {}
        },
        {
          "type": "variant_picker",
          "settings": {
            "picker_type": "button"
          }
        },
        {
          "type": "quantity_selector",
          "settings": {}
        },
        {
          "type": "buy_buttons",
          "settings": {
            "show_dynamic_checkout": true
          }
        },
        {
          "type": "description",
          "settings": {}
        },
        {
          "type": "share",
          "settings": {
            "share_label": "Partager"
          }
        }
      ],
      "block_order": [
        "title",
        "price",
        "variant_picker",
        "quantity_selector",
        "buy_buttons",
        "description",
        "share"
      ],
      "settings": {
        "enable_sticky_info": true,
        "media_size": "large",
        "constrain_to_viewport": true,
        "media_fit": "contain",
        "gallery_layout": "stacked",
        "media_position": "left",
        "image_zoom": "lightbox",
        "mobile_thumbnails": "hide",
        "hide_variants": true,
        "enable_video_looping": false,
        "padding_top": 36,
        "padding_bottom": 12
      }
    },
    "related-products": {
      "type": "related-products",
      "settings": {
        "heading": "Produits similaires",
        "heading_size": "h2",
        "products_to_show": 4,
        "columns_desktop": 4,
        "color_scheme": "background-1",
        "image_ratio": "square",
        "show_secondary_image": true,
        "show_vendor": false,
        "show_rating": true,
        "padding_top": 36,
        "padding_bottom": 28
      }
    }
  },
  "order": [
    "main",
    "related-products"
  ]
}
```

---

## templates/collection.json
```json
{
  "sections": {
    "banner": {
      "type": "collection-banner",
      "settings": {
        "color_scheme": "background-1",
        "show_collection_description": true,
        "show_collection_image": true,
        "image_height": "medium",
        "desktop_content_position": "center",
        "desktop_content_alignment": "center",
        "padding_top": 80,
        "padding_bottom": 40
      }
    },
    "product-grid": {
      "type": "main-collection-product-grid",
      "settings": {
        "color_scheme": "background-1",
        "products_per_page": 24,
        "columns_desktop": 4,
        "columns_mobile": "2",
        "enable_tags": true,
        "enable_sorting": true,
        "enable_filtering": true,
        "filter_type": "horizontal",
        "show_secondary_image": true,
        "show_vendor": false,
        "show_rating": true,
        "padding_top": 40,
        "padding_bottom": 80
      }
    }
  },
  "order": [
    "banner",
    "product-grid"
  ]
}
```

---

## templates/page.json
```json
{
  "sections": {
    "main": {
      "type": "main-page",
      "settings": {
        "color_scheme": "background-1",
        "padding_top": 80,
        "padding_bottom": 80
      }
    }
  },
  "order": [
    "main"
  ]
}
```

---

## sections/hero-section.liquid
```liquid
{{ 'section-hero.css' | asset_url | stylesheet_tag }}

<section class="hero-section color-{{ section.settings.color_scheme }}" data-section-id="{{ section.id }}">
  <div class="hero-container">
    <div class="hero-content">
      {% if section.settings.show_badge and section.settings.badge_text != blank %}
        <div class="hero-badge">
          {{ section.settings.badge_text }}
        </div>
      {% endif %}

      <h1 class="hero-title">
        {% if section.settings.title_highlight != blank %}
          <span class="hero-title-highlight">{{ section.settings.title_highlight }}</span>
        {% endif %}
        {% if section.settings.subtitle != blank %}
          <span class="hero-subtitle">{{ section.settings.subtitle }}</span>
        {% endif %}
      </h1>

      {% if section.settings.description != blank %}
        <p class="hero-description">{{ section.settings.description }}</p>
      {% endif %}

      <div class="hero-pricing">
        {% if section.settings.old_price != blank %}
          <span class="hero-old-price">{{ section.settings.old_price }}</span>
        {% endif %}
        {% if section.settings.current_price != blank %}
          <span class="hero-current-price">{{ section.settings.current_price }}</span>
        {% endif %}
        {% if section.settings.shipping_text != blank %}
          <span class="hero-shipping">{{ section.settings.shipping_text }}</span>
        {% endif %}
      </div>

      {% if section.settings.cta_text != blank %}
        <a href="{{ section.settings.cta_url | default: '#' }}" class="hero-cta-button">
          {{ section.settings.cta_text }}
        </a>
      {% endif %}

      {% if section.settings.show_guarantees %}
        <div class="hero-guarantees">
          {% if section.settings.guarantee_1 != blank %}
            <span class="guarantee-item">✓ {{ section.settings.guarantee_1 }}</span>
          {% endif %}
          {% if section.settings.guarantee_2 != blank %}
            <span class="guarantee-item">✓ {{ section.settings.guarantee_2 }}</span>
          {% endif %}
          {% if section.settings.guarantee_3 != blank %}
            <span class="guarantee-item">✓ {{ section.settings.guarantee_3 }}</span>
          {% endif %}
        </div>
      {% endif %}
    </div>

    <div class="hero-media">
      {% if section.settings.hero_image != blank %}
        <img 
          src="{{ section.settings.hero_image | img_url: '800x600' }}" 
          alt="{{ section.settings.hero_image.alt | escape }}"
          loading="lazy"
          class="hero-image"
        >
      {% else %}
        <div class="hero-placeholder">
          <div class="product-mockup">
            <div class="mockup-circle"></div>
            <div class="mockup-text">Votre produit ici</div>
          </div>
        </div>
      {% endif %}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Hero Section",
  "tag": "section",
  "class": "section",
  "settings": [
    {
      "type": "color_scheme",
      "id": "color_scheme",
      "label": "Color scheme",
      "default": "background-1"
    },
    {
      "type": "checkbox",
      "id": "show_badge",
      "default": true,
      "label": "Afficher le badge"
    },
    {
      "type": "text",
      "id": "badge_text",
      "default": "Nouveau produit tendance ✨",
      "label": "Texte du badge"
    },
    {
      "type": "text",
      "id": "title_highlight",
      "default": "Reste frais",
      "label": "Titre principal"
    },
    {
      "type": "text",
      "id": "subtitle",
      "default": "sans transpirer !",
      "label": "Sous-titre"
    },
    {
      "type": "textarea",
      "id": "description",
      "default": "Le ventilateur de cou portable qui révolutionne ton été. Mains libres, silencieux et ultra-stylé ☁️",
      "label": "Description"
    },
    {
      "type": "text",
      "id": "old_price",
      "default": "29€",
      "label": "Ancien prix"
    },
    {
      "type": "text",
      "id": "current_price",
      "default": "19€",
      "label": "Prix actuel"
    },
    {
      "type": "text",
      "id": "shipping_text",
      "default": "Livraison gratuite 🚚",
      "label": "Texte livraison"
    },
    {
      "type": "text",
      "id": "cta_text",
      "default": "Je veux rester frais ☁️",
      "label": "Texte du bouton"
    },
    {
      "type": "url",
      "id": "cta_url",
      "label": "Lien du bouton"
    },
    {
      "type": "image_picker",
      "id": "hero_image",
      "label": "Image du héros"
    },
    {
      "type": "checkbox",
      "id": "show_guarantees",
      "default": true,
      "label": "Afficher les garanties"
    },
    {
      "type": "text",
      "id": "guarantee_1",
      "default": "Garantie 30 jours",
      "label": "Garantie 1"
    },
    {
      "type": "text",
      "id": "guarantee_2",
      "default": "Paiement sécurisé",
      "label": "Garantie 2"
    },
    {
      "type": "text",
      "id": "guarantee_3",
      "default": "Stock limité",
      "label": "Garantie 3"
    },
    {
      "type": "range",
      "id": "padding_top",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "label": "Padding top",
      "default": 80
    },
    {
      "type": "range",
      "id": "padding_bottom",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "label": "Padding bottom",
      "default": 80
    }
  ],
  "presets": [
    {
      "name": "Hero Section"
    }
  ]
}
{% endschema %}
```

---

## sections/benefits-section.liquid
```liquid
{{ 'section-benefits.css' | asset_url | stylesheet_tag }}

<section class="benefits-section color-{{ section.settings.color_scheme }}" data-section-id="{{ section.id }}">
  <div class="benefits-container">
    <div class="benefits-header">
      <h2 class="benefits-title">
        {% if section.settings.title_part1 != blank %}{{ section.settings.title_part1 }}{% endif %}
        {% if section.settings.title_highlight != blank %}
          <span class="title-highlight">{{ section.settings.title_highlight }}</span>
        {% endif %}
        {% if section.settings.title_part2 != blank %}{{ section.settings.title_part2 }}{% endif %}
      </h2>
      {% if section.settings.description != blank %}
        <p class="benefits-description">{{ section.settings.description }}</p>
      {% endif %}
    </div>

    <div class="benefits-grid">
      {% for block in section.blocks %}
        {% case block.type %}
          {% when 'benefit' %}
            <div class="benefit-card" {{ block.shopify_attributes }}>
              {% if block.settings.icon != blank %}
                <div class="benefit-icon color-{{ block.settings.icon_color }}">
                  {{ block.settings.icon }}
                </div>
              {% endif %}
              {% if block.settings.title != blank %}
                <h3 class="benefit-title">{{ block.settings.title }}</h3>
              {% endif %}
              {% if block.settings.description != blank %}
                <p class="benefit-description">{{ block.settings.description }}</p>
              {% endif %}
            </div>
        {% endcase %}
      {% endfor %}
    </div>

    {% if section.settings.show_additional_benefits %}
      <div class="additional-benefits">
        {% if section.settings.additional_benefit_1_title != blank %}
          <div class="additional-benefit">
            <span class="additional-benefit-emoji">{{ section.settings.additional_benefit_1_emoji }}</span>
            <div class="additional-benefit-content">
              <h4 class="additional-benefit-title">{{ section.settings.additional_benefit_1_title }}</h4>
              <p class="additional-benefit-description">{{ section.settings.additional_benefit_1_description }}</p>
            </div>
          </div>
        {% endif %}
        
        {% if section.settings.additional_benefit_2_title != blank %}
          <div class="additional-benefit">
            <span class="additional-benefit-emoji">{{ section.settings.additional_benefit_2_emoji }}</span>
            <div class="additional-benefit-content">
              <h4 class="additional-benefit-title">{{ section.settings.additional_benefit_2_title }}</h4>
              <p class="additional-benefit-description">{{ section.settings.additional_benefit_2_description }}</p>
            </div>
          </div>
        {% endif %}
      </div>
    {% endif %}

    {% if section.settings.show_use_cases %}
      <div class="use-cases">
        {% if section.settings.use_cases_title != blank %}
          <h3 class="use-cases-title">{{ section.settings.use_cases_title }}</h3>
        {% endif %}
        <div class="use-cases-grid">
          {% if section.settings.use_case_1 != blank %}
            <span class="use-case">{{ section.settings.use_case_1 }}</span>
          {% endif %}
          {% if section.settings.use_case_2 != blank %}
            <span class="use-case">{{ section.settings.use_case_2 }}</span>
          {% endif %}
          {% if section.settings.use_case_3 != blank %}
            <span class="use-case">{{ section.settings.use_case_3 }}</span>
          {% endif %}
          {% if section.settings.use_case_4 != blank %}
            <span class="use-case">{{ section.settings.use_case_4 }}</span>
          {% endif %}
          {% if section.settings.use_case_5 != blank %}
            <span class="use-case">{{ section.settings.use_case_5 }}</span>
          {% endif %}
        </div>
      </div>
    {% endif %}
  </div>
</section>

{% schema %}
{
  "name": "Benefits Section",
  "tag": "section",
  "class": "section",
  "settings": [
    {
      "type": "color_scheme",
      "id": "color_scheme",
      "label": "Color scheme",
      "default": "background-1"
    },
    {
      "type": "text",
      "id": "title_part1",
      "default": "Pourquoi tu vas",
      "label": "Titre partie 1"
    },
    {
      "type": "text",
      "id": "title_highlight",
      "default": "l'adorer",
      "label": "Titre en surbrillance"
    },
    {
      "type": "text",
      "id": "title_part2",
      "default": "?",
      "label": "Titre partie 2"
    },
    {
      "type": "textarea",
      "id": "description",
      "default": "Un concentré de technologie pensé pour ton confort et ton style de vie actif",
      "label": "Description"
    },
    {
      "type": "header",
      "content": "Avantages supplémentaires"
    },
    {
      "type": "checkbox",
      "id": "show_additional_benefits",
      "default": true,
      "label": "Afficher les avantages supplémentaires"
    },
    {
      "type": "text",
      "id": "additional_benefit_1_emoji",
      "default": "🎯",
      "label": "Emoji avantage 1"
    },
    {
      "type": "text",
      "id": "additional_benefit_1_title",
      "default": "Design ergonomique",
      "label": "Titre avantage 1"
    },
    {
      "type": "text",
      "id": "additional_benefit_1_description",
      "default": "S'adapte parfaitement à toutes les morphologies",
      "label": "Description avantage 1"
    },
    {
      "type": "text",
      "id": "additional_benefit_2_emoji",
      "default": "⚡",
      "label": "Emoji avantage 2"
    },
    {
      "type": "text",
      "id": "additional_benefit_2_title",
      "default": "3 vitesses ajustables",
      "label": "Titre avantage 2"
    },
    {
      "type": "text",
      "id": "additional_benefit_2_description",
      "default": "De la brise légère au vent rafraîchissant",
      "label": "Description avantage 2"
    },
    {
      "type": "header",
      "content": "Cas d'usage"
    },
    {
      "type": "checkbox",
      "id": "show_use_cases",
      "default": true,
      "label": "Afficher les cas d'usage"
    },
    {
      "type": "text",
      "id": "use_cases_title",
      "default": "Parfait pour :",
      "label": "Titre des cas d'usage"
    },
    {
      "type": "text",
      "id": "use_case_1",
      "default": "🏃‍♀️ Sport & Running",
      "label": "Cas d'usage 1"
    },
    {
      "type": "text",
      "id": "use_case_2",
      "default": "🚇 Transports en commun",
      "label": "Cas d'usage 2"
    },
    {
      "type": "text",
      "id": "use_case_3",
      "default": "💼 Bureau climatisé",
      "label": "Cas d'usage 3"
    },
    {
      "type": "text",
      "id": "use_case_4",
      "default": "🎪 Festivals & événements",
      "label": "Cas d'usage 4"
    },
    {
      "type": "text",
      "id": "use_case_5",
      "default": "🏖️ Plage & vacances",
      "label": "Cas d'usage 5"
    },
    {
      "type": "range",
      "id": "padding_top",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "label": "Padding top",
      "default": 80
    },
    {
      "type": "range",
      "id": "padding_bottom",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "label": "Padding bottom",
      "default": 80
    }
  ],
  "blocks": [
    {
      "type": "benefit",
      "name": "Avantage",
      "settings": [
        {
          "type": "text",
          "id": "icon",
          "default": "🔇",
          "label": "Icône (emoji)"
        },
        {
          "type": "select",
          "id": "icon_color",
          "options": [
            {
              "value": "blue",
              "label": "Bleu"
            },
            {
              "value": "purple",
              "label": "Violet"
            },
            {
              "value": "pink",
              "label": "Rose"
            },
            {
              "value": "green",
              "label": "Vert"
            },
            {
              "value": "orange",
              "label": "Orange"
            }
          ],
          "default": "blue",
          "label": "Couleur de l'icône"
        },
        {
          "type": "text",
          "id": "title",
          "default": "Ultra silencieux",
          "label": "Titre"
        },
        {
          "type": "textarea",
          "id": "description",
          "default": "Profite de la fraîcheur sans déranger personne autour de toi",
          "label": "Description"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Benefits Section",
      "blocks": [
        {
          "type": "benefit"
        },
        {
          "type": "benefit"
        },
        {
          "type": "benefit"
        }
      ]
    }
  ]
}
{% endschema %}
```

---

## sections/testimonials-section.liquid
```liquid
{{ 'section-testimonials.css' | asset_url | stylesheet_tag }}

<section class="testimonials-section color-{{ section.settings.color_scheme }}" data-section-id="{{ section.id }}">
  <div class="testimonials-container">
    <div class="testimonials-header">
      <h2 class="testimonials-title">
        {% if section.settings.title_part1 != blank %}{{ section.settings.title_part1 }}{% endif %}
        {% if section.settings.title_highlight != blank %}
          <span class="title-highlight">{{ section.settings.title_highlight }}</span>
        {% endif %}
      </h2>
      {% if section.settings.description != blank %}
        <p class="testimonials-description">{{ section.settings.description }}</p>
      {% endif %}
    </div>

    {% if section.settings.show_stats %}
      <div class="testimonials-stats">
        {% if section.settings.stat_1_number != blank %}
          <div class="stat-item">
            <span class="stat-number">{{ section.settings.stat_1_number }}</span>
            <span class="stat-label">{{ section.settings.stat_1_label }}</span>
          </div>
        {% endif %}
        {% if section.settings.stat_2_number != blank %}
          <div class="stat-item">
            <span class="stat-number">{{ section.settings.stat_2_number }}</span>
            <span class="stat-label">{{ section.settings.stat_2_label }}</span>
          </div>
        {% endif %}
        {% if section.settings.stat_3_number != blank %}
          <div class="stat-item">
            <span class="stat-number">{{ section.settings.stat_3_number }}</span>
            <span class="stat-label">{{ section.settings.stat_3_label }}</span>
          </div>
        {% endif %}
      </div>
    {% endif %}

    <div class="testimonials-grid">
      {% for block in section.blocks %}
        {% case block.type %}
          {% when 'testimonial' %}
            <div class="testimonial-card" {{ block.shopify_attributes }}>
              {% if block.settings.rating > 0 %}
                <div class="testimonial-rating">
                  {% for i in (1..5) %}
                    {% if i <= block.settings.rating %}
                      <span class="star filled">★</span>
                    {% else %}
                      <span class="star">☆</span>
                    {% endif %}
                  {% endfor %}
                </div>
              {% endif %}

              {% if block.settings.text != blank %}
                <blockquote class="testimonial-text">
                  "{{ block.settings.text }}"
                </blockquote>
              {% endif %}

              <div class="testimonial-author">
                {% if block.settings.author_image != blank %}
                  <img 
                    src="{{ block.settings.author_image | img_url: '60x60' }}" 
                    alt="{{ block.settings.author_name | escape }}"
                    class="author-image"
                  >
                {% else %}
                  <div class="author-placeholder">
                    {{ block.settings.author_name | slice: 0 | upcase }}
                  </div>
                {% endif %}

                <div class="author-info">
                  {% if block.settings.author_name != blank %}
                    <cite class="author-name">{{ block.settings.author_name }}</cite>
                  {% endif %}
                  {% if block.settings.author_title != blank %}
                    <span class="author-title">{{ block.settings.author_title }}</span>
                  {% endif %}
                  {% if block.settings.show_verified %}
                    <span class="verified-badge">✓ Vérifié</span>
                  {% endif %}
                </div>
              </div>
            </div>
        {% endcase %}
      {% endfor %}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Testimonials Section",
  "tag": "section",
  "class": "section",
  "settings": [
    {
      "type": "color_scheme",
      "id": "color_scheme",
      "label": "Color scheme",
      "default": "background-1"
    },
    {
      "type": "text",
      "id": "title_part1",
      "default": "Ils adorent leur",
      "label": "Titre partie 1"
    },
    {
      "type": "text",
      "id": "title_highlight",
      "default": "FreshBreeze",
      "label": "Titre en surbrillance"
    },
    {
      "type": "textarea",
      "id": "description",
      "default": "Plus de 2000 clients satisfaits partagent leur expérience",
      "label": "Description"
    },
    {
      "type": "header",
      "content": "Statistiques"
    },
    {
      "type": "checkbox",
      "id": "show_stats",
      "default": true,
      "label": "Afficher les statistiques"
    },
    {
      "type": "text",
      "id": "stat_1_number",
      "default": "2000+",
      "label": "Statistique 1 - Nombre"
    },
    {
      "type": "text",
      "id": "stat_1_label",
      "default": "Clients satisfaits",
      "label": "Statistique 1 - Label"
    },
    {
      "type": "text",
      "id": "stat_2_number",
      "default": "4.8/5",
      "label": "Statistique 2 - Nombre"
    },
    {
      "type": "text",
      "id": "stat_2_label",
      "default": "Note moyenne",
      "label": "Statistique 2 - Label"
    },
    {
      "type": "text",
      "id": "stat_3_number",
      "default": "97%",
      "label": "Statistique 3 - Nombre"
    },
    {
      "type": "text",
      "id": "stat_3_label",
      "default": "Recommandent",
      "label": "Statistique 3 - Label"
    },
    {
      "type": "range",
      "id": "padding_top",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "label": "Padding top",
      "default": 80
    },
    {
      "type": "range",
      "id": "padding_bottom",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "label": "Padding bottom",
      "default": 80
    }
  ],
  "blocks": [
    {
      "type": "testimonial",
      "name": "Témoignage",
      "settings": [
        {
          "type": "textarea",
          "id": "text",
          "default": "Incroyable ! Je peux enfin courir en été sans mourir de chaud.",
          "label": "Texte du témoignage"
        },
        {
          "type": "text",
          "id": "author_name",
          "default": "Marie L.",
          "label": "Nom de l'auteur"
        },
        {
          "type": "text",
          "id": "author_title",
          "default": "Utilisatrice vérifiée",
          "label": "Titre de l'auteur"
        },
        {
          "type": "image_picker",
          "id": "author_image",
          "label": "Photo de l'auteur"
        },
        {
          "type": "range",
          "id": "rating",
          "min": 0,
          "max": 5,
          "step": 1,
          "label": "Note (étoiles)",
          "default": 5
        },
        {
          "type": "checkbox",
          "id": "show_verified",
          "default": true,
          "label": "Afficher le badge vérifié"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Testimonials Section",
      "blocks": [
        {
          "type": "testimonial"
        },
        {
          "type": "testimonial"
        },
        {
          "type": "testimonial"
        }
      ]
    }
  ]
}
{% endschema %}
```

---

## sections/cta-section.liquid
```liquid
{{ 'section-cta.css' | asset_url | stylesheet_tag }}

<section class="cta-section color-{{ section.settings.color_scheme }}" data-section-id="{{ section.id }}">
  <div class="cta-container">
    {% if section.settings.show_urgency_badge and section.settings.urgency_text != blank %}
      <div class="cta-urgency-badge">
        {{ section.settings.urgency_text }}
      </div>
    {% endif %}

    <div class="cta-content">
      <h2 class="cta-title">
        {% if section.settings.title_part1 != blank %}{{ section.settings.title_part1 }}{% endif %}
        {% if section.settings.title_highlight != blank %}
          <span class="title-highlight">{{ section.settings.title_highlight }}</span>
        {% endif %}
        {% if section.settings.title_part2 != blank %}{{ section.settings.title_part2 }}{% endif %}
      </h2>

      {% if section.settings.description != blank %}
        <p class="cta-description">{{ section.settings.description }}</p>
      {% endif %}

      {% if section.settings.launch_price_text != blank %}
        <div class="cta-launch-price">{{ section.settings.launch_price_text }}</div>
      {% endif %}

      <div class="cta-pricing">
        {% if section.settings.old_price != blank %}
          <span class="cta-old-price">{{ section.settings.old_price }}</span>
        {% endif %}
        {% if section.settings.current_price != blank %}
          <span class="cta-current-price">{{ section.settings.current_price }}</span>
        {% endif %}
        {% if section.settings.discount_percentage != blank %}
          <span class="cta-discount">{{ section.settings.discount_percentage }}</span>
        {% endif %}
      </div>

      {% if section.settings.shipping_text != blank %}
        <div class="cta-shipping">{{ section.settings.shipping_text }}</div>
      {% endif %}

      {% if section.settings.cta_text != blank %}
        <a href="{{ section.settings.cta_url | default: '#' }}" class="cta-button">
          {{ section.settings.cta_text }}
        </a>
      {% endif %}

      {% if section.settings.security_text != blank %}
        <div class="cta-security">{{ section.settings.security_text }}</div>
      {% endif %}

      {% if section.settings.show_countdown %}
        <div class="cta-countdown">
          {% if section.settings.countdown_label != blank %}
            <div class="countdown-label">{{ section.settings.countdown_label }}</div>
          {% endif %}
          <div class="countdown-timer" data-countdown-end="2024-12-31T23:59:59">
            <div class="countdown-item">
              <span class="countdown-number" data-days>23</span>
              <span class="countdown-unit">Jours</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-number" data-hours>12</span>
              <span class="countdown-unit">Heures</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-number" data-minutes>34</span>
              <span class="countdown-unit">Minutes</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-number" data-seconds>56</span>
              <span class="countdown-unit">Secondes</span>
            </div>
          </div>
        </div>
      {% endif %}
    </div>

    {% if section.settings.show_footer %}
      <div class="cta-footer">
        {% if section.settings.footer_text != blank %}
          <div class="footer-text">{{ section.settings.footer_text }}</div>
        {% endif %}
        <div class="footer-links">
          {% if section.settings.footer_link_1_text != blank %}
            <a href="#" class="footer-link">{{ section.settings.footer_link_1_text }}</a>
          {% endif %}
          {% if section.settings.footer_link_2_text != blank %}
            <a href="#" class="footer-link">{{ section.settings.footer_link_2_text }}</a>
          {% endif %}
          {% if section.settings.footer_link_3_text != blank %}
            <a href="#" class="footer-link">{{ section.settings.footer_link_3_text }}</a>
          {% endif %}
        </div>
      </div>
    {% endif %}
  </div>
</section>

<script>
  // Simple countdown timer
  function initCountdown() {
    const countdownElements = document.querySelectorAll('[data-countdown-end]');
    
    countdownElements.forEach(element => {
      const endDate = new Date(element.getAttribute('data-countdown-end')).getTime();
      
      function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = endDate - now;
        
        if (timeLeft > 0) {
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
          
          const daysElement = element.querySelector('[data-days]');
          const hoursElement = element.querySelector('[data-hours]');
          const minutesElement = element.querySelector('[data-minutes]');
          const secondsElement = element.querySelector('[data-seconds]');
          
          if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
          if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
          if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
          if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
        }
      }
      
      updateCountdown();
      setInterval(updateCountdown, 1000);
    });
  }
  
  document.addEventListener('DOMContentLoaded', initCountdown);
</script>

{% schema %}
{
  "name": "CTA Section",
  "tag": "section",
  "class": "section",
  "settings": [
    {
      "type": "color_scheme",
      "id": "color_scheme",
      "label": "Color scheme",
      "default": "background-1"
    },
    {
      "type": "checkbox",
      "id": "show_urgency_badge",
      "default": true,
      "label": "Afficher le badge d'urgence"
    },
    {
      "type": "text",
      "id": "urgency_text",
      "default": "🔥 Stock limité - Plus que quelques pièces",
      "label": "Texte d'urgence"
    },
    {
      "type": "text",
      "id": "title_part1",
      "default": "Prêt à dire adieu à la",
      "label": "Titre partie 1"
    },
    {
      "type": "text",
      "id": "title_highlight",
      "default": "chaleur",
      "label": "Titre en surbrillance"
    },
    {
      "type": "text",
      "id": "title_part2",
      "default": "?",
      "label": "Titre partie 2"
    },
    {
      "type": "textarea",
      "id": "description",
      "default": "Rejoins la révolution de la fraîcheur portable. Ton été ne sera plus jamais le même ☁️",
      "label": "Description"
    },
    {
      "type": "text",
      "id": "launch_price_text",
      "default": "Prix de lancement ✨",
      "label": "Texte prix de lancement"
    },
    {
      "type": "text",
      "id": "old_price",
      "default": "29€",
      "label": "Ancien prix"
    },
    {
      "type": "text",
      "id": "current_price",
      "default": "19€",
      "label": "Prix actuel"
    },
    {
      "type": "text",
      "id": "discount_percentage",
      "default": "-34%",
      "label": "Pourcentage de réduction"
    },
    {
      "type": "text",
      "id": "shipping_text",
      "default": "+ Livraison gratuite en France 🚚",
      "label": "Texte livraison"
    },
    {
      "type": "text",
      "id": "cta_text",
      "default": "Je veux rester frais ☁️",
      "label": "Texte du bouton"
    },
    {
      "type": "url",
      "id": "cta_url",
      "label": "Lien du bouton"
    },
    {
      "type": "text",
      "id": "security_text",
      "default": "Paiement 100% sécurisé • Garantie satisfait ou remboursé 15 jours",
      "label": "Texte de sécurité"
    },
    {
      "type": "header",
      "content": "Compte à rebours"
    },
    {
      "type": "checkbox",
      "id": "show_countdown",
      "default": true,
      "label": "Afficher le compte à rebours"
    },
    {
      "type": "text",
      "id": "countdown_label",
      "default": "⏰ Offre limitée dans le temps !",
      "label": "Label du compte à rebours"
    },
    {
      "type": "text",
      "id": "countdown_units",
      "default": "Heures • Minutes • Secondes",
      "label": "Unités du compte à rebours"
    },
    {
      "type": "header",
      "content": "Footer"
    },
    {
      "type": "checkbox",
      "id": "show_footer",
      "default": true,
      "label": "Afficher le footer"
    },
    {
      "type": "text",
      "id": "footer_text",
      "default": "© 2024 FreshBreeze - Reste frais, reste stylé ☁️",
      "label": "Texte du footer"
    },
    {
      "type": "text",
      "id": "footer_link_1_text",
      "default": "Mentions légales",
      "label": "Lien footer 1"
    },
    {
      "type": "text",
      "id": "footer_link_2_text",
      "default": "CGV",
      "label": "Lien footer 2"
    },
    {
      "type": "text",
      "id": "footer_link_3_text",
      "default": "Contact",
      "label": "Lien footer 3"
    },
    {
      "type": "range",
      "id": "padding_top",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "label": "Padding top",
      "default": 80
    },
    {
      "type": "range",
      "id": "padding_bottom",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "label": "Padding bottom",
      "default": 80
    }
  ],
  "presets": [
    {
      "name": "CTA Section"
    }
  ]
}
{% endschema %}
```

---

## sections/header.liquid
```liquid
{{ 'section-header.css' | asset_url | stylesheet_tag }}

<header class="header" data-section-id="{{ section.id }}">
  <div class="header-wrapper">
    <div class="header-logo">
      {% if section.settings.logo != blank %}
        <a href="{{ routes.root_url }}" class="logo-link">
          <img 
            src="{{ section.settings.logo | img_url: '200x' }}" 
            alt="{{ shop.name }}"
            width="{{ section.settings.logo_width }}"
            height="auto"
            loading="lazy"
          >
        </a>
      {% else %}
        <a href="{{ routes.root_url }}" class="logo-text">
          {{ shop.name }}
        </a>
      {% endif %}
    </div>

    <nav class="header-nav" role="navigation">
      {% if section.settings.menu != blank %}
        <ul class="nav-list">
          {% for link in linklists[section.settings.menu].links %}
            <li class="nav-item">
              <a href="{{ link.url }}" class="nav-link">
                {{ link.title }}
              </a>
            </li>
          {% endfor %}
        </ul>
      {% endif %}
    </nav>

    <div class="header-actions">
      <a href="{{ routes.cart_url }}" class="cart-link">
        <span class="cart-icon">🛒</span>
        <span class="cart-count">{{ cart.item_count }}</span>
      </a>
    </div>
  </div>
</header>

{% schema %}
{
  "name": "Header",
  "tag": "header",
  "class": "section-header",
  "settings": [
    {
      "type": "image_picker",
      "id": "logo",
      "label": "Logo"
    },
    {
      "type": "range",
      "id": "logo_width",
      "min": 50,
      "max": 300,
      "step": 10,
      "default": 150,
      "label": "Logo width"
    },
    {
      "type": "link_list",
      "id": "menu",
      "default": "main-menu",
      "label": "Menu"
    },
    {
      "type": "checkbox",
      "id": "enable_sticky_header",
      "default": true,
      "label": "Enable sticky header"
    }
  ]
}
{% endschema %}
```

---

## sections/footer.liquid
```liquid
<footer class="footer" data-section-id="{{ section.id }}">
  <div class="footer-wrapper">
    <div class="footer-content">
      {% for block in section.blocks %}
        {% case block.type %}
          {% when 'link_list' %}
            <div class="footer-column" {{ block.shopify_attributes }}>
              {% if block.settings.heading != blank %}
                <h3 class="footer-heading">{{ block.settings.heading }}</h3>
              {% endif %}
              {% if block.settings.menu != blank %}
                <ul class="footer-list">
                  {% for link in linklists[block.settings.menu].links %}
                    <li>
                      <a href="{{ link.url }}" class="footer-link">
                        {{ link.title }}
                      </a>
                    </li>
                  {% endfor %}
                </ul>
              {% endif %}
            </div>
          {% when 'text' %}
            <div class="footer-column" {{ block.shopify_attributes }}>
              {% if block.settings.heading != blank %}
                <h3 class="footer-heading">{{ block.settings.heading }}</h3>
              {% endif %}
              {% if block.settings.subtext != blank %}
                <div class="footer-text">
                  {{ block.settings.subtext }}
                </div>
              {% endif %}
            </div>
        {% endcase %}
      {% endfor %}
    </div>

    <div class="footer-bottom">
      <div class="footer-copyright">
        © {{ "now" | date: "%Y" }} {{ shop.name }}. Tous droits réservés.
      </div>
    </div>
  </div>
</footer>

{% schema %}
{
  "name": "Footer",
  "tag": "footer",
  "class": "section-footer",
  "settings": [
    {
      "type": "color_scheme",
      "id": "color_scheme",
      "label": "Color scheme",
      "default": "background-1"
    }
  ],
  "blocks": [
    {
      "type": "link_list",
      "name": "Link list",
      "settings": [
        {
          "type": "text",
          "id": "heading",
          "default": "Liens rapides",
          "label": "Heading"
        },
        {
          "type": "link_list",
          "id": "menu",
          "default": "footer",
          "label": "Menu"
        }
      ]
    },
    {
      "type": "text",
      "name": "Text",
      "settings": [
        {
          "type": "text",
          "id": "heading",
          "default": "Contact",
          "label": "Heading"
        },
        {
          "type": "richtext",
          "id": "subtext",
          "default": "<p>Email: contact@example.com<br>Téléphone: 01 23 45 67 89</p>",
          "label": "Text"
        }
      ]
    }
  ],
  "default": {
    "blocks": [
      {
        "type": "link_list"
      },
      {
        "type": "text"
      }
    ]
  }
}
{% endschema %}
```

---

## sections/main-page.liquid
```liquid
<article class="page">
  <div class="page-wrapper">
    <div class="page-header">
      {% if page.title != blank %}
        <h1 class="page-title">{{ page.title }}</h1>
      {% endif %}
    </div>
    
    <div class="page-content">
      {% if page.content != blank %}
        <div class="rte">
          {{ page.content }}
        </div>
      {% else %}
        <div class="rte">
          <h2>Bienvenue sur notre site</h2>
          <p>Cette page utilise le template par défaut. Vous pouvez personnaliser son contenu dans l'administration Shopify.</p>
        </div>
      {% endif %}
    </div>
  </div>
</article>

<style>
  .page {
    padding: var(--section-padding-top) 0 var(--section-padding-bottom);
  }
  
  .page-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .page-header {
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .page-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: rgb(var(--color-text));
    margin: 0;
  }
  
  .page-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .rte {
    font-size: 1.1rem;
    line-height: 1.6;
    color: rgb(var(--color-text));
  }
  
  .rte h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
    color: rgb(var(--color-text));
  }
  
  .rte p {
    margin-bottom: 1rem;
  }
  
  @media (max-width: 768px) {
    .page-title {
      font-size: 2rem;
    }
    
    .page-wrapper {
      padding: 0 15px;
    }
  }
</style>

{% schema %}
{
  "name": "Main page",
  "tag": "section",
  "class": "section",
  "settings": [
    {
      "type": "color_scheme",
      "id": "color_scheme",
      "label": "Color scheme",
      "default": "background-1"
    },
    {
      "type": "range",
      "id": "padding_top",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "label": "Padding top",
      "default": 36
    },
    {
      "type": "range",
      "id": "padding_bottom",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "label": "Padding bottom",
      "default": 36
    }
  ]
}
{% endschema %}
```

---

## sections/main-collection-product-grid.liquid
```liquid
<div class="collection-grid" data-section-id="{{ section.id }}">
  <div class="collection-grid-wrapper">
    {% paginate collection.products by section.settings.products_per_page %}
      <div class="product-grid" data-grid-columns="{{ section.settings.columns_desktop }}">
        {% for product in collection.products %}
          <div class="product-grid-item">
            {% render 'product-card', product: product %}
          </div>
        {% endfor %}
      </div>
      
      {% if paginate.pages > 1 %}
        <div class="pagination">
          {{ paginate | default_pagination }}
        </div>
      {% endif %}
    {% endpaginate %}
  </div>
</div>

<style>
  .collection-grid {
    padding: var(--section-padding-top) 0 var(--section-padding-bottom);
  }
  
  .collection-grid-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(var(--grid-columns-mobile, 2), 1fr);
    gap: 20px;
    margin-bottom: 2rem;
  }
  
  @media (min-width: 768px) {
    .product-grid {
      grid-template-columns: repeat(var(--grid-columns-desktop, 4), 1fr);
      gap: 30px;
    }
  }
  
  .product-grid[data-grid-columns="2"] {
    --grid-columns-desktop: 2;
  }
  
  .product-grid[data-grid-columns="3"] {
    --grid-columns-desktop: 3;
  }
  
  .product-grid[data-grid-columns="4"] {
    --grid-columns-desktop: 4;
  }
  
  .pagination {
    text-align: center;
    margin-top: 2rem;
  }
</style>

{% schema %}
{
  "name": "Collection product grid",
  "tag": "section",
  "class": "section",
  "settings": [
    {
      "type": "color_scheme",
      "id": "color_scheme",
      "label": "Color scheme",
      "default": "background-1"
    },
    {
      "type": "range",
      "id": "products_per_page",
      "min": 8,
      "max": 48,
      "step": 4,
      "label": "Products per page",
      "default": 24
    },
    {
      "type": "range",
      "id": "columns_desktop",
      "min": 2,
      "max": 5,
      "step": 1,
      "label": "Number of columns on desktop",
      "default": 4
    },
    {
      "type": "select",
      "id": "columns_mobile",
      "options": [
        {
          "value": "1",
          "label": "1 column"
        },
        {
          "value": "2",
          "label": "2 columns"
        }
      ],
      "default": "2",
      "label": "Number of columns on mobile"
    },
    {
      "type": "range",
      "id": "padding_top",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "label": "Padding top",
      "default": 40
    },
    {
      "type": "range",
      "id": "padding_bottom",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "label": "Padding bottom",
      "default": 80
    }
  ]
}
{% endschema %}
```

---

## sections/collection-banner.liquid
```liquid
<div class="collection-banner" data-section-id="{{ section.id }}">
  <div class="collection-banner-wrapper">
    {% if collection.image and section.settings.show_collection_image %}
      <div class="collection-image">
        <img 
          src="{{ collection.image | img_url: '1200x400' }}" 
          alt="{{ collection.image.alt | escape }}"
          loading="lazy"
        >
      </div>
    {% endif %}
    
    <div class="collection-content">
      <h1 class="collection-title">
        {{ collection.title | escape }}
      </h1>
      
      {% if collection.description != blank and section.settings.show_collection_description %}
        <div class="collection-description rte">
          {{ collection.description }}
        </div>
      {% endif %}
    </div>
  </div>
</div>

<style>
  .collection-banner {
    padding: var(--section-padding-top) 0 var(--section-padding-bottom);
    background: rgb(var(--color-background));
  }
  
  .collection-banner-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
  }
  
  .collection-image {
    margin-bottom: 2rem;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .collection-image img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .collection-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: rgb(var(--color-text));
    margin: 0 0 1rem;
  }
  
  .collection-description {
    font-size: 1.1rem;
    color: rgb(var(--color-text));
    max-width: 600px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    .collection-title {
      font-size: 2rem;
    }
    
    .collection-banner-wrapper {
      padding: 0 15px;
    }
  }
</style>

{% schema %}
{
  "name": "Collection banner",
  "tag": "section",
  "class": "section",
  "settings": [
    {
      "type": "color_scheme",
      "id": "color_scheme",
      "label": "Color scheme",
      "default": "background-1"
    },
    {
      "type": "checkbox",
      "id": "show_collection_description",
      "default": true,
      "label": "Show collection description"
    },
    {
      "type": "checkbox",
      "id": "show_collection_image",
      "default": true,
      "label": "Show collection image"
    },
    {
      "type": "select",
      "id": "image_height",
      "options": [
        {
          "value": "small",
          "label": "Small"
        },
        {
          "value": "medium",
          "label": "Medium"
        },
        {
          "value": "large",
          "label": "Large"
        }
      ],
      "default": "medium",
      "label": "Image height"
    },
    {
      "type": "range",
      "id": "padding_top",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "label": "Padding top",
      "default": 80
    },
    {
      "type": "range",
      "id": "padding_bottom",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "label": "Padding bottom",
      "default": 40
    }
  ]
}
{% endschema %}
```

---

## snippets/icon.liquid
```liquid
{% case icon %}
  {% when 'chevron-down' %}
    <svg viewBox="0 0 20 20" fill="currentColor" class="{{ class }}">
      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
  {% when 'chevron-up' %}
    <svg viewBox="0 0 20 20" fill="currentColor" class="{{ class }}">
      <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
    </svg>
  {% when 'cart' %}
    <svg viewBox="0 0 20 20" fill="currentColor" class="{{ class }}">
      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  {% when 'star' %}
    <svg viewBox="0 0 20 20" fill="currentColor" class="{{ class }}">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  {% when 'check' %}
    <svg viewBox="0 0 20 20" fill="currentColor" class="{{ class }}">
      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
    </svg>
  {% else %}
    <span>{{ icon }}</span>
{% endcase %}
```

---

## snippets/product-card.liquid
```liquid
<div class="product-card">
  <div class="product-card-media">
    {% if product.featured_image %}
      <a href="{{ product.url }}" class="product-link">
        <img 
          src="{{ product.featured_image | img_url: '400x400' }}" 
          alt="{{ product.featured_image.alt | escape }}"
          loading="lazy"
          class="product-image"
        >
      </a>
    {% else %}
      <div class="product-placeholder">
        <span>Pas d'image</span>
      </div>
    {% endif %}
  </div>
  
  <div class="product-card-content">
    <h3 class="product-title">
      <a href="{{ product.url }}">{{ product.title | escape }}</a>
    </h3>
    
    <div class="product-price">
      {% if product.compare_at_price > product.price %}
        <span class="price-compare">{{ product.compare_at_price | money }}</span>
      {% endif %}
      <span class="price-current">{{ product.price | money }}</span>
    </div>
    
    {% if product.available %}
      <form action="/cart/add" method="post" enctype="multipart/form-data" class="product-form">
        <input type="hidden" name="id" value="{{ product.selected_or_first_available_variant.id }}">
        <button type="submit" class="btn-add-to-cart">
          Ajouter au panier
        </button>
      </form>
    {% else %}
      <button class="btn-sold-out" disabled>
        Épuisé
      </button>
    {% endif %}
  </div>
</div>

<style>
  .product-card {
    border: 1px solid rgba(var(--color-text), 0.1);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .product-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(var(--color-text), 0.1);
  }
  
  .product-card-media {
    position: relative;
    overflow: hidden;
  }
  
  .product-link {
    display: block;
  }
  
  .product-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .product-card:hover .product-image {
    transform: scale(1.05);
  }
  
  .product-placeholder {
    width: 100%;
    height: 300px;
    background: rgba(var(--color-text), 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(var(--color-text), 0.6);
  }
  
  .product-card-content {
    padding: 1rem;
  }
  
  .product-title {
    margin: 0 0 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  .product-title a {
    color: rgb(var(--color-text));
    text-decoration: none;
  }
  
  .product-title a:hover {
    color: rgb(var(--color-primary));
  }
  
  .product-price {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .price-compare {
    text-decoration: line-through;
    color: rgba(var(--color-text), 0.6);
    font-size: 0.9rem;
  }
  
  .price-current {
    font-weight: 600;
    color: rgb(var(--color-primary));
    font-size: 1.1rem;
  }
  
  .btn-add-to-cart,
  .btn-sold-out {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-add-to-cart {
    background: rgb(var(--color-primary));
    color: white;
  }
  
  .btn-add-to-cart:hover {
    background: rgb(var(--color-accent));
  }
  
  .btn-sold-out {
    background: rgba(var(--color-text), 0.3);
    color: rgba(var(--color-text), 0.7);
    cursor: not-allowed;
  }
</style>
```

---

## config/settings_schema.json
```json
[
  {
    "name": "theme_info",
    "theme_name": "FreshBreeze",
    "theme_version": "1.0.0",
    "theme_author": "FreshBreeze Team",
    "theme_documentation_url": "",
    "theme_support_url": ""
  },
  {
    "name": "Couleurs",
    "settings": [
      {
        "type": "color",
        "id": "color_primary",
        "label": "Couleur principale",
        "default": "#87ceeb"
      },
      {
        "type": "color",
        "id": "color_secondary",
        "label": "Couleur secondaire",
        "default": "#e6e6fa"
      },
      {
        "type": "color",
        "id": "color_accent",
        "label": "Couleur d'accent",
        "default": "#ffc0cb"
      },
      {
        "type": "color",
        "id": "color_text",
        "label": "Couleur du texte",
        "default": "#374151"
      },
      {
        "type": "color",
        "id": "color_background",
        "label": "Couleur de fond",
        "default": "#f8fafc"
      }
    ]
  },
  {
    "name": "Typographie",
    "settings": [
      {
        "type": "font_picker",
        "id": "font_heading",
        "label": "Police des titres",
        "default": "Inter"
      },
      {
        "type": "font_picker",
        "id": "font_body",
        "label": "Police du corps",
        "default": "Inter"
      }
    ]
  },
  {
    "name": "Réassurance",
    "settings": [
      {
        "type": "checkbox",
        "id": "show_shipping_guarantee",
        "label": "Afficher la garantie livraison",
        "default": true
      },
      {
        "type": "checkbox",
        "id": "show_money_back",
        "label": "Afficher satisfait ou remboursé",
        "default": true
      },
      {
        "type": "checkbox",
        "id": "show_secure_payment",
        "label": "Afficher paiement sécurisé",
        "default": true
      }
    ]
  }
]
```

---

## config/settings_data.json
```json
{
  "current": {
    "color_primary": "#87ceeb",
    "color_secondary": "#e6e6fa",
    "color_accent": "#ffc0cb",
    "color_text": "#374151",
    "color_background": "#f8fafc",
    "font_heading": "Inter",
    "font_body": "Inter",
    "show_shipping_guarantee": true,
    "show_money_back": true,
    "show_secure_payment": true,
    "sections": {
      "header": {
        "type": "header",
        "settings": {
          "color_scheme": "background-1",
          "logo_width": 150,
          "menu": "main-menu",
          "show_line_separator": true,
          "enable_sticky_header": true,
          "margin_bottom": 0
        }
      },
      "footer": {
        "type": "footer",
        "blocks": [
          {
            "type": "link_list",
            "settings": {
              "heading": "Liens rapides",
              "menu": "footer"
            }
          },
          {
            "type": "text",
            "settings": {
              "heading": "Contact",
              "subtext": "<p>Email: contact@freshbreeze.com<br>Téléphone: 01 23 45 67 89</p>"
            }
          }
        ],
        "block_order": ["link_list", "text"],
        "settings": {
          "color_scheme": "background-1",
          "newsletter_enable": true,
          "newsletter_heading": "Newsletter",
          "show_social": true,
          "enable_follow_on_shop": true,
          "show_policy": true,
          "margin_top": 48,
          "padding_top": 36,
          "padding_bottom": 36
        }
      }
    }
  }
}
```

---

## assets/base.css
```css
/* Reset and Base Styles */
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  height: 100%;
}

body {
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100%;
  margin: 0;
  font-size: 1.5rem;
  letter-spacing: 0.06rem;
  line-height: 1.6;
  font-family: var(--font-body-family);
  font-style: var(--font-body-style);
  font-weight: var(--font-body-weight);
  color: rgb(var(--color-text));
  background: rgb(var(--color-background));
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading-family);
  font-weight: var(--font-heading-weight);
  line-height: 1.3;
  margin: 0 0 1rem;
}

h1 {
  font-size: 3.2rem;
}

h2 {
  font-size: 2.8rem;
}

h3 {
  font-size: 2.4rem;
}

h4 {
  font-size: 2rem;
}

h5 {
  font-size: 1.8rem;
}

h6 {
  font-size: 1.6rem;
}

p {
  margin: 0 0 1rem;
}

a {
  color: rgb(var(--color-primary));
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 6px;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-primary {
  background: rgb(var(--color-primary));
  color: white;
}

.btn-primary:hover {
  background: rgb(var(--color-accent));
  text-decoration: none;
}

.btn-secondary {
  background: transparent;
  color: rgb(var(--color-primary));
  border: 2px solid rgb(var(--color-primary));
}

.btn-secondary:hover {
  background: rgb(var(--color-primary));
  color: white;
  text-decoration: none;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Grid */
.grid {
  display: grid;
  gap: 2rem;
}

.grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

/* Responsive */
@media (max-width: 768px) {
  body {
    font-size: 1.4rem;
  }
  
  h1 {
    font-size: 2.8rem;
  }
  
  h2 {
    font-size: 2.4rem;
  }
  
  h3 {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }
}

/* Utility Classes */
.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.visually-hidden {
  position: absolute !important;
  overflow: hidden;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
}

/* Skip to content */
.skip-to-content-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: rgb(var(--color-text));
  color: rgb(var(--color-background));
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  z-index: 999999;
}

.skip-to-content-link:focus {
  top: 6px;
}
```

---

## assets/section-hero.css
```css
.hero-section {
  padding: 8rem 0;
  background: linear-gradient(135deg, rgba(var(--color-primary), 0.1), rgba(var(--color-secondary), 0.1));
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-content {
  animation: fadeInUp 0.8s ease-out;
}

.hero-badge {
  display: inline-block;
  background: rgba(var(--color-primary), 0.1);
  color: rgb(var(--color-primary));
  padding: 0.8rem 1.6rem;
  border-radius: 50px;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 2rem;
  animation: bounce 2s infinite;
}

.hero-title {
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 2rem;
}

.hero-title-highlight {
  color: rgb(var(--color-primary));
  display: block;
}

.hero-subtitle {
  color: rgb(var(--color-text));
  display: block;
}

.hero-description {
  font-size: 1.8rem;
  color: rgba(var(--color-text), 0.8);
  margin-bottom: 3rem;
  line-height: 1.6;
}

.hero-pricing {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.hero-old-price {
  font-size: 1.8rem;
  text-decoration: line-through;
  color: rgba(var(--color-text), 0.6);
}

.hero-current-price {
  font-size: 3.2rem;
  font-weight: 700;
  color: rgb(var(--color-primary));
}

.hero-shipping {
  background: rgba(var(--color-accent), 0.1);
  color: rgb(var(--color-accent));
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-size: 1.4rem;
  font-weight: 600;
}

.hero-cta-button {
  display: inline-block;
  background: rgb(var(--color-primary));
  color: white;
  padding: 1.8rem 3.6rem;
  border-radius: 50px;
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(var(--color-primary), 0.3);
  margin-bottom: 3rem;
}

.hero-cta-button:hover {
  background: rgb(var(--color-accent));
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(var(--color-primary), 0.4);
  text-decoration: none;
}

.hero-guarantees {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.guarantee-item {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: rgba(var(--color-text), 0.8);
  font-weight: 500;
}

.hero-media {
  position: relative;
  animation: fadeInRight 0.8s ease-out 0.2s both;
}

.hero-image {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(var(--color-text), 0.1);
}

.hero-placeholder {
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, rgba(var(--color-primary), 0.2), rgba(var(--color-secondary), 0.2));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-mockup {
  text-align: center;
  color: rgba(var(--color-text), 0.6);
}

.mockup-circle {
  width: 120px;
  height: 120px;
  background: rgba(var(--color-primary), 0.3);
  border-radius: 50%;
  margin: 0 auto 2rem;
  animation: pulse 3s infinite;
}

.mockup-text {
  font-size: 1.8rem;
  font-weight: 600;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 0;
  }
  
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    padding: 0 1.5rem;
  }
  
  .hero-title {
    font-size: 3.2rem;
  }
  
  .hero-description {
    font-size: 1.6rem;
  }
  
  .hero-guarantees {
    justify-content: center;
  }
  
  .hero-placeholder {
    height: 300px;
  }
}
```

---

## assets/section-benefits.css (CONTINUER AVEC LES AUTRES FICHIERS CSS ET JS...)

Voici ton thème Shopify FreshBreeze complet ! Copie chaque section dans les fichiers correspondants selon la structure des dossiers indiquée au début.

**IMPORTANT :** Après avoir créé tous les fichiers, assure-toi de :
1. Zipper uniquement les dossiers `layout/`, `templates/`, `sections/`, `snippets/`, `assets/`, `config/`, et `locales/` (PAS le dossier parent)
2. Le ZIP final doit avoir cette structure à la racine : layout/, templates/, sections/, etc.

Ton thème est maintenant prêt à être importé dans Shopify !
