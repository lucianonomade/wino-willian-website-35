import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Calendar, Zap, Star, Code, Cpu } from 'lucide-react';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(30)].map((_, i) => <div key={i} className="particle" style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${15 + Math.random() * 10}s`
      }}></div>)}
      </div>

      {/* Scanning Line Effect */}
      <div className="scan-line"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in perspective-container">
            {/* AI Badge */}
            

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block text-white">Transforme seu</span>
                <span className="block text-gradient animate-neon-pulse">negócio com</span>
                <span className="block text-white">Inteligência</span>
                <span className="block text-gradient animate-neon-pulse">Artificial</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Soluções completas em <span className="text-cyan-400 font-semibold">automação comercial</span>, 
                <span className="text-cyan-400 font-semibold"> CRM</span> e desenvolvimento de 
                <span className="text-cyan-400 font-semibold"> IA</span>. 
                Potencialize seus resultados com tecnologia de ponta.
              </p>
            </div>

            {/* Stats Cards with 3D Effect */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-3 glass-morphism border border-cyan-500/20 rounded-xl px-6 py-4 card-3d group hover:neon-glow transition-all duration-300">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-cyan-400 text-lg">+4 anos</span>
                  <p className="text-gray-400 text-xs">de mercado</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 glass-morphism border border-cyan-500/20 rounded-xl px-6 py-4 card-3d group hover:neon-glow transition-all duration-300">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-cyan-400 text-lg">+100 clientes</span>
                  <p className="text-gray-400 text-xs">atendidos</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 glass-morphism border border-cyan-500/20 rounded-xl px-6 py-4 card-3d group hover:neon-glow transition-all duration-300">
                <div className="p-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-cyan-400 text-lg">Soluções</span>
                  <p className="text-gray-400 text-xs">entregues</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="cyber-button px-8 py-4 text-lg font-bold text-white relative z-10 group" onClick={() => scrollToSection('contact')}>
                <span className="relative z-10 flex items-center gap-3">
                  Solicitar Orçamento
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="glass-morphism border border-cyan-500/50 rounded-lg px-8 py-4 text-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300 card-3d" onClick={() => scrollToSection('services')}>
                Conheça nossos serviços
              </button>
            </div>
          </div>

          {/* 3D Avatar Section */}
          <div className="flex justify-center animate-slide-in perspective-container">
            <div className="relative floating-3d">
              {/* Holographic Effect */}
              <div className="absolute inset-0 hologram-effect rounded-full blur-xl"></div>
              
              {/* Main Avatar Container */}
              <div className="relative z-10 p-8">
                <div className="relative">
                  {/* Rotating Ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-cyan-500/30 animate-spin" style={{
                  animationDuration: '20s'
                }}></div>
                  <div className="absolute inset-4 rounded-full border-2 border-purple-500/20 animate-spin" style={{
                  animationDuration: '15s',
                  animationDirection: 'reverse'
                }}></div>
                  
                  {/* Avatar Image */}
                  <div className="relative z-10 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-500 to-purple-600 p-1">
                    <img src="/lovable-uploads/7de3673d-116b-474c-848b-6e9e4fc8499f.png" alt="Willian - Avatar da Wino.ai" className="w-full max-w-md mx-auto rounded-full bg-gradient-to-br from-slate-800 to-slate-900" />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-pulse">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full animate-pulse" style={{
                  animationDelay: '1s'
                }}>
                    <Star className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;