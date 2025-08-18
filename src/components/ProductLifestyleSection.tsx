import { Badge } from "@/components/ui/badge";

const ProductLifestyleSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-sky-blue/5 via-lavender/5 to-pastel-pink/5">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image lifestyle */}
          <div className="relative">
            <div className="card-cloud rounded-3xl p-8 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1607734834519-d8576ae60ea1?auto=format&fit=crop&w=600&q=80"
                alt="Personne utilisant la Zen Ring pour scroller sur TikTok"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute top-6 right-6">
                <Badge className="bg-gradient-to-r from-sky-blue to-pastel-pink text-white border-0">
                  En action
                </Badge>
              </div>
              
              {/* Overlay avec icônes d'apps */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex justify-center gap-4">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xs">
                      TikTok
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                      IG
                    </div>
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                      YT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu texte */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
                <span className="gradient-text">Pensée pour TikTok,</span><br />
                parfaite pour Instagram,<br />
                idéale pour vos photos, vidéos et présentations.
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Compatible iOS & Android avec connexion Bluetooth 5.3 en seulement 3 secondes.
              </p>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 card-cloud rounded-2xl">
                <div className="text-3xl font-bold gradient-text mb-2">3s</div>
                <div className="text-gray-600">Connexion instantanée</div>
              </div>
              <div className="text-center p-6 card-cloud rounded-2xl">
                <div className="text-3xl font-bold gradient-text mb-2">5.3</div>
                <div className="text-gray-600">Bluetooth dernière gen.</div>
              </div>
            </div>

            {/* Applications supportées */}
            <div className="card-cloud rounded-2xl p-6">
              <h4 className="font-semibold mb-4 text-gray-800">Applications compatibles :</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "📱 TikTok", "📷 Instagram", "▶️ YouTube", "🎵 Spotify", 
                  "📖 Kindle", "📺 Netflix", "🎮 Jeux mobiles", "📸 Appareil photo"
                ].map((app, index) => (
                  <span 
                    key={index}
                    className="bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30 text-sm text-gray-700"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLifestyleSection;