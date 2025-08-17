
import { useState } from "react";
import ProductHeader from "../components/ProductHeader";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";
import ProductTabs from "../components/ProductTabs";
import RelatedProducts from "../components/RelatedProducts";
import ProductFooter from "../components/ProductFooter";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("white");
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  const productImages = [
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=400&q=80"
  ];

  const handleAddToCart = () => {
    setCartCount(cartCount + quantity);
    alert(`${quantity} Zen Ring ${selectedColor} ajoutée(s) au panier !`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <ProductHeader cartCount={cartCount} />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">
          <a href="/" className="text-blue-400 hover:underline">Accueil</a> &gt; 
          <a href="/product" className="text-blue-400 hover:underline ml-1">Produits</a> &gt; 
          <span className="ml-1">Zen Ring - Bague Connectée</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <ProductImage
            productImages={productImages}
            selectedImage={selectedImage}
            onImageSelect={setSelectedImage}
          />
          <ProductInfo
            selectedColor={selectedColor}
            quantity={quantity}
            onColorSelect={setSelectedColor}
            onQuantityChange={setQuantity}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>

      <ProductTabs />
      <RelatedProducts />
      <ProductFooter />
    </div>
  );
};

export default Product;
