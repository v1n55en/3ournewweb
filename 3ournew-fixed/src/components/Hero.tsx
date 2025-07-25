import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import orang from '../assets/images/orang.png';

const Hero = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY * 0.07);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col items-start">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Elevate Your <span className="text-[#599d39]">Social Media</span> Presence
            </h1>
            {/* Logo di tengah pada mobile */}
            <div className="w-full flex justify-center my-6 md:hidden">
              <img
                src={orang}
                alt="3Our Agency"
                className="w-40 h-40 object-contain"
              />
            </div>
            <p className="text-lg text-gray-300 mb-8">
              3Our Agency helps businesses grow their online presence through strategic social media management, web development, and digital marketing solutions.
            </p>
            <div className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#services" 
                className="px-6 py-3 bg-[#599d39] text-white font-medium rounded-lg hover:bg-[#4a8a2e] transition-colors flex items-center justify-center"
              >
                Explore Services <ArrowRight className="ml-2" size={18} />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-[#599d39] text-[#599d39] font-medium rounded-lg hover:bg-[#599d39]/10 transition-colors flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
          </div>
          {/* Logo di kanan pada desktop */}
          <div className="md:w-1/2 flex justify-center hidden md:flex">
            <img
              src={orang}
              alt="3Our Agency"
              className="w-64 h-64 md:w-80 md:h-80 object-contain"
              style={{
                transition: 'transform 0.2s linear',
                transform: `rotate(${rotation}deg) scale(${1 + rotation * 0.002})`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
