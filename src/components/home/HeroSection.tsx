
import { ArrowRight, Leaf } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="início" 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-therapist-50/70 to-white"
    >
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-therapist-700 bg-therapist-100 rounded-full">
              <Leaf size={14} className="mr-1" />
              <span>Cuidado de qualidade para sua saúde</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-therapist-950 mb-4 md:mb-6">
              Fisioterapia <span className="text-therapist-600">personalizada</span> para restaurar sua qualidade de vida
            </h1>
            
            <p className="text-lg md:text-xl text-therapist-800/90 mb-8 max-w-xl">
              Tratamentos inovadores e personalizados focados na sua recuperação e no seu bem-estar. Recupere seus movimentos e viva sem dor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-therapist-600 text-white font-medium transition-all hover:bg-therapist-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Agende uma consulta
                <ArrowRight size={18} className="ml-2" />
              </a>
              
              <a
                href="#serviços"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-therapist-600 font-medium transition-all hover:bg-therapist-50 border border-therapist-200 hover:border-therapist-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                Conhecer serviços
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md relative animate-fade-in">
            <div className="aspect-square rounded-full bg-therapist-100 absolute -right-16 -top-16 w-36 h-36 md:w-48 md:h-48"></div>
            <div className="aspect-square rounded-full bg-therapist-200 absolute -left-8 -bottom-8 w-24 h-24 md:w-32 md:h-32"></div>
            
            <div className="glass-card p-3 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Fisioterapeuta atendendo paciente"
                className="w-full h-auto rounded-xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
