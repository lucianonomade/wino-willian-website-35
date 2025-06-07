
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/a6924c1d-e64d-4bd4-9c26-af0e7e5cf7de.png" 
              alt="Wino.ai Logo" 
              className="h-6 w-auto"
            />
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
