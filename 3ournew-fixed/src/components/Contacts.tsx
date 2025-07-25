import { useState } from 'react';
import { Check, Send } from 'lucide-react';

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSecchayPvbmumQlYuCtTolMV4fuJdi1_teVcfukkv-sbaA1kg/formResponse";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    social: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    form.append("entry.1760492752", formData.name);
    form.append("entry.1687931253", formData.email);
    form.append("entry.815684394", formData.phone);
    form.append("entry.680285240", formData.service);
    form.append("entry.1238036405", formData.social);
    form.append("entry.1111450217", formData.message);

    fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      body: form,
    }).then(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          social: '',
          message: '',
        });
      }, 3000);
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-[#599d39]/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="text-[#599d39]" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-black mb-2">Thank You!</h3>
          <p className="text-gray-700">
            Your message has been sent successfully. We'll get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              PIC Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#599d39]"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#599d39]"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#599d39]"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
              Interested Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#599d39]"
              required
            >
              <option value="">Select a service</option>
              <option value="social_services">Starter Plan</option>
              <option value="build_plan">Build Plan</option>
              <option value="amplify_pack">Amplify Pack</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label htmlFor="social" className="block text-gray-700 font-medium mb-2">
              Link Social Media
            </label>
            <input
              type="url"
              id="social"
              name="social"
              value={formData.social}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#599d39]"
              placeholder="https://instagram.com/username"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#599d39]"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-[#599d39] text-white font-medium rounded-lg hover:bg-[#4a8a2e] transition-colors flex items-center justify-center"
          >
            Send Message <Send size={18} className="ml-2" />
          </button>
        </form>
      )}
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions about our services? Ready to start your project? Contact us today and let's discuss how we can help your business grow.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;