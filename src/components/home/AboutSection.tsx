
import { Award, Calendar, GraduationCap, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="section-container bg-therapist-50/50">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-1/2 relative">
          <div className="relative z-10 mx-auto max-w-md lg:max-w-full">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="../../../imagens/WhatsApp Image 2025-03-14 at 20.27.10.jpeg" 
                alt="Fisioterapeuta na clínica" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white rounded-xl p-4 shadow-lg max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="bg-therapist-100 p-3 rounded-full">
                  <Award className="w-6 h-6 text-therapist-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Profissional certificado</p>
                  <p className="text-xs text-muted-foreground">CREFITO-X: XXXXX-X</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block absolute -z-10 bg-therapist-200/50 rounded-full w-64 h-64 -bottom-10 -left-10"></div>
          <div className="hidden lg:block absolute -z-10 bg-therapist-100/80 rounded-full w-40 h-40 top-10 -right-5"></div>
        </div>
        
        <div className="w-full lg:w-1/2 animate-fade-in-up">
          <div className="lg:max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-therapist-950">
              Sobre Dra. Graziella Galvão
            </h2>
            
            <p className="text-therapist-800 mb-6">
              Olá, sou a Dra. Graziella Galvão, fisioterapeuta com mais de 10 anos de experiência. Sou especializado em fisioterapia ortopédica e esportiva, com formação pela Universidade Federal de São Paulo e diversos cursos de especialização no Brasil e exterior.
            </p>
            
            <p className="text-therapist-800 mb-8">
              Minha missão é proporcionar um tratamento humanizado e eficaz, utilizando técnicas modernas baseadas em evidências científicas. Acredito que cada paciente é único, e por isso desenvolvo planos de tratamento personalizados para cada situação.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-therapist-100 mr-3">
                  <Calendar className="w-5 h-5 text-therapist-600" />
                </div>
                <div>
                  <h3 className="font-medium text-therapist-900">+10 Anos</h3>
                  <p className="text-sm text-muted-foreground">de experiência</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-therapist-100 mr-3">
                  <Users className="w-5 h-5 text-therapist-600" />
                </div>
                <div>
                  <h3 className="font-medium text-therapist-900">+2.000</h3>
                  <p className="text-sm text-muted-foreground">pacientes atendidos</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-therapist-100 mr-3">
                  <GraduationCap className="w-5 h-5 text-therapist-600" />
                </div>
                <div>
                  <h3 className="font-medium text-therapist-900">Especialista</h3>
                  <p className="text-sm text-muted-foreground">em fisioterapia ortopédica</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-therapist-100 mr-3">
                  <Award className="w-5 h-5 text-therapist-600" />
                </div>
                <div>
                  <h3 className="font-medium text-therapist-900">Certificações</h3>
                  <p className="text-sm text-muted-foreground">nacionais e internacionais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
