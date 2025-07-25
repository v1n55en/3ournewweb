import { useState } from "react";
import { Check } from "lucide-react";

interface PersonalCardProps {
  title: string;
  description: string;
  features: string[];
  buttonLabel: string;
  isPopular?: boolean;
}

const PersonalCard = ({
  title,
  description,
  features,
  buttonLabel,
  isPopular = false,
}: PersonalCardProps) => (
  <div
    className={`bg-white rounded-xl shadow-lg p-4 md:p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
      isPopular ? "border-2 border-[#599d39] relative" : ""
    }`}
  >
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#599d39] text-white px-4 py-1 rounded-full text-sm font-medium">
        Popular Choice
      </div>
    )}
    <div className="mb-3 text-center">
      <span className="inline-block rounded-full px-4 py-1 font-bold text-black text-base bg-[#e6f4e6]">
        {title}
      </span>
    </div>
    <div className="mb-4 text-center">
      <span className="block text-sm text-gray-500 mb-1 font-semibold">
        Perfect for:
      </span>
      <p className="text-base text-gray-700">{description}</p>
    </div>
    <div className="mb-4 text-left">
      <span className="block text-sm text-gray-500 mb-1 font-semibold">
        What’s included:
      </span>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {features.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <span className="mr-2 mt-1 text-[#599d39]">
              <Check size={16} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <a
      href="#contact"
      className="w-full block text-center py-2 px-4 bg-[#599d39] hover:bg-[#4a8a2e] text-white font-medium rounded-lg transition-colors mt-6"
    >
      {buttonLabel}
    </a>
  </div>
);

const personalServices = [
  {
    title: "Personal Starter",
    description:
      "People who are camera-shy, don’t have time to edit, and have no idea where to start.",
    features: [
      "Pre-made video footage with text overlays (pro/con, hooks, storytelling)",
      "Daily content ideas written & scheduled",
      "Captions crafted to sell your class/digital product",
      "Full video editing done-for-you",
      "You don’t need to record anything, just approve the plan and we post it for you",
    ],
    price: "Start from IDR 999k",
    buttonLabel: "Start from IDR 999k",
    isPopular: true,
  },
  {
    title: "Personal Booster",
    description:
      "Creators who are okay showing up on camera but struggle with editing & content ideas",
    features: [
      "You send your raw footage, we handle the rest",
      "Daily content ideas (hooks, angles, selling points)",
      "Full editing with transitions, captions, music, etc.",
      "Engaging captions tailored to your audience",
      "Content strategy to increase sales & traffic",
    ],
    price: "Start from IDR 900k",
    buttonLabel: "Start from IDR 900k",
    isPopular: false,
  },
];

const ServicePersonal = () => {
  const [activeTab, setActiveTab] = useState("starter");
  const tabIndex = activeTab === "starter" ? 0 : 1;

  return (
    <section id="service-personal" className="pt-16 pb-4 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Personal Branding Service
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Chooose your branding package that suits your needs and content style.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex w-full max-w-md overflow-x-auto whitespace-nowrap rounded-xl bg-gray-200">
            <button
              className={`flex-1 px-4 py-2 font-bold transition-colors text-sm md:text-base ${
                activeTab === "starter"
                  ? "bg-[#599d39] text-white"
                  : "text-black hover:bg-gray-300"
              } rounded-l-lg`}
              onClick={() => setActiveTab("starter")}
            >
              Personal Starter
            </button>
            <button
              className={`flex-1 px-4 py-2 font-bold transition-colors text-sm md:text-base ${
                activeTab === "booster"
                  ? "bg-[#599d39] text-white"
                  : "text-black hover:bg-gray-300"
              } rounded-r-lg`}
              onClick={() => setActiveTab("booster")}
            >
              Personal Booster
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          <PersonalCard {...personalServices[tabIndex]} />
        </div>
      </div>
    </section>
  );
};

export default ServicePersonal;