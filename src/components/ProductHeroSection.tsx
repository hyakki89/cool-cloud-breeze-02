import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/zen-ring-hero.jpg";

const ProductHeroSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Nuages décoratifs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-60 h-30 bg-sky-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-40 bg-pastel-pink/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image du produit */}
          <div className="relative">
            <div className="card-cloud rounded-3xl p-8 relative overflow-hidden">
              <img
                src={heroImage}
                alt="Zen Ring - Bague connectée Bluetooth avec boîtier de recharge"
                className="w-full h-auto object-contain rounded-2xl"
              />
              <div className="absolute top-6 left-6">
                <Badge className="bg-gradient-to-r from-sky-blue to-pastel-pink text-white border-0">
                  Nouveau
                </Badge>
              </div>
            </div>
          </div>

          {/* Contenu texte */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="gradient-text">Swipez sans effort.</span><br />
                Contrôlez votre smartphone du bout des doigts.
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                La Zen Ring vous permet de scroller TikTok, Instagram, YouTube et même lire vos e-books… 
                <span className="font-semibold text-gray-800"> sans toucher l'écran.</span>
              </p>
            </div>

            {/* Prix */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-3xl text-gray-400 line-through">49,99 €</span>
                <span className="text-5xl font-bold gradient-text">24,99 €</span>
                <Badge variant="destructive" className="text-lg py-1 px-3">
                  -50%
                </Badge>
              </div>
              <p className="text-green-600 font-semibold text-lg">
                Économisez 25,00 € aujourd'hui !
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="btn-cloud text-white text-xl py-6 px-12 rounded-2xl w-full lg:w-auto"
              >
                ✅ Ajouter au panier
              </Button>
              <p className="text-sm text-gray-500">
                🔒 Paiement sécurisé • 🚚 Livraison gratuite • ✅ Garantie 14 jours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHeroSection;