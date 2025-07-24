import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="3Our" className="h-10 mb-4" />
            <p className="text-gray-400 mb-6 text-left">
              Elevating your social media presence with strategic management, creative content, and result-driven solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/3ourid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#599d39] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/3our.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#599d39] transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          

          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-[#599d39]" />
                <a
                  href="mailto:3our.id@gmail.com"
                  className="text-gray-400 hover:underline"
                >
                  3our.id@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-[#599d39]" />
                <a
                  href="https://wa.me/6285179642520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:underline"
                >
                  +62 851 7964 2520
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-[#599d39]" />
                <span className="text-gray-400">West Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} 3Our Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;