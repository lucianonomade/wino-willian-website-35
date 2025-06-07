
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, BarChart3, Cog, MessageSquare, Database, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Bot className="h-12 w-12 text-primary" />,
      title: "Desenvolvimento de IA",
      description: "Criamos soluções personalizadas de inteligência artificial para automatizar processos complexos e melhorar a tomada de decisões."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "CRM Inteligente",
      description: "Sistemas de CRM com IA integrada para gestão avançada de relacionamento com clientes e análise preditiva de vendas."
    },
    {
      icon: <Cog className="h-12 w-12 text-primary" />,
      title: "Automação Comercial",
      description: "Automatizamos processos comerciais, desde prospecção até fechamento, aumentando a eficiência e reduzindo custos."
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-primary" />,
      title: "Chatbots Inteligentes",
      description: "Assistentes virtuais avançados para atendimento ao cliente 24/7, com processamento de linguagem natural."
    },
    {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: "Análise de Dados",
      description: "Transformamos seus dados em insights valiosos através de análises avançadas e dashboards interativos."
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Integração de Sistemas",
      description: "Conectamos seus sistemas existentes criando um ecossistema tecnológico unificado e eficiente."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia para transformar seu negócio 
            e impulsionar seus resultados através da inovação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-wino-blue/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Precisa de uma solução personalizada?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Nossa equipe está pronta para desenvolver a solução perfeita para suas necessidades específicas.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
