
import { Heart, Code, Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="glass-morphism border border-cyan-500/20 rounded-2xl p-8">
          <div className="hologram-effect absolute inset-0 rounded-2xl opacity-20"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="flex items-center space-x-4">
                <svg width="140" height="42" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
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
                <div className="text-left">
                  <span className="text-sm text-gray-400">
                    © 2024 Wino.ai. Todos os direitos reservados.
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <span>Feito com</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>e</span>
                <Code className="h-4 w-4 text-cyan-400" />
                <span>para transformar negócios</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-cyan-500/20 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Cpu className="h-5 w-5 text-cyan-400" />
                <p className="text-sm text-gray-300 font-medium">
                  Wino.ai - Especialistas em Automação Comercial, CRM e Inteligência Artificial
                </p>
                <Cpu className="h-5 w-5 text-cyan-400" />
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">
                <span>Tecnologia de Ponta</span>
                <span>•</span>
                <span>Soluções Personalizadas</span>
                <span>•</span>
                <span>Suporte 24/7</span>
                <span>•</span>
                <span>Resultados Comprovados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
