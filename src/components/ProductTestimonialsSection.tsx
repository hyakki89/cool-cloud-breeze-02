import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const ProductTestimonialsSection = () => {
  const testimonials = [
    {
      name: "Julie",
      location: "Paris",
      rating: 5,
      comment: "Je ne touche plus mon écran, c'est tellement pratique !",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b302?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Kevin", 
      location: "Lyon",
      rating: 5,
      comment: "Idéal pour mes selfies et mes vidéos Insta 🔥",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sarah",
      location: "Marseille", 
      rating: 5,
      comment: "La batterie tient super bien, top produit 👌",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Thomas",
      location: "Toulouse",
      rating: 5,
      comment: "Révolutionnaire pour TikTok, je recommande à 100% !",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Nuages décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-50 h-25 bg-pastel-pink/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-70 h-35 bg-sky-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ils l'ont adoptée <span className="gradient-text">⭐⭐⭐⭐⭐</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez pourquoi nos utilisateurs adorent leur Zen Ring
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-cloud border-0 hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistiques globales */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="card-cloud rounded-2xl p-6">
              <div className="text-4xl font-bold gradient-text mb-2">4.9/5</div>
              <div className="text-gray-600">Note moyenne</div>
            </div>
            <div className="card-cloud rounded-2xl p-6">
              <div className="text-4xl font-bold gradient-text mb-2">2,500+</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div className="card-cloud rounded-2xl p-6">
              <div className="text-4xl font-bold gradient-text mb-2">96%</div>
              <div className="text-gray-600">Recommandent</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTestimonialsSection;