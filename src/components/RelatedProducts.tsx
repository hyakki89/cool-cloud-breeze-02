
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const RelatedProducts = () => {
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

  return (
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
  );
};

export default RelatedProducts;
