
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Target, Shield, Rocket } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Inovação",
      description: "Sempre na vanguarda das tecnologias mais avançadas em IA e automação."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Precisão",
      description: "Soluções sob medida que atendem exatamente às suas necessidades específicas."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Confiabilidade",
      description: "Mais de 4 anos de experiência com resultados comprovados no mercado."
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Performance",
      description: "Automações que aceleram processos e maximizam a eficiência operacional."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Sobre a <span className="text-gradient">Wino.ai</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos especialistas em transformação digital, oferecendo soluções inovadoras 
            em inteligência artificial, automação comercial e desenvolvimento de CRM.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Nossa História</h3>
            <p className="text-muted-foreground leading-relaxed">
              Com mais de 4 anos de atuação no mercado, a Wino.ai se consolidou como referência 
              em soluções de automação comercial e inteligência artificial. Nossa equipe especializada 
              já entregou projetos para mais de 100 clientes, sempre focando na inovação e 
              resultados excepcionais.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nosso avatar Willian representa nossa personalidade: amigável, confiável e sempre 
              pronto para ajudar nossos clientes a alcançarem seus objetivos através da tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">{value.icon}</div>
                  <h4 className="font-semibold">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-card border rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Democratizar o acesso às tecnologias de inteligência artificial e automação, 
            capacitando empresas de todos os tamanhos a otimizarem seus processos, 
            aumentarem sua produtividade e alcançarem resultados extraordinários.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
