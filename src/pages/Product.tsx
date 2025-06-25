
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("white");
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  const productImages = [
    "/lovable-uploads/9bda1dac-f712-40e6-9bfd-9fc5c701f044.png",
    "https://images.unsplash.com/photo-1621768216002-5ac171876625?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80"
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "Ventilateur USB Portable",
      price: 16.99,
      oldPrice: 24.99,
      image: "https://images.unsplash.com/photo-1621768216002-5ac171876625?auto=format&fit=crop&w=300&q=80",
      badge: "Nouveau"
    },
    {
      id: 2,
      name: "Ventilateur de Table",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      name: "Ventilateur Personnel",
      price: 12.99,
      oldPrice: 19.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80"
    }
  ];

  const handleAddToCart = () => {
    setCartCount(cartCount + quantity);
    alert(`${quantity} ventilateur(s) ${selectedColor} ajouté(s) au panier !`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                FreshBreeze ☁️
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a href="/" className="text-gray-700 hover:text-blue-400 transition-colors">Accueil</a>
                <a href="/product" className="text-gray-700 hover:text-blue-400 transition-colors">Produits</a>
                <a href="#" className="text-gray-700 hover:text-blue-400 transition-colors">Contact</a>
              </nav>
            </div>
            <Button className="bg-gradient-to-r from-blue-400 to-pink-400 hover:from-pink-400 hover:to-blue-400">
              <ShoppingCart className="w-4 h-4 mr-2" />
              <Badge variant="secondary" className="ml-2">{cartCount}</Badge>
            </Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">
          <a href="/" className="text-blue-400 hover:underline">Accueil</a> > 
          <a href="/product" className="text-blue-400 hover:underline ml-1">Produits</a> > 
          <span className="ml-1">Ventilateur de Cou Portable</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-2xl p-4 shadow-lg">
              <img
                src={productImages[selectedImage]}
                alt="Ventilateur de cou portable"
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute top-6 left-6 space-y-2">
                <Badge className="bg-green-500">Nouveau</Badge>
                <Badge variant="destructive">-34%</Badge>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden transition-all ${
                    selectedImage === index ? 'border-blue-400 scale-105' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`Vue ${index + 1}`} className="w-full h-20 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
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
                      onClick={() => setSelectedColor(option.value)}
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
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <Button 
                onClick={handleAddToCart}
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
        </div>
      </div>

      {/* Product Details Tabs */}
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

      {/* Related Products */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Produits similaires</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <Card key={product.id} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 bg-green-500">{product.badge}</Badge>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through">{product.oldPrice} €</span>
                    )}
                    <span className="font-bold text-blue-600">{product.price} €</span>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="text-gray-600 ml-2 text-sm">(4.8)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FreshBreeze</h3>
              <p className="text-gray-400">Reste frais, reste stylé ☁️</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Accueil</a></li>
                <li><a href="/product" className="hover:text-white transition-colors">Produits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Service client</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Livraison</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Retours</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">CGV</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FreshBreeze. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Product;
