
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Ana Oliveira",
    role: "Atleta Amadora",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Após uma lesão no joelho, pensei que não poderia mais correr. Graças ao tratamento do Dr. Ricardo, retornei às corridas em apenas 2 meses. Sua abordagem é meticulosa e eficaz.",
    rating: 5
  },
  {
    name: "Carlos Mendes",
    role: "Executivo",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "As dores lombares crônicas estavam afetando minha qualidade de vida. O tratamento personalizado fez toda a diferença. Hoje tenho uma rotina muito mais confortável e produtiva.",
    rating: 5
  },
  {
    name: "Mariana Santos",
    role: "Professora",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "O atendimento domiciliar foi fundamental para a recuperação da minha mãe após a cirurgia de quadril. Profissionalismo e atenção que fazem toda a diferença.",
    rating: 5
  },
  {
    name: "Paulo Ribeiro",
    role: "Aposentado",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    content: "O problema no ombro que me acompanhava há anos foi resolvido em poucas sessões. A combinação de técnicas manuais e exercícios específicos foi a chave para minha recuperação.",
    rating: 5
  },
  {
    name: "Juliana Costa",
    role: "Dançarina",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    content: "Como dançarina profissional, qualquer lesão é um grande problema. A fisioterapia esportiva me ajudou não apenas a recuperar, mas a prevenir novas lesões.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };
  
  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };
  
  const pauseAutoplay = () => setAutoplay(false);
  const resumeAutoplay = () => setAutoplay(true);
  
  useEffect(() => {
    if (autoplay) {
      timeoutRef.current = setTimeout(() => {
        nextTestimonial();
      }, 5000);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current, autoplay]);

  return (
    <section id="depoimentos" className="section-container bg-white">
      <div className="text-center mb-12">
        <h2 className="section-title">O Que Dizem Nossos Pacientes</h2>
        <p className="section-subtitle">
          Conheça histórias reais de quem transformou sua qualidade de vida com nossos tratamentos
        </p>
      </div>
      
      <div 
        className="relative max-w-4xl mx-auto"
        onMouseEnter={pauseAutoplay}
        onMouseLeave={resumeAutoplay}
        onTouchStart={pauseAutoplay}
        onTouchEnd={resumeAutoplay}
      >
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="glass-card p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    <div className="flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-20 h-20 rounded-full object-cover border-2 border-therapist-100"
                      />
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={cn(
                              "w-5 h-5", 
                              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            )}
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg text-therapist-800 mb-4 italic">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div>
                        <h4 className="font-medium text-therapist-900">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={prevTestimonial}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-therapist-800 hover:bg-white hover:text-therapist-600 transition-colors z-10"
          aria-label="Depoimento anterior"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button 
          onClick={nextTestimonial}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-therapist-800 hover:bg-white hover:text-therapist-600 transition-colors z-10"
          aria-label="Próximo depoimento"
        >
          <ChevronRight size={20} />
        </button>
        
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                current === index 
                  ? "bg-therapist-600 w-6" 
                  : "bg-therapist-200 hover:bg-therapist-300"
              )}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
