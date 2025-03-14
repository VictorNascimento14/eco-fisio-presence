
import { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Add animations for elements when they become visible
    const revealElements = () => {
      const windowHeight = window.innerHeight;
      document.querySelectorAll('.animate-fade-in-up, .animate-fade-in, .animate-slide-in-right').forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add('opacity-100');
          element.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    };
    
    window.addEventListener('scroll', revealElements);
    window.addEventListener('resize', revealElements);
    
    // Initial check
    setTimeout(revealElements, 100);
    
    return () => {
      window.removeEventListener('scroll', revealElements);
      window.removeEventListener('resize', revealElements);
    };
  }, []);

  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </MainLayout>
  );
};

export default Index;
