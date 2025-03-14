
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-2 bg-white/80 backdrop-blur-md shadow-sm"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-therapist-600 font-bold text-xl md:text-2xl">Fisio<span className="text-therapist-800">Vida</span></span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Início', 'Serviços', 'Sobre', 'Depoimentos', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              className="font-medium text-therapist-800 hover:text-therapist-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-therapist-800 p-2"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 md:hidden flex flex-col pt-20 px-4 transition-all duration-300 ease-in-out transform",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 items-center">
          {['Início', 'Serviços', 'Sobre', 'Depoimentos', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              className="font-medium text-xl text-therapist-800 hover:text-therapist-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
