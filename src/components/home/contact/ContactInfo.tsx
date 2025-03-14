
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
