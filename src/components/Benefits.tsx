
import { Calculator, Users, Target, TrendingUp } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Economia Real com </span>
            <span className="text-gradient">Inteligência Artificial</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Compare os custos de funcionários tradicionais com nossa solução de IA e descubra quanto sua empresa pode economizar
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Traditional Employee Card */}
          <div className="glass-morphism border border-red-500/20 rounded-xl p-8 card-3d">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Funcionário CLT (1 Salário Mínimo)</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-300">Salário mínimo 2024:</span>
                <span className="text-red-400 font-bold">R$ 1.518</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-300">INSS (20%):</span>
                <span className="text-red-400 font-bold">R$ 304</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-300">FGTS (8%):</span>
                <span className="text-red-400 font-bold">R$ 121</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-300">PIS (1%):</span>
                <span className="text-red-400 font-bold">R$ 15</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-300">13º salário (8,33%):</span>
                <span className="text-red-400 font-bold">R$ 126</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-300">Férias + 1/3 (11,11%):</span>
                <span className="text-red-400 font-bold">R$ 169</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-300">Aviso prévio (4,17%):</span>
                <span className="text-red-400 font-bold">R$ 63</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-300">Multa FGTS (3,6%):</span>
                <span className="text-red-400 font-bold">R$ 55</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-300">Benefícios/outros:</span>
                <span className="text-red-400 font-bold">R$ 228</span>
              </div>
              
              <div className="pt-4 border-t border-gray-600">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-white">Custo total/mês:</span>
                  <span className="text-2xl font-bold text-red-400">R$ 2.637</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">*Total: 173,7% do salário mínimo (CLT 2024)</p>
              </div>
            </div>
          </div>

          {/* IA Automatikus Card - Recommended */}
          <div className="glass-morphism border border-green-500/50 rounded-xl p-8 card-3d relative overflow-hidden">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">RECOMENDADO</span>
            </div>
            
            <div className="text-center mb-6 mt-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">IA Automatikus</h3>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">75%</div>
                <p className="text-gray-300">Redução de Custos</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">0%</div>
                <p className="text-gray-300">Encargos Trabalhistas</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">0%</div>
                <p className="text-gray-300">Benefícios e Férias</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <p className="text-gray-300">Disponibilidade</p>
              </div>
              
              <div className="pt-4 border-t border-gray-600 text-center">
                <p className="text-sm text-gray-400">Sem licenças • Escalável • Atualizações incluídas</p>
              </div>
            </div>
          </div>

          {/* Your Economy Card */}
          <div className="glass-morphism border border-blue-500/20 rounded-xl p-8 card-3d">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Sua Economia</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-300">Custo CLT atual:</span>
                <span className="text-blue-400 font-bold">R$ 2.637</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-300">Custo com IA:</span>
                <span className="text-blue-400 font-bold">R$ 1.500</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-300">Economia mensal:</span>
                <span className="text-green-400 font-bold">R$ 1.137</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-300">Economia anual:</span>
                <span className="text-green-400 font-bold">R$ 13.644</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-300">Redução de custos:</span>
                <span className="text-green-400 font-bold">43,1%</span>
              </div>
              
              <div className="pt-4 border-t border-gray-600">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-white">ROI:</span>
                  <span className="text-2xl font-bold text-green-400">40 dias</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  *Baseado em 1 salário mínimo (R$ 1.518) + encargos CLT 73,7%. Multiplique por seus salários para calcular sua economia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Economy Plans */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Economia Real com </span>
            <span className="text-gradient">Inteligência Artificial</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Veja como uma IA pode substituir múltiplos funcionários, gerando economia substancial na sua folha de pagamento e custos operacionais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="glass-morphism border border-green-500/20 rounded-xl p-8 card-3d group hover:neon-glow transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-green-400" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Economia de até R$ 3.000/mês</h4>
              <p className="text-gray-300">Uma IA substitui cada funcionário de atendimento, eliminando salários, benefícios, encargos e treinamentos</p>
            </div>
            <div className="text-center">
              <span className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                Por funcionário de atendimento substituído
              </span>
            </div>
          </div>

          {/* Plan 2 */}
          <div className="glass-morphism border border-blue-500/20 rounded-xl p-8 card-3d group hover:neon-glow transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-400" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Economia de até R$ 10.000/mês</h4>
              <p className="text-gray-300">IA substitui equipe completa de gestão financeira com análises automáticas e relatórios inteligentes</p>
            </div>
            <div className="text-center">
              <span className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold">
                Em equipe de gestão financeira
              </span>
            </div>
          </div>

          {/* Plan 3 */}
          <div className="glass-morphism border border-purple-500/20 rounded-xl p-8 card-3d group hover:neon-glow transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-400" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">ROI garantido em 60 dias</h4>
              <p className="text-gray-300">Recupere o investimento rapidamente com a economia imediata em custos de pessoal e operação</p>
            </div>
            <div className="text-center">
              <span className="inline-block bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold">
                Economia líquida a partir do 3º mês
              </span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-morphism border border-gradient-to-r from-cyan-500 to-purple-600 rounded-xl p-8 max-w-4xl mx-auto">
            <h4 className="text-3xl font-bold text-white mb-4">
              Pronto para economizar milhares por mês?
            </h4>
            <p className="text-lg text-gray-300 mb-8">
              Descubra exatamente quanto sua empresa pode economizar com nossa solução de IA
            </p>
            <button 
              className="cyber-button px-8 py-4 text-lg font-bold text-white"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Calcular Minha Economia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
