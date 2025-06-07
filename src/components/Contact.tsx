
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail, Phone, MapPin, Shield, Clock, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Enviando dados para webhook:", formData);

    try {
      const response = await fetch('https://webhook.ls.app.br/webhook/e75dee91-1b44-4cb1-8377-1d0a513be591', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "website_wino_ai",
        }),
      });

      toast({
        title: "Mensagem Enviada!",
        description: "Recebemos sua mensagem e entraremos em contato em breve. Obrigado pelo interesse!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });

    } catch (error) {
      console.error("Erro ao enviar webhook:", error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente ou entre em contato conosco diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(30)].map((_, i) => (
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
            Entre em <span className="text-gradient animate-neon-pulse">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para <span className="text-cyan-400 font-semibold">transformar seu negócio</span>? 
            Fale conosco e descubra como podemos ajudar você a alcançar seus objetivos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-in">
            <div className="glass-morphism border border-cyan-500/20 rounded-xl p-6 card-3d hover:neon-glow transition-all duration-300">
              <div className="hologram-effect absolute inset-0 rounded-xl opacity-20"></div>
              <div className="relative z-10">
                <h3 className="flex items-center gap-2 text-xl font-bold mb-6 text-gradient">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Telefone</p>
                      <p className="text-gray-400">Entre em contato via formulário</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-gray-400">contato@wino.ai</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Atendimento</p>
                      <p className="text-gray-400">Online - Todo Brasil</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-morphism border border-cyan-500/20 rounded-xl p-6 card-3d hover:neon-glow transition-all duration-300">
              <div className="hologram-effect absolute inset-0 rounded-xl opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-gradient">Por que escolher a Wino.ai?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-300">Mais de 4 anos de experiência no mercado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-300">+100 clientes satisfeitos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-300">Soluções personalizadas para cada negócio</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg">
                      <Send className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-300">Suporte técnico especializado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-300">Tecnologia de ponta em IA e automação</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-morphism border border-cyan-500/20 rounded-xl p-6 card-3d hover:neon-glow transition-all duration-300 animate-slide-in">
            <div className="hologram-effect absolute inset-0 rounded-xl opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6 text-gradient">Solicite seu Orçamento</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                      className="bg-slate-800/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      className="bg-slate-800/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      className="bg-slate-800/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-white">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nome da sua empresa"
                      className="bg-slate-800/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                    rows={4}
                    required
                    className="bg-slate-800/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-500"
                  />
                </div>

                <button 
                  type="submit" 
                  className="cyber-button px-8 py-4 text-lg font-bold text-white w-full group"
                  disabled={isLoading}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isLoading ? "Enviando..." : "Enviar Mensagem"}
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
