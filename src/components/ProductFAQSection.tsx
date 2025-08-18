import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductFAQSection = () => {
  const faqs = [
    {
      question: "Comment connecter la bague ?",
      answer: "La connexion est ultra-simple ! Il suffit d'activer le Bluetooth sur votre smartphone et d'appuyer 3 secondes sur la bague. La connexion se fait automatiquement en moins de 3 secondes."
    },
    {
      question: "Est-ce compatible iPhone et Android ?",
      answer: "Oui, la Zen Ring est entièrement compatible avec iOS (iPhone) et Android. Pour iOS, quelques réglages simples sont nécessaires dans les paramètres d'accessibilité, un guide complet est fourni."
    },
    {
      question: "Quelle est l'autonomie ?",
      answer: "L'autonomie de la Zen Ring est exceptionnelle : jusqu'à 72h d'utilisation continue ! Le boîtier de recharge inclus permet de recharger la bague 5 fois supplémentaires."
    },
    {
      question: "Et si je ne suis pas satisfait ?",
      answer: "Nous offrons une garantie satisfait ou remboursé de 14 jours. Si la Zen Ring ne vous convient pas, retournez-la nous dans son état d'origine pour un remboursement complet."
    },
    {
      question: "La bague est-elle résistante à l'eau ?",
      answer: "Oui, la Zen Ring dispose d'une certification IPX4, elle résiste aux éclaboussures et à la sueur. Vous pouvez la porter sous la pluie ou pendant le sport sans problème."
    },
    {
      question: "Quelle taille de bague choisir ?",
      answer: "La Zen Ring est disponible en tailles standards (S, M, L, XL). Un guide des tailles est inclus dans le colis. En cas de doute, commandez la taille moyenne (M) qui convient à la plupart des utilisateurs."
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Nuages décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-20 bg-mint-fresh/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-30 bg-lavender/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Toutes les réponses à vos questions sur la Zen Ring
          </p>
        </div>

        <div className="card-cloud rounded-3xl p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-0">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-sky-blue transition-colors py-6 px-6 bg-white/50 rounded-2xl hover:bg-white/70">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-4 px-6 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact support */}
        <div className="text-center mt-12">
          <div className="card-cloud rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Une autre question ?
            </h3>
            <p className="text-gray-600 mb-6">
              Notre équipe support est là pour vous aider du lundi au vendredi de 9h à 18h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@zenring.fr" 
                className="bg-gradient-to-r from-sky-blue to-pastel-pink text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
              >
                📧 support@zenring.fr
              </a>
              <a 
                href="tel:+33123456789" 
                className="bg-white/60 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-white/80 transition-colors border border-white/30"
              >
                📞 01 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFAQSection;