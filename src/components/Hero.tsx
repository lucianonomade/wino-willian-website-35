
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Calendar, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted/30 pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transforme seu negócio com 
                <span className="text-gradient block">Inteligência Artificial</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Soluções completas em automação comercial, CRM e desenvolvimento de IA. 
                Potencialize seus resultados com tecnologia de ponta.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 bg-card border rounded-lg px-4 py-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="font-semibold">+4 anos</span>
                <span className="text-muted-foreground">de mercado</span>
              </div>
              <div className="flex items-center gap-2 bg-card border rounded-lg px-4 py-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="font-semibold">+100 clientes</span>
                <span className="text-muted-foreground">atendidos</span>
              </div>
              <div className="flex items-center gap-2 bg-card border rounded-lg px-4 py-2">
                <Zap className="h-4 w-4 text-primary" />
                <span className="font-semibold">Soluções</span>
                <span className="text-muted-foreground">entregues</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection('contact')}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('services')}
              >
                Conheça nossos serviços
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-slide-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-wino-blue/20 blur-3xl rounded-full"></div>
              <img 
                src="/lovable-uploads/7de3673d-116b-474c-848b-6e9e4fc8499f.png" 
                alt="Willian - Avatar da Wino.ai" 
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
