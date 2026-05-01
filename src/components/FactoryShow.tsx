import React from 'react';

const FactoryShow = () => {
  const metrics = [
    { value: '2004', label: 'THE COMPANY WAS FOUNDED IN' },
    { value: '22', label: 'YEARS OF PRINTING EXPERIENCE' },
    { value: 'OEM&ODM', label: 'PROVIDE ONE-STOP SERVICES TO ENSURE TIMELY DELIVERY OF PRODUCTS' },
    { value: '50+', label: 'OUR COMPANY EMPLOYEES HAVE' },
    { value: '100%', label: 'ON LINE INSPECTION' },
    { value: '5000 m²', label: 'MANUFACTURING SPACE' }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-black text-[#1a3a1a] mb-6 uppercase tracking-tight leading-tight">
              SPECIALIZATION IN <br />MANUFACTURING <br />
              <span className="text-primary">PACKAGING PRINTING</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed max-w-lg">
              <p>
                ShenZhen QiYao Tec Co., Ltd. was established in 2004 and is located in Shenzhen, Guangdong, China. Our factory covers 5,000m² with advanced high-speed printing and packaging machines, providing a total yearly output of over 20 40HQ containers.
              </p>
              <p className="text-gray-500 text-sm italic">
                20+ years, we focus on manufacturing and exporting high-quality labels, stickers, and custom boxes to meet strict international standards. Our products hold certifications including ISO 9001, RoHS, and FSC.
              </p>
            </div>
            <a 
              href="https://qyprints.en.alibaba.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-[#1a3a1a] text-white px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-lg"
            >
              View More
            </a>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://sc01.alicdn.com/kf/Hcef95170a4a74c3b8ae091ebf1673813e.png" 
                alt="Advanced Printing Equipment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-[16px] border-white/10 pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl border border-gray-100 hidden md:block">
              <div className="text-primary font-black text-xl tracking-tighter">TRUSTED PARTNER</div>
            </div>
          </div>
        </div>

        {/* Metrics Grid Section - White Background, Primary Color, Hover Effect */}
        <div className="bg-[#f8faf8] rounded-3xl p-12 md:p-16 border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
            {metrics.map((m, i) => (
              <div 
                key={i} 
                className="text-center group cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95 flex flex-col items-center"
              >
                <div className="text-5xl font-black mb-4 tracking-tighter text-primary group-hover:text-[#1a3a1a] transition-colors">
                  {m.value.includes('m²') ? (
                    <span className="flex items-baseline justify-center">
                      5000<span className="text-xl ml-1">m²</span>
                    </span>
                  ) : m.value}
                </div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] leading-relaxed max-w-[200px] text-gray-500 group-hover:text-primary transition-colors">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Factory Show Grid */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-[#1a3a1a] uppercase tracking-tighter mb-4">Our Factory Show</h3>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://sc01.alicdn.com/kf/H8257f7f7c5f0484c9ef7d115e1221f1am.png',
              'https://sc01.alicdn.com/kf/H54d2800f46ed44d4ba67675fbe29723en.png',
              'https://sc01.alicdn.com/kf/Hb3fddfbce80b4ebd818476b3466a543dm.png',
              'https://sc01.alicdn.com/kf/Ha90450614f0c4221b9e7ff35796f5a1bq.png'
            ].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden bg-gray-100 rounded-lg shadow-sm">
                <img 
                  src={img} 
                  alt={`Factory scene ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryShow;
