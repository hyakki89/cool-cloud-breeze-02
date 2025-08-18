import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Truck, CheckCircle } from "lucide-react";
import { useState } from "react";

const ProductOrderSection = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { value: "black", name: "Noir", color: "bg-gray-900" },
    { value: "white", name: "Blanc", color: "bg-white border-2 border-gray-200" },
    { value: "rose", name: "Rose", color: "bg-pink-400" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-lavender/10 via-sky-blue/5 to-pastel-pink/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Commandez votre Zen Ring</span>
          </h2>
          <p className="text-xl text-gray-600">
            Offre limitée : -50% aujourd'hui seulement !
          </p>
        </div>

        <Card className="card-cloud border-0 p-8">
          <CardContent className="space-y-8 p-0">
            {/* Prix */}
            <div className="text-center bg-gradient-to-r from-sky-blue/10 to-pastel-pink/10 rounded-2xl p-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl text-gray-400 line-through">49,99 €</span>
                <span className="text-5xl font-bold gradient-text">24,99 €</span>
                <Badge variant="destructive" className="text-xl py-2 px-4">
                  -50%
                </Badge>
              </div>
              <p className="text-green-600 font-semibold text-xl">
                Économisez 25,00 € aujourd'hui !
              </p>
            </div>

            {/* Choix de couleur */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Choisissez votre couleur :</h3>
              <div className="flex gap-4 justify-center">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color.value)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all ${
                      selectedColor === color.value 
                        ? 'bg-white/80 backdrop-blur-sm border-2 border-sky-blue shadow-lg' 
                        : 'hover:bg-white/50'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-full ${color.color} shadow-lg`}></div>
                    <span className="font-medium text-gray-700">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantité */}
            <div className="flex items-center justify-center gap-4">
              <span className="text-lg font-medium text-gray-700">Quantité :</span>
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full"
                >
                  -
                </Button>
                <span className="w-12 text-center text-xl font-semibold">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setQuantity(Math.min(5, quantity + 1))}
                  className="w-10 h-10 rounded-full"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Total */}
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">
                Total : {(24.99 * quantity).toFixed(2)} €
              </div>
              <p className="text-gray-600">Livraison gratuite incluse</p>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="btn-cloud text-white text-2xl py-8 px-12 rounded-2xl w-full"
              >
                🛒 Je commande ma Zen Ring maintenant
              </Button>
              
              {/* Réassurance */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-green-500" />
                  <span>🔒 Paiement sécurisé</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-green-500" />
                  <span>🚚 Livraison offerte</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>✅ Garantie 14 jours</span>
                </div>
              </div>
            </div>

            {/* Méthodes de paiement */}
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">Nous acceptons :</p>
              <div className="flex justify-center gap-4">
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <span className="text-blue-600 font-bold text-sm">VISA</span>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <span className="text-red-600 font-bold text-sm">MC</span>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <span className="text-blue-500 font-bold text-sm">PayPal</span>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <span className="text-gray-800 font-bold text-sm">Apple Pay</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductOrderSection;