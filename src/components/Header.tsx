
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full glass-morphism border-b border-cyan-500/20 z-50 backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <svg width="120" height="36" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
              <defs>
                <style>
                  {`.logo-text { font-family: Arial, sans-serif; font-weight: 900; }
                   .subtitle-text { font-family: Arial, sans-serif; font-weight: 400; }`}
                </style>
              </defs>
              <text x="200" y="60" textAnchor="middle" className="logo-text" fontSize="48" fill="white">
                <tspan fill="white">W</tspan><tspan fill="#00D4FF">I</tspan><tspan fill="white">NO</tspan>
              </text>
              <text x="200" y="85" textAnchor="middle" className="subtitle-text" fontSize="12" fill="#94A3B8" letterSpacing="2px">
                AI SOLUTIONS
              </text>
            </svg>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Início', 'Sobre', 'Serviços', 'Contato'].map((item, index) => {
              const sectionIds = ['home', 'about', 'services', 'contact'];
              return (
                <button 
                  key={item}
                  onClick={() => scrollToSection(sectionIds[index])}
                  className="relative text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              );
            })}
          </nav>

          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block cyber-button px-6 py-2 text-sm font-bold text-white"
          >
            Fale Conosco
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-cyan-500/20">
            <nav className="flex flex-col space-y-4">
              {['Início', 'Sobre', 'Serviços', 'Contato'].map((item, index) => {
                const sectionIds = ['home', 'about', 'services', 'contact'];
                return (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(sectionIds[index])}
                    className="text-left text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
                  >
                    {item}
                  </button>
                );
              })}
              <button 
                onClick={() => scrollToSection('contact')}
                className="cyber-button px-6 py-2 text-sm font-bold text-white w-full mt-4"
              >
                Fale Conosco
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
