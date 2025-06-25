
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Truck, Shield, RotateCcw } from "lucide-react";

interface ProductInfoProps {
  selectedColor: string;
  quantity: number;
  onColorSelect: (color: string) => void;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
}

const ProductInfo = ({ selectedColor, quantity, onColorSelect, onQuantityChange, onAddToCart }: ProductInfoProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Ventilateur de Cou Portable</h1>
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="text-gray-600">(4.9/5 - 127 avis)</span>
        </div>
      </div>

      <Card className="bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4 mb-2">
            <span className="text-2xl text-gray-400 line-through">29,00 €</span>
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">19,00 €</span>
          </div>
          <p className="text-green-600 font-semibold mb-2">Économisez 10,00 € (34%)</p>
          <div className="flex items-center text-gray-600">
            <Truck className="w-4 h-4 mr-2" />
            Livraison gratuite
          </div>
        </CardContent>
      </Card>

      <p className="text-lg text-gray-700">
        Le ventilateur de cou portable qui révolutionne ton été ! Mains libres, silencieux et ultra-stylé. 
        Profite de la fraîcheur sans transpirer où que tu sois.
      </p>

      {/* Options */}
      <div className="space-y-4">
        <div>
          <label className="block font-semibold mb-2">Couleur :</label>
          <div className="flex space-x-3">
            {[
              { value: 'white', color: 'bg-white border-gray-300' },
              { value: 'black', color: 'bg-gray-900' },
              { value: 'blue', color: 'bg-blue-400' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => onColorSelect(option.value)}
                className={`w-12 h-12 rounded-full border-4 transition-all ${option.color} ${
                  selectedColor === option.value ? 'border-blue-400 scale-110' : 'border-transparent'
                }`}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Quantité :</label>
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            >
              -
            </Button>
            <span className="w-12 text-center font-semibold">{quantity}</span>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onQuantityChange(Math.min(10, quantity + 1))}
            >
              +
            </Button>
          </div>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="space-y-3">
        <Button 
          onClick={onAddToCart}
          className="w-full bg-gradient-to-r from-blue-400 to-pink-400 hover:from-pink-400 hover:to-blue-400 text-white font-semibold py-3 rounded-2xl text-lg"
        >
          Ajouter au panier - {(19 * quantity).toFixed(2)} €
        </Button>
        <Button variant="outline" className="w-full py-3 rounded-2xl text-lg">
          Acheter maintenant
        </Button>
      </div>

      {/* Features */}
      <Card className="bg-white/60 backdrop-blur-sm">
        <CardContent className="p-4 space-y-3">
          {[
            { icon: Shield, text: "Garantie 30 jours satisfait ou remboursé" },
            { icon: Shield, text: "Paiement 100% sécurisé" },
            { icon: Truck, text: "Livraison gratuite en France" },
            { icon: RotateCcw, text: "Stock limité - Commandez vite !" }
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <feature.icon className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-700">{feature.text}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductInfo;
