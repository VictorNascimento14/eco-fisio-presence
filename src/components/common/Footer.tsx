
import { Instagram, Facebook, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-therapist-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-8">
          <div>
            <a href="#" className="text-2xl font-bold text-white">
              Dra<span className="text-therapist-400">Graziella</span>
            </a>
            <p className="mt-3 text-therapist-200 max-w-md">
              Cuidando da sua saúde com expertise e dedicação. Nosso compromisso é com seu bem-estar e qualidade de vida.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contato" 
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-therapist-800 hover:bg-therapist-700 transition-colors text-white text-sm"
            >
              <Mail size={16} className="mr-2" />
              Contate-nos
            </a>
            
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-therapist-600 hover:bg-therapist-500 transition-colors text-white text-sm"
            >
              <ArrowUp size={16} className="mr-2" />
              Voltar ao topo
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navegação</h3>
            <ul className="space-y-2">
              {['Início', 'Serviços', 'Sobre', 'Depoimentos', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`} 
                    className="text-therapist-200 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Serviços</h3>
            <ul className="space-y-2">
              {[
                'Fisioterapia Ortopédica',
                'Fisioterapia Esportiva',
                'Reabilitação Neurológica',
                'Pilates Terapêutico',
                'Fisioterapia Respiratória',
                'Atendimento Domiciliar'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#serviços" 
                    className="text-therapist-200 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-2">
              <li className="text-therapist-200">
              Rua bulgária, 203 - Altos
              </li>
              <li>
                <a href="https://wa.me/5585985115513?text=Ol%C3%A1%2C%20Gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20atendimentos" className="text-therapist-200 hover:text-white transition-colors">
                (85) 98511-5513
                </a>
              </li>
              <li>
                <a href="mailto:graziella_galvao@hotmail.com" className="text-therapist-200 hover:text-white transition-colors">
                 graziella_galvao@hotmail.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Horário</h3>
            <ul className="space-y-2 text-therapist-200">
              <li><span className="font-medium">Segunda a Sexta:</span> 8h às 20h</li>
              <li><span className="font-medium">Sábados:</span> 8h às 12h</li>
              <li><span className="font-medium">Domingos:</span> Fechado</li>
            </ul>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3 text-white">Siga-nos</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/graziellagalvaofisio/" className="p-2 bg-therapist-800 rounded-full hover:bg-therapist-700 transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="p-2 bg-therapist-800 rounded-full hover:bg-therapist-700 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="p-2 bg-therapist-800 rounded-full hover:bg-therapist-700 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="p-2 bg-therapist-800 rounded-full hover:bg-therapist-700 transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-therapist-800 text-center text-therapist-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Dra Graziella Galvão. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
