
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
                Le ventilateur de cou portable FreshBreeze est la solution parfaite pour rester au frais pendant vos activités. 
                Grâce à sa conception ergonomique et ses fonctionnalités avancées, il s'adapte à tous vos besoins.
              </p>
              <h4 className="text-lg font-semibold mb-3">Avantages clés :</h4>
              <ul className="space-y-2 text-gray-700">
                <li>🔇 Ultra silencieux - Moins de 30dB</li>
                <li>🔋 Autonomie exceptionnelle - Jusqu'à 10 heures</li>
                <li>🎧 Design mains libres pour une liberté totale</li>
                <li>⚡ 3 vitesses réglables selon vos besoins</li>
                <li>🎯 Conception ergonomique universelle</li>
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
                  { label: "Dimensions", value: "18 x 16 x 4 cm" },
                  { label: "Poids", value: "280g" },
                  { label: "Batterie", value: "4000mAh Li-ion" },
                  { label: "Autonomie", value: "4-10 heures selon vitesse" },
                  { label: "Temps de charge", value: "3 heures" },
                  { label: "Vitesses", value: "3 niveaux réglables" },
                  { label: "Niveau sonore", value: "< 30dB" },
                  { label: "Matériaux", value: "ABS + Silicone" }
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
                  { name: "Emma L.", date: "Il y a 2 jours", text: "Parfait pour mes trajets en métro l'été ! Discret et vraiment efficace 😍" },
                  { name: "Lucas M.", date: "Il y a 5 jours", text: "Je l'utilise pour mes sessions de running, c'est révolutionnaire ! Fini les pauses forcées." },
                  { name: "Sarah K.", date: "Il y a 1 semaine", text: "Stylé et pratique ! Mes collègues me demandent tous où je l'ai acheté 💨" }
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
