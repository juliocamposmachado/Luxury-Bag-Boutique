import { ShoppingBag } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8" strokeWidth={1.5} />
            <span className="text-2xl font-light tracking-wider">LUXE</span>
          </div>

          <p className="text-sm text-gray-400 text-center max-w-2xl">
            Bolsas de luxo autênticas das marcas mais prestigiadas do mundo
          </p>

          <div className="text-xs text-gray-500 text-center">
            <p>Anália Franco • São Paulo, SP</p>
          </div>

          <div className="w-full border-t border-gray-800 pt-6 mt-6">
            <p className="text-xs text-gray-500 text-center">
              © 2025 Luxe. Todos os direitos reservados. Comércio de bolsas de luxo com certificado de autenticidade.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
