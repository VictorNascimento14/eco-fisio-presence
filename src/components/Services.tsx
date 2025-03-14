
import { Activity, Clock, HeartPulse, Leaf, Smile, UserCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    title: "Fisioterapia Ortopédica",
    description: "Tratamentos para lesões musculares, articulares e ósseas, recuperando a mobilidade e aliviando a dor.",
    icon: Activity,
    color: "bg-green-50 text-green-600 border-green-100"
  },
  {
    title: "Fisioterapia Esportiva",
    description: "Recuperação de lesões esportivas e preparação física para atletas de todos os níveis.",
    icon: HeartPulse,
    color: "bg-blue-50 text-blue-600 border-blue-100"
  },
  {
    title: "Reabilitação Neurológica",
    description: "Tratamento especializado para condições como AVC, Parkinson e outras disfunções neurológicas.",
    icon: UserCheck,
    color: "bg-purple-50 text-purple-600 border-purple-100"
  },
  {
    title: "Pilates Terapêutico",
    description: "Exercícios personalizados que fortalecem a musculatura profunda e melhoram a postura.",
    icon: Leaf,
    color: "bg-yellow-50 text-yellow-600 border-yellow-100"
  },
  {
    title: "Fisioterapia Respiratória",
    description: "Técnicas específicas para melhorar a capacidade respiratória e tratar condições pulmonares.",
    icon: Smile,
    color: "bg-red-50 text-red-600 border-red-100"
  },
  {
    title: "Atendimento Domiciliar",
    description: "Comodidade e qualidade de atendimento no conforto da sua casa, para pacientes com mobilidade reduzida.",
    icon: Clock,
    color: "bg-indigo-50 text-indigo-600 border-indigo-100"
  }
];

const Services = () => {
  return (
    <section id="serviços" className="section-container bg-white">
      <div className="text-center mb-12">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">
          Oferecemos uma ampla gama de tratamentos fisioterapêuticos personalizados para suas necessidades específicas
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="glass-card p-6 hover-card-animation"
            data-aos="fade-up"
            data-aos-delay={100 * index}
          >
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", service.color)}>
              <service.icon size={24} />
            </div>
            
            <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
