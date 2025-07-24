import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import portfolio1 from '../assets/images/logo CAW.png';
import portfolio2 from '../assets/images/logo FBE.png';
import portfolio3 from '../assets/images/logo KPB.png';
import portfolio4 from '../assets/images/logo WBJ.png';
interface PortfolioSlide {
  title: string;
  description: string;
  imageUrl?: string;
}

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const portfolioSlides: PortfolioSlide[] = [
    {
      title: "Social Media Branding for Wellness Brand",
      description: "We helped an Aussie Wellness brand increase their Instagram followers by 45% each quarter organicly through strategic content creation.",
      imageUrl: portfolio1,
    },
    {
      title: "Social Media Campaign for New Essence Brand",
      description: "We designed and created a fully creative ads for their CPAS and getting ROAS up to 5x from zero.",
      imageUrl: portfolio2,
    },
    {
      title: "Social Media Boosting for F&B Brand",
      description: "We helped a Social Media organic reach and ads awareness to increasing ER by 40%.",
      imageUrl: portfolio3,
    },
    {
      title: "Social Media Boosting for Local F&B",
      description: "We helped a local F&B increasing their online delivery food sales by 20% through targeted ads in creating engaging content and strategic ad placements.",
      imageUrl: portfolio4,
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === portfolioSlides.length - 1 ? 0 : prevSlide + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? portfolioSlides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === portfolioSlides.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [portfolioSlides.length]);
  
  return (
    <section id="portfolio" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Take a look at some of our successful projects and how we've helped businesses achieve their goals.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {portfolioSlides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gray-900 p-8 h-96 flex flex-col justify-center items-center text-center">
                    <div className="w-full h-40 bg-gray-800 rounded-lg mb-6 flex items-center justify-center">
                      {slide.imageUrl ? (
                        <img src={slide.imageUrl} alt={slide.title} className="max-h-full" />
                      ) : (
                        <span className="text-gray-600">Portfolio Image</span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{slide.title}</h3>
                    <p className="text-gray-300">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#599d39] rounded-full p-2 shadow-lg text-white hover:bg-[#4a8a2e] z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={15} /> 
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#599d39] rounded-full p-2 shadow-lg text-white hover:bg-[#4a8a2e] z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={15} />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {portfolioSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-[#599d39]' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;