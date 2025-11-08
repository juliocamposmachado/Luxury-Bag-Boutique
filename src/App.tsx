import { Menu, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Brands from './components/Brands';
import Brecho from './components/Brecho';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-gray-900" strokeWidth={1.5} />
              <span className="text-2xl font-light tracking-wider text-gray-900">LUXE</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-sm tracking-wide text-gray-700 hover:text-gray-900 transition-colors duration-200">HOME</button>
              <button onClick={() => scrollToSection('sobre')} className="text-sm tracking-wide text-gray-700 hover:text-gray-900 transition-colors duration-200">BOLSAS</button>
              <button onClick={() => scrollToSection('brecho')} className="text-sm tracking-wide text-gray-700 hover:text-gray-900 transition-colors duration-200">BRECHÓ</button>
              <button onClick={() => scrollToSection('marcas')} className="text-sm tracking-wide text-gray-700 hover:text-gray-900 transition-colors duration-200">MARCAS</button>
              <button onClick={() => scrollToSection('contato')} className="text-sm tracking-wide text-gray-700 hover:text-gray-900 transition-colors duration-200">CONTATO</button>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              <Menu className="h-6 w-6 text-gray-900" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-sm tracking-wide text-gray-700 hover:text-gray-900 py-2">HOME</button>
              <button onClick={() => scrollToSection('sobre')} className="block w-full text-left text-sm tracking-wide text-gray-700 hover:text-gray-900 py-2">BOLSAS</button>
              <button onClick={() => scrollToSection('brecho')} className="block w-full text-left text-sm tracking-wide text-gray-700 hover:text-gray-900 py-2">BRECHÓ</button>
              <button onClick={() => scrollToSection('marcas')} className="block w-full text-left text-sm tracking-wide text-gray-700 hover:text-gray-900 py-2">MARCAS</button>
              <button onClick={() => scrollToSection('contato')} className="block w-full text-left text-sm tracking-wide text-gray-700 hover:text-gray-900 py-2">CONTATO</button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        <Hero />
        <About />
        <Brecho />
        <Brands />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
