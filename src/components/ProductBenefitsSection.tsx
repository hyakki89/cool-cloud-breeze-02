import { Smartphone, Music, Camera, Battery } from "lucide-react";

const ProductBenefitsSection = () => {
  const benefits = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      emoji: "📱",
      title: "Swipe intelligent",
      description: "Faites défiler vos réseaux sociaux sans toucher l'écran"
    },
    {
      icon: <Music className="w-8 h-8" />,
      emoji: "🎶", 
      title: "Contrôle multimédia",
      description: "Changez de musique, ajustez le volume, mettez en pause"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      emoji: "📸",
      title: "Selfies & vidéos à distance",
      description: "Déclencheur photo pratique et discret"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      emoji: "🔋",
      title: "Autonomie longue durée",
      description: "Jusqu'à 72h d'utilisation + boîtier rechargeable inclus"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Nuages décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-20 bg-lavender/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-30 bg-mint-fresh/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pourquoi choisir la <span className="gradient-text">Zen Ring</span> ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les fonctionnalités révolutionnaires qui vont transformer votre quotidien numérique
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="card-cloud rounded-3xl p-8 h-full hover:scale-105 transition-all duration-300 text-center">
                {/* Icône avec dégradé */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-sky-blue to-pastel-pink text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                
                {/* Emoji décoratif */}
                <div className="text-4xl mb-4">{benefit.emoji}</div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBenefitsSection;