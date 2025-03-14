
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
              <p className="text-muted-foreground">Rua bulgária, 203 - Altos</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="p-2 rounded-full bg-therapist-100 mr-4">
              <Phone className="w-5 h-5 text-therapist-600" />
            </div>
            <div>
              <h4 className="font-medium text-therapist-800">Telefone</h4>
              <p className="text-muted-foreground">(85) 98511-5513</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="p-2 rounded-full bg-therapist-100 mr-4">
              <Mail className="w-5 h-5 text-therapist-600" />
            </div>
            <div>
              <h4 className="font-medium text-therapist-800">Email</h4>
              <p className="text-muted-foreground">graziella_galvao@hotmail.com</p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4940.0623254279535!2d-38.581853024124065!3d-3.7930641435063563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74dd280f63c39%3A0x6339acd2d43988ac!2sRua%20Bulgaria%2C%20203%20-%20Manuel%20S%C3%A1tiro%2C%20Fortaleza%20-%20CE%2C%2060713-500!5e1!3m2!1spt-BR!2sbr!4v1741989903497!5m2!1spt-BR!2sbr" 
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
