
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Truck, RotateCcw } from "lucide-react";

const ProductTabs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Caractéristiques</TabsTrigger>
          <TabsTrigger value="reviews">Avis (127)</TabsTrigger>
          <TabsTrigger value="shipping">Livraison</TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="mt-6">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">Description du produit</h3>
              <p className="text-gray-700 mb-6">
                La Zen Ring est une bague connectée Bluetooth révolutionnaire qui transforme votre façon d'interagir avec vos appareils. 
                Grâce à ses gestes tactiles intuitifs et son design minimaliste, elle devient l'accessoire indispensable de votre quotidien numérique.
              </p>
              <h4 className="text-lg font-semibold mb-3">Fonctionnalités clés :</h4>
              <ul className="space-y-2 text-gray-700">
                <li>📱 Contrôle des réseaux sociaux (TikTok, Instagram, YouTube)</li>
                <li>🎶 Gestion de la musique et du volume</li>
                <li>📸 Déclencheur photo/vidéo à distance</li>
                <li>🔋 Autonomie 72h + boîtier de recharge inclus</li>
                <li>📖 Navigation intuitive pour lire des e-books</li>
                <li>🎯 Compatible iOS et Android</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="specifications" className="mt-6">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">Caractéristiques techniques</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Dimensions", value: "Taille unique ajustable" },
                  { label: "Poids", value: "8g ultra-léger" },
                  { label: "Batterie", value: "Lithium-ion rechargeable" },
                  { label: "Autonomie", value: "72 heures d'utilisation" },
                  { label: "Temps de charge", value: "2 heures (boîtier inclus)" },
                  { label: "Connectivité", value: "Bluetooth 5.0" },
                  { label: "Compatibilité", value: "iOS et Android" },
                  { label: "Matériaux", value: "Titane et silicone médical" }
                ].map((spec, index) => (
                  <div key={index} className="bg-white/60 p-3 rounded-lg">
                    <strong>{spec.label}:</strong> {spec.value}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
                <div className="flex justify-center text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">Basé sur 127 avis</p>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Emma L.", date: "Il y a 2 jours", text: "Géniale pour scroller sur TikTok sans lever le bras ! Design super discret 💍" },
                  { name: "Lucas M.", date: "Il y a 5 jours", text: "Perfect pour mes photos Instagram ! Plus besoin de minuteur, je contrôle tout avec ma bague ⚡" },
                  { name: "Sarah K.", date: "Il y a 1 semaine", text: "Révolutionnaire ! Je contrôle ma musique pendant le sport, mes collègues sont jaloux 🎶" }
                ].map((review, index) => (
                  <div key={index} className="bg-white/60 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <strong>{review.name}</strong>
                        <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipping" className="mt-6">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">Livraison et retours</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 flex items-center">
                    <Truck className="w-5 h-5 mr-2" />
                    Livraison gratuite
                  </h4>
                  <p className="text-gray-700 mb-2">Livraison gratuite en France métropolitaine pour toute commande.</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Expédition sous 24-48h</li>
                    <li>Livraison en 2-4 jours ouvrés</li>
                    <li>Suivi de commande inclus</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 flex items-center">
                    <RotateCcw className="w-5 h-5 mr-2" />
                    Retours
                  </h4>
                  <p className="text-gray-700 mb-2">Vous avez 30 jours pour retourner votre produit si vous n'êtes pas satisfait.</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Retour gratuit</li>
                    <li>Remboursement sous 5-7 jours</li>
                    <li>Produit à retourner dans son emballage d'origine</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductTabs;
