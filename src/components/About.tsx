
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Target, Shield, Rocket } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-cyan-400" />,
      title: "Inovação",
      description: "Sempre na vanguarda das tecnologias mais avançadas em IA e automação."
    },
    {
      icon: <Target className="h-8 w-8 text-cyan-400" />,
      title: "Precisão",
      description: "Soluções sob medida que atendem exatamente às suas necessidades específicas."
    },
    {
      icon: <Shield className="h-8 w-8 text-cyan-400" />,
      title: "Confiabilidade",
      description: "Mais de 4 anos de experiência com resultados comprovados no mercado."
    },
    {
      icon: <Rocket className="h-8 w-8 text-cyan-400" />,
      title: "Performance",
      description: "Automações que aceleram processos e maximizam a eficiência operacional."
    }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
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
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">
            Sobre a <span className="text-gradient animate-neon-pulse">Wino.ai</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos especialistas em transformação digital, oferecendo soluções inovadoras 
            em <span className="text-cyan-400 font-semibold">inteligência artificial</span>, 
            <span className="text-cyan-400 font-semibold"> automação comercial</span> e 
            <span className="text-cyan-400 font-semibold"> desenvolvimento de CRM</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in">
            <h3 className="text-2xl font-bold text-white">Nossa História</h3>
            <p className="text-gray-300 leading-relaxed">
              Com mais de <span className="text-cyan-400 font-semibold">4 anos de atuação no mercado</span>, 
              a Wino.ai se consolidou como referência em soluções de automação comercial e inteligência artificial. 
              Nossa equipe especializada já entregou projetos para mais de 
              <span className="text-cyan-400 font-semibold"> 100 clientes</span>, sempre focando na inovação e 
              resultados excepcionais.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nosso avatar <span className="text-cyan-400 font-semibold">Willian</span> representa nossa personalidade: 
              amigável, confiável e sempre pronto para ajudar nossos clientes a alcançarem seus objetivos através da tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 perspective-container">
            {values.map((value, index) => (
              <div key={index} className="glass-morphism border border-cyan-500/20 rounded-xl p-6 text-center space-y-4 card-3d group hover:neon-glow transition-all duration-300">
                <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h4 className="font-semibold text-white">{value.title}</h4>
                <p className="text-sm text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-morphism border border-cyan-500/20 rounded-2xl p-8 text-center card-3d hover:neon-glow transition-all duration-300">
          <div className="hologram-effect absolute inset-0 rounded-2xl opacity-30"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Nossa Missão</h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Democratizar o acesso às tecnologias de <span className="text-cyan-400 font-semibold">inteligência artificial</span> e 
              <span className="text-cyan-400 font-semibold"> automação</span>, 
              capacitando empresas de todos os tamanhos a otimizarem seus processos, 
              aumentarem sua produtividade e alcançarem resultados extraordinários.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
