
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, BarChart3, Cog, MessageSquare, Database, Zap, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Bot className="h-12 w-12 text-cyan-400" />,
      title: "Desenvolvimento de IA",
      description: "Criamos soluções personalizadas de inteligência artificial para automatizar processos complexos e melhorar a tomada de decisões."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-cyan-400" />,
      title: "CRM Inteligente",
      description: "Sistemas de CRM com IA integrada para gestão avançada de relacionamento com clientes e análise preditiva de vendas."
    },
    {
      icon: <Cog className="h-12 w-12 text-cyan-400" />,
      title: "Automação Comercial",
      description: "Automatizamos processos comerciais, desde prospecção até fechamento, aumentando a eficiência e reduzindo custos."
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-cyan-400" />,
      title: "Chatbots Inteligentes",
      description: "Assistentes virtuais avançados para atendimento ao cliente 24/7, com processamento de linguagem natural."
    },
    {
      icon: <Database className="h-12 w-12 text-cyan-400" />,
      title: "Análise de Dados",
      description: "Transformamos seus dados em insights valiosos através de análises avançadas e dashboards interativos."
    },
    {
      icon: <Zap className="h-12 w-12 text-cyan-400" />,
      title: "Integração de Sistemas",
      description: "Conectamos seus sistemas existentes criando um ecossistema tecnológico unificado e eficiente."
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(25)].map((_, i) => (
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

      {/* Scanning Line Effect */}
      <div className="scan-line"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nossos <span className="text-gradient animate-neon-pulse">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos soluções completas em <span className="text-cyan-400 font-semibold">tecnologia</span> para transformar seu negócio 
            e impulsionar seus resultados através da <span className="text-cyan-400 font-semibold">inovação</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container">
          {services.map((service, index) => (
            <div key={index} className="glass-morphism border border-cyan-500/20 rounded-xl p-6 card-3d group hover:neon-glow transition-all duration-300 animate-slide-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="hologram-effect absolute inset-0 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-center pb-4">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300 floating-3d">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                </div>
                <p className="text-gray-300 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-morphism border border-cyan-500/20 rounded-2xl p-8 text-center card-3d hover:neon-glow transition-all duration-300">
          <div className="hologram-effect absolute inset-0 rounded-2xl opacity-30"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Precisa de uma solução personalizada?</h3>
            <p className="text-lg text-gray-300 mb-6">
              Nossa equipe está pronta para desenvolver a solução perfeita para suas 
              <span className="text-cyan-400 font-semibold"> necessidades específicas</span>.
            </p>
            <button 
              onClick={scrollToContact}
              className="cyber-button px-8 py-3 text-lg font-bold text-white group"
            >
              <span className="relative z-10 flex items-center gap-3">
                Falar com Especialista
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
