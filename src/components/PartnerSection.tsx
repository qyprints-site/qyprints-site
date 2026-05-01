import React from 'react';

const PartnerSection = () => {
  return (
    <section className="py-24 bg-white" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Strength & Trust</h2>
          <h3 className="text-4xl font-black text-[#1a3a1a] uppercase tracking-tighter">Trusted by Global Leaders</h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        {/* Global Leaders Logo Cloud - Using Reference Image 127 */}
        <div className="mb-24 flex justify-center">
          <img 
            src="https://sc01.alicdn.com/kf/Hde202fcc00a54db2919bee118c8e0c68X.png" 
            alt="Trusted Partners (Dior, Disney, Microsoft, Huawei, etc.)"
            className="w-full max-w-5xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
