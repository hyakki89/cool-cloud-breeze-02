const ProductFooterSection = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo et slogan */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-sky-blue to-pastel-pink bg-clip-text text-transparent">
              Zen Ring™
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Offrez-vous le futur du contrôle smartphone.
            </p>
            <p className="text-gray-400 leading-relaxed max-w-md">
              La bague connectée qui révolutionne votre façon d'interagir avec vos réseaux sociaux et applications préférées.
            </p>
          </div>

          {/* Liens légaux */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Informations légales</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  📄 Politique de retour
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  📋 Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  🔒 Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  📞 Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Support client</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="mailto:support@zenring.fr" className="hover:text-white transition-colors flex items-center gap-2">
                  📧 support@zenring.fr
                </a>
              </li>
              <li>
                <a href="tel:+33123456789" className="hover:text-white transition-colors flex items-center gap-2">
                  📞 01 23 45 67 89
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2">
                  🕒 Lun-Ven 9h-18h
                </span>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  💬 Chat en direct
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Méthodes de paiement */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="text-center">
            <p className="text-gray-400 mb-6">Paiements acceptés :</p>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
                <span className="text-blue-600 font-bold text-lg">VISA</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
                <span className="text-red-600 font-bold text-lg">Mastercard</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
                <span className="text-blue-500 font-bold text-lg">PayPal</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
                <span className="text-gray-800 font-bold text-lg">Apple Pay</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
                <span className="text-green-600 font-bold text-lg">Google Pay</span>
              </div>
            </div>
          </div>
        </div>

        {/* Garanties et certifications */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-3">🔒</div>
              <h5 className="font-semibold mb-2">Paiement 100% sécurisé</h5>
              <p className="text-gray-400 text-sm">Cryptage SSL et protection bancaire</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-3">🚚</div>
              <h5 className="font-semibold mb-2">Livraison gratuite</h5>
              <p className="text-gray-400 text-sm">Expédition sous 24h en France</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-3">✅</div>
              <h5 className="font-semibold mb-2">Garantie 14 jours</h5>
              <p className="text-gray-400 text-sm">Satisfait ou remboursé</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            &copy; 2024 Zen Ring™. Tous droits réservés.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Zen Ring™ est une marque déposée. Tous les noms de produits et marques mentionnés sont des marques commerciales de leurs propriétaires respectifs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ProductFooterSection;