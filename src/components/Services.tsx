import { useState } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  category?: string;
  title: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  showPopularBadge?: boolean;
}

const ServiceCard = ({
  category,
  title,
  description,
  features,
  isPopular = false,
  showPopularBadge = true, // default true
}: ServiceCardProps & { showPopularBadge?: boolean }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-4 md:p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 ${isPopular ? 'border-2 border-[#599d39] relative' : ''}`}>
      {isPopular && showPopularBadge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#599d39] text-white px-4 py-1 rounded-full text-sm font-medium">
          Popular Choice
        </div>
      )}
      <div className="mb-3 text-center">
        {category && (
          <div className="text-base font-bold text-black mb-1">{category}</div>
        )}
        <span
          className={`inline-block rounded-full px-4 py-1 font-bold text-black text-base ${getBadgeClass(title)}`}
        >
          {title}
        </span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 mt-1 text-[#599d39]">
              <Check size={16} />
            </span>
            <span className={
              feature === "Rp. 500k monthly ad credit"
              ? "inline-block bg-pink-200 text-pink-700 px-3 py-1 rounded-full font-semibold"
              : "text-gray-700"
            }>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="w-full block text-center py-2 px-4 bg-[#599d39] hover:bg-[#4a8a2e] text-white font-medium rounded-lg transition-colors"
      >
        Get Started
      </a>
    </div>
  );
};

const ServicesCarousel = ({ services, title }: { services: ServiceCardProps[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = typeof window !== 'undefined' ? 
    (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1) : 1;
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + cardsToShow >= services.length ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, services.length - cardsToShow) : prevIndex - 1
    );
  };
  
  return (
    <div className="relative">
      <div className="text-center">
        <h3 className="inline-block rounded-full bg-[#000000] text-white px-6 py-2 text-2xl font-bold mt-2 md:mt-6 mb-4 md:mb-6">
          {title}
        </h3>
      </div>
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg text-[#599d39] hover:text-[#4a8a2e] z-10"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg text-[#599d39] hover:text-[#4a8a2e] z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('starter');

  const socialMediaServices = [
    {
      category: "Social Media",
      title: "Branding",
      description: "Professional branding design for your Instagram business profile.",
      features: [
        "Profile optimization",
        "Visual identity design",
        "Content strategy",
        "Brand guidelines",
        "Monthly performance report"
      ]
    },
    {
      category: "Social Media",
      title: "Boosting",
      description: "Enhance your Instagram presence and drive sales with our boosting package.",
      features: [
        "Profile optimization",
        "Visual identity design",
        "Content strategy",
        "Rp. 500k monthly ad credit",
        "Sales conversion tracking",
        "Monthly performance report"
      ],
      isPopular: true
    },
    {
      category: "Social Media",
      title: "Creators",
      description: "Elevate your content with professional creators and talent management.",
      features: [
        "Profile optimization",
        "Visual identity design",
        "Content creation with talent",
        "Professional photoshoots",
        "Content calendar",
        "Monthly performance report"
      ],
      isPopular: false

    },
    {
      category: "Social Media",
      title: "Combo",
      description: "Our complete solution combining branding, content creation, and sales boosting.",
      features: [
        "Profile optimization",
        "Visual identity design",
        "Content creation with talent",
        "Rp. 500k monthly ad credit",
        "Sales conversion tracking",
        "Priority support",
        "Comprehensive monthly report"
      ],
      isPopular: true
    }
  ];

  const buildPlanServices = [
    {
      title: "AI Web Development",
      description: "Custom website development from AI design choice to payment gateway integration.",
      features: [
        "AI choice design",
        "SEO optimization",
        "Payment gateway integration",
        "Content management system",
        "Analytics setup",
        "3 months support"
      ],
      isPopular: true,
      showPopularBadge: true,
    },
    {
      title: "SEO Management",
      description: "3-month SEO strategy development and implementation for your business.",
      features: [
        "Keyword research",
        "On-page optimization",
        "Content strategy",
        "Backlink building",
        "Monthly reporting",
        "Competitor analysis"
      ],
      isPopular: false,
      showPopularBadge: false,
    },
    {
      title: "CRM Management",
      description: "Custom CRM flow development with AI integration for your business.",
      features: [
        "Customer journey mapping",
        "Workflow automation",
        "AI integration",
        "Data migration",
        "Team training",
        "Ongoing support"
      ]
    }
  ];

  const amplifyPackServices = [
    {
      title: "KOL Management",
      description: "Professional KOL (Key Opinion Leader) management to boost your brand awareness.",
      features: [
        "KOL selection",
        "Campaign planning",
        "Performance tracking"
      ],
      isPopular: false,
      showPopularBadge: false,
    },
    {
      title: "Ads Management",
      description: "Comprehensive ads management for maximum reach and conversion.",
      features: [
        "Ads strategy",
        "Budget optimization",
        "Monthly reporting"
      ],
      isPopular: true,
      showPopularBadge: true,
    }
  ];

  return (
    <section id="services" className="pt-16 pb-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We offer comprehensive social media management and project-based solutions to help your business grow online.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex w-full max-w-md md:max-w-none overflow-x-auto whitespace-nowrap rounded-xl bg-gray-200">
            <button
              className={`flex-1 px-4 py-2 font-bold transition-colors text-sm md:text-base 
                ${activeTab === 'starter'
                  ? 'bg-[#599d39] text-white'
                  : 'text-black hover:bg-gray-300'}
                rounded-l-lg`}
              onClick={() => setActiveTab('starter')}
            >
              Starter Business
            </button>
            <button
              className={`flex-1 px-4 py-2 font-bold transition-colors text-sm md:text-base 
                ${activeTab === 'build'
                  ? 'bg-[#599d39] text-white'
                  : 'text-black hover:bg-gray-300'}
                `}
              onClick={() => setActiveTab('build')}
            >
              Build Business
            </button>
            <button
              className={`flex-1 px-4 py-2 font-bold transition-colors text-sm md:text-base 
                ${activeTab === 'amplify'
                  ? 'bg-[#599d39] text-white'
                  : 'text-black hover:bg-gray-300'}
                rounded-r-lg`}
              onClick={() => setActiveTab('amplify')}
            >
              Amplify Business
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'starter' && (
            <ServicesCarousel services={socialMediaServices} title="Starter Plan Services" />
          )}
          {activeTab === 'build' && (
            <ServicesCarousel services={buildPlanServices} title="Build Plan Services" />
          )}
          {activeTab === 'amplify' && (
            <ServicesCarousel services={amplifyPackServices} title="Amplify Pack Service" />
          )}
        </div>
      </div>
    </section>
  );
};

const getBadgeClass = (title: string) => {
  switch (title) {
    case "Branding":
      return "bg-[#8de0ff] text-black";
    case "Creators":
      return "bg-[#ff914d] text-black";
    case "Boosting":
      return "bg-[#ffde59] text-black";
    case "Combo":
      return "bg-[#f2f2f2] text-black border border-gray-300";
    default:
      return "bg-gray-200 text-black";
  }
};

export default Services;