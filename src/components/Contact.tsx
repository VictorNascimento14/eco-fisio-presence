
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contato" className="section-container bg-therapist-50/70">
      <div className="text-center mb-12">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">
          Estamos aqui para responder suas dúvidas e agendar sua consulta
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-therapist-800 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-therapist-200 focus:border-therapist-500 focus:ring-2 focus:ring-therapist-500/20 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-therapist-800 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-therapist-200 focus:border-therapist-500 focus:ring-2 focus:ring-therapist-500/20 outline-none transition-all"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-therapist-800 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-therapist-200 focus:border-therapist-500 focus:ring-2 focus:ring-therapist-500/20 outline-none transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-therapist-800 mb-1">
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-2.5 rounded-lg border border-therapist-200 focus:border-therapist-500 focus:ring-2 focus:ring-therapist-500/20 outline-none transition-all"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="ortopedica">Fisioterapia Ortopédica</option>
                  <option value="esportiva">Fisioterapia Esportiva</option>
                  <option value="neurologica">Reabilitação Neurológica</option>
                  <option value="pilates">Pilates Terapêutico</option>
                  <option value="respiratoria">Fisioterapia Respiratória</option>
                  <option value="domiciliar">Atendimento Domiciliar</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-therapist-800 mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-therapist-200 focus:border-therapist-500 focus:ring-2 focus:ring-therapist-500/20 outline-none transition-all resize-none"
                placeholder="Descreva sua necessidade, dúvida ou detalhe seu caso..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-therapist-600 text-white font-medium transition-all hover:bg-therapist-700 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Mensagem
                  <Send size={16} className="ml-2" />
                </>
              )}
            </button>
          </form>
        </div>
        
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="h-full flex flex-col">
            <div className="bg-white rounded-2xl shadow-sm border border-therapist-100 p-6 md:p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6 text-therapist-900">Informações de Contato</h3>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-therapist-100 mr-4">
                    <MapPin className="w-5 h-5 text-therapist-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-therapist-800">Endereço</h4>
                    <p className="text-muted-foreground">Av. Paulista, 1000 - Bela Vista, São Paulo - SP</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-therapist-100 mr-4">
                    <Phone className="w-5 h-5 text-therapist-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-therapist-800">Telefone</h4>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-therapist-100 mr-4">
                    <Mail className="w-5 h-5 text-therapist-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-therapist-800">Email</h4>
                    <p className="text-muted-foreground">contato@fisiovida.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-therapist-100 mr-4">
                    <Clock className="w-5 h-5 text-therapist-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-therapist-800">Horário de Atendimento</h4>
                    <p className="text-muted-foreground">Segunda a Sexta: 8h às 20h</p>
                    <p className="text-muted-foreground">Sábados: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 rounded-2xl overflow-hidden border border-therapist-100 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976521272267!2d-46.6584976!3d-23.5651116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1656520626155!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '250px' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da clínica"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
