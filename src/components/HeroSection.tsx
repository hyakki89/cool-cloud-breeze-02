import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Nuages flottants en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-16 bg-white/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-24 bg-lavender/20 rounded-full blur-2xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-20 bg-pastel-pink/20 rounded-full blur-xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge "Nouveau Produit" */}
          <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-sky-blue rounded-full animate-pulse-soft"></span>
            <span className="text-sm font-medium text-gray-700">Nouveau produit tendance ✨</span>
          </div>

          {/* Accroche principale */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            <span className="gradient-text">Reste frais</span>
            <br />
            <span className="text-gray-800">sans transpirer !</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            Le ventilateur de cou portable qui révolutionne ton été. 
            Mains libres, silencieux et ultra-stylé ☁️
          </p>

          {/* Image produit principale */}
          <div className="relative mb-12 animate-fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            <div className="relative inline-block">
              <img src="/lovable-uploads/9bda1dac-f712-40e6-9bfd-9fc5c701f044.png" alt="Ventilateur de cou portable" className="w-64 md:w-80 lg:w-96 mx-auto rounded-3xl shadow-2xl shadow-sky-blue/20 animate-float" />
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-3xl"></div>
            </div>
          </div>

          {/* Prix et CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{
          animationDelay: '0.8s'
        }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
                <span className="text-lg text-gray-500 line-through mr-2">29€</span>
                19€
              </div>
              <div className="text-sm text-gray-600">Livraison gratuite 🚚</div>
            </div>
            
            <Button className="btn-cloud text-white font-semibold py-4 px-8 rounded-full text-lg border-0 group">
              Je veux rester frais ☁️
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>

          {/* Garanties */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600 animate-fade-in-up" style={{
          animationDelay: '1s'
        }}>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Garantie 30 jours
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Paiement sécurisé
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Stock limité
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;