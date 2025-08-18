
import ProductHeroSection from "../components/ProductHeroSection";
import ProductBenefitsSection from "../components/ProductBenefitsSection";
import ProductLifestyleSection from "../components/ProductLifestyleSection";
import ProductTestimonialsSection from "../components/ProductTestimonialsSection";
import ProductOrderSection from "../components/ProductOrderSection";
import ProductFAQSection from "../components/ProductFAQSection";
import ProductFooterSection from "../components/ProductFooterSection";

const Product = () => {
  return (
    <div className="min-h-screen">
      <ProductHeroSection />
      <ProductBenefitsSection />
      <ProductLifestyleSection />
      <ProductTestimonialsSection />
      <ProductOrderSection />
      <ProductFAQSection />
      <ProductFooterSection />
    </div>
  );
};

export default Product;
