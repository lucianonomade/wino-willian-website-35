
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <svg width="80" height="24" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <style>
                  {`.logo-text { font-family: Arial, sans-serif; font-weight: 900; }
                   .subtitle-text { font-family: Arial, sans-serif; font-weight: 400; }`}
                </style>
              </defs>
              <text x="200" y="60" textAnchor="middle" className="logo-text" fontSize="48" fill="hsl(var(--foreground))">
                <tspan fill="hsl(var(--foreground))">W</tspan><tspan fill="#00D4FF">I</tspan><tspan fill="hsl(var(--foreground))">NO</tspan>
              </text>
              <text x="200" y="85" textAnchor="middle" className="subtitle-text" fontSize="12" fill="hsl(var(--muted-foreground))" letterSpacing="2px">
                AI SOLUTIONS
              </text>
            </svg>
            <span className="text-sm text-muted-foreground">
              © 2024 Wino.ai. Todos os direitos reservados.
            </span>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>para transformar negócios</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Wino.ai - Especialistas em Automação Comercial, CRM e Inteligência Artificial
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
