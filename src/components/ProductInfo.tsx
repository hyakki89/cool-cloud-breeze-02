
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Truck, Shield, RotateCcw, Timer, Zap, Users } from "lucide-react";

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
      {/* Badges commerciaux */}
      <div className="flex gap-2 mb-4">
        <Badge className="bg-green-500 text-white font-semibold px-3 py-1">
          ✨ Nouveau
        </Badge>
        <Badge className="bg-red-500 text-white font-semibold px-3 py-1 animate-pulse">
          🔥 -34%
        </Badge>
        <Badge className="bg-orange-500 text-white font-semibold px-3 py-1">
          ⚡ Stock limité
        </Badge>
      </div>

      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Zen Ring - Bague Connectée Bluetooth
        </h1>
        <div className="flex items-center space-x-3 mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="text-gray-600 font-medium">(4.9/5 - 127 avis)</span>
          <div className="flex items-center text-green-600 text-sm font-semibold">
            <Users className="w-4 h-4 mr-1" />
            +2,000 clients satisfaits
          </div>
        </div>
      </div>

      <Card className="bg-gradient-to-br from-white via-blue-50 to-purple-50 backdrop-blur-sm border-2 border-blue-200 shadow-xl">
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <span className="text-2xl text-gray-400 line-through">29,00 €</span>
              <span className="text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">19,00 €</span>
            </div>
            <div className="bg-green-100 rounded-full px-4 py-2 mb-3">
              <p className="text-green-700 font-bold text-lg">💰 Économisez 10,00 € (34%)</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center text-blue-600 font-semibold">
              <Truck className="w-4 h-4 mr-2" />
              Livraison gratuite
            </div>
            <div className="flex items-center text-purple-600 font-semibold">
              <Timer className="w-4 h-4 mr-2" />
              Expédition 24h
            </div>
            <div className="flex items-center text-green-600 font-semibold">
              <Shield className="w-4 h-4 mr-2" />
              Garantie 30j
            </div>
            <div className="flex items-center text-orange-600 font-semibold">
              <Zap className="w-4 h-4 mr-2" />
              Paiement sécurisé
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
        <p className="text-lg text-gray-800 font-medium leading-relaxed">
          🚀 <strong>La bague connectée qui révolutionne ton quotidien !</strong> Contrôle tes réseaux sociaux, ta musique et tes photos d'un simple geste. 
          Design minimaliste et discret pour une technologie innovante à portée de main.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">📱 Compatible iOS/Android</span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">🎵 Contrôle musical</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">📸 Selfies à distance</span>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-4">
        <div>
          <label className="block font-semibold mb-2">Couleur :</label>
          <div className="flex space-x-3">
            {[
              { value: 'white', color: 'bg-white border-gray-300' },
              { value: 'black', color: 'bg-gray-900' },
              { value: 'rose', color: 'bg-pink-400' },
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

      {/* Buy Now */}
      <div className="space-y-4">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
          <div className="flex items-center justify-center text-red-600 font-bold mb-2">
            <Timer className="w-5 h-5 mr-2" />
            ⏰ Offre limitée dans le temps !
          </div>
          <p className="text-red-700 text-sm">Plus que 12 unités en stock - Commandez maintenant !</p>
        </div>
        
        <Button className="w-full bg-gradient-to-r from-blue-400 to-pink-400 hover:from-pink-400 hover:to-blue-400 text-white font-bold py-4 rounded-2xl text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
          <span className="relative z-10 flex items-center justify-center">
            ⚡ Acheter maintenant - 19,00 € ⚡
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </Button>
        
        <p className="text-center text-sm text-gray-600">
          ✅ Paiement sécurisé • 📦 Livraison rapide • 🔄 Retour gratuit 30j
        </p>
      </div>

      {/* Features */}
      <Card className="bg-gradient-to-br from-green-50 to-blue-50 backdrop-blur-sm border-2 border-green-200">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-bold text-gray-800 text-center mb-4">🛡️ VOS GARANTIES PREMIUM</h3>
          {[
            { icon: Shield, text: "Garantie 30 jours satisfait ou remboursé", color: "text-green-600" },
            { icon: Shield, text: "Paiement 100% sécurisé SSL", color: "text-blue-600" },
            { icon: Truck, text: "Livraison gratuite en France métropolitaine", color: "text-purple-600" },
            { icon: RotateCcw, text: "Stock limité - Plus que 12 unités !", color: "text-red-600" }
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 bg-white/70 rounded-lg p-3 border border-gray-200">
              <feature.icon className={`w-6 h-6 ${feature.color}`} />
              <span className="text-sm font-semibold text-gray-800">{feature.text}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductInfo;
