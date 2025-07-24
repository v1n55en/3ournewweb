import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Header = ( ) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="3Our Logo" className="h-10" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-[#599d39] font-medium transition-colors">Home</a>
          <a href="#services" className="text-white hover:text-[#599d39] font-medium transition-colors">Services</a>
          <a href="#about" className="text-white hover:text-[#599d39] font-medium transition-colors">About Us</a>
          <a href="#portfolio" className="text-white hover:text-[#599d39] font-medium transition-colors">Portfolio</a>
          <a href="#contact" className="text-white hover:text-[#599d39] font-medium transition-colors">Contact</a>
        </nav>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-black shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-[#599d39] font-medium transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#services" className="text-white hover:text-[#599d39] font-medium transition-colors" onClick={toggleMenu}>Services</a>
            <a href="#about" className="text-white hover:text-[#599d39] font-medium transition-colors" onClick={toggleMenu}>About Us</a>
            <a href="#portfolio" className="text-white hover:text-[#599d39] font-medium transition-colors" onClick={toggleMenu}>Portfolio</a>
            <a href="#contact" className="text-white hover:text-[#599d39] font-medium transition-colors" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;