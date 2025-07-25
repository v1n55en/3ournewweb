import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";

const SocialMediaForm = () => {
  // State untuk data form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    socialMedia: '',
    challenges: '',
    goals: '',
    targetAudience: '',
    competitors: ''
  });
  
  // State untuk status form
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Handler untuk perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handler untuk submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Tambahkan data ke Firestore
      const docRef = await addDoc(collection(db, "formSubmissions"), {
        ...formData,
        timestamp: new Date()
      });
      
      console.log("Document written with ID: ", docRef.id);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        socialMedia: '',
        challenges: '',
        goals: '',
        targetAudience: '',
        competitors: ''
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      setError("Terjadi kesalahan saat mengirim form. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Tampilkan pesan sukses jika form berhasil dikirim
  if (submitSuccess) {
    return (
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold text-green-800 mb-2">Form Berhasil Dikirim!</h3>
        <p className="text-green-700 mb-4">Terima kasih telah mengisi form. Tim kami akan segera menghubungi Anda.</p>
        <button 
          onClick={() => setSubmitSuccess(false)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Kirim Form Lagi
        </button>
      </div>
    );
  }

  // Render form
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Social Media Audit Form</h2>
      
      {/* Tampilkan pesan error jika ada */}
      {error && (
        <div className="bg-red-50 p-4 rounded-lg mb-6 text-red-700">
          {error}
        </div>
      )}
      
      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Nama */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Nama Lengkap</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        
        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        
        {/* Perusahaan */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="company">Nama Perusahaan</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        
        {/* Website */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="website">Website/URL</label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="https://"
          />
        </div>
        
        {/* Sosial Media */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="socialMedia">Akun Sosial Media</label>
          <textarea
            id="socialMedia"
            name="socialMedia"
            value={formData.socialMedia}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            rows="2"
            placeholder="Instagram: @example, Facebook: facebook.com/example"
          ></textarea>
        </div>
        
        {/* Tantangan */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="challenges">Tantangan yang dihadapi saat ini</label>
          <textarea
            id="challenges"
            name="challenges"
            value={formData.challenges}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            rows="3"
            required
          ></textarea>
        </div>
        
        {/* Tujuan */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="goals">Tujuan sosial media</label>
          <textarea
            id="goals"
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            rows="3"
            required
          ></textarea>
        </div>
        
        {/* Target Audiens */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="targetAudience">Target audiens</label>
          <textarea
            id="targetAudience"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            rows="2"
          ></textarea>
        </div>
        
        {/* Kompetitor */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="competitors">Informasi kompetitor</label>
          <textarea
            id="competitors"
            name="competitors"
            value={formData.competitors}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            rows="2"
            placeholder="Nama kompetitor dan link sosial media mereka"
          ></textarea>
        </div>
        
        {/* Tombol Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-lg text-white font-medium ${
            isSubmitting ? 'bg-gray-400' : 'bg-[#599d39] hover:bg-[#4a8a2e]'
          } transition-colors`}
        >
          {isSubmitting ? 'Mengirim...' : 'Kirim Form'}
        </button>
      </form>
    </div>
   );
};

export default SocialMediaForm;