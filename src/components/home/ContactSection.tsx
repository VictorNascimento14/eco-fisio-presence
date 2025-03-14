
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';

const ContactSection = () => {
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
          <ContactForm />
        </div>
        
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
