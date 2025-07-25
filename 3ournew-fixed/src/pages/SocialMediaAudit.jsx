import SocialMediaForm from '../components/SocialMediaForm';

const SocialMediaAudit = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 mt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Social Media Audit</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Isi form berikut untuk mendapatkan audit sosial media gratis dan rekomendasi khusus untuk bisnis Anda.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center min-h-[40vh]">
          <span className="text-xl font-semibold text-[#599d39]">
            In Development, Please wait for new feature
          </span>
        </div>
        {/* <SocialMediaForm /> */}
      </div>
    </section>
  );
};

export default SocialMediaAudit;