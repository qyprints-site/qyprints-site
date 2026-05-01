import React from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import { Box, Package, Truck, Gift, CheckCircle2, Ruler } from 'lucide-react';

const BoxesPage = () => {
  const boxCategories = [
    { 
      title: "Custom Cardboard Boxes", 
      desc: "Perfect for cosmetics, pharmaceuticals, and retail display. High-quality ivory board with CMYK printing.",
      icon: <Box size={32} />
    },
    { 
      title: "Airplane/Mailer Boxes", 
      desc: "E-commerce ready, sturdy 3-layer corrugated board. Fold-and-lock design for secure shipping.",
      icon: <Truck size={32} />
    },
    { 
      title: "Industrial Containers", 
      desc: "Heavy-duty 5-layer or 7-layer options for industrial shipping and large items.",
      icon: <Package size={32} />
    },
    { 
      title: "Premium Gift Boxes", 
      desc: "Rigid structure with magnetic closures, ribbon, and luxury finishing for high-end gifting.",
      icon: <Gift size={32} />
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1 bg-accent text-dark text-[10px] font-bold uppercase tracking-widest mb-6">Structural Packaging</div>
          <h1 className="text-5xl font-bold mb-8">Custom Packaging & Box Solutions</h1>
          <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
            Engineered packaging solutions that combine structural integrity with premium brand presentation. Tailored for retail, e-commerce, and industrial logistics.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {boxCategories.map((cat, index) => (
              <div key={index} className="flex p-10 bg-gray-50 border border-gray-100 hover:border-primary transition-all group">
                <div className="text-primary mr-8 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-4 uppercase tracking-tight">{cat.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6 text-sm">{cat.desc}</p>
                  <a href="https://wa.me/8619129955180" className="text-xs font-bold text-primary flex items-center uppercase tracking-widest">
                    Request Sizing <CheckCircle2 size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structural Design Info */}
      <section className="py-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-12 uppercase tracking-tight">Engineering & Customization</h2>
              <div className="space-y-10">
                <div className="flex">
                  <Ruler className="text-primary mr-5 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-dark uppercase text-sm mb-2">Prototyping & CAD Design</h4>
                    <p className="text-gray-500 text-sm">Our team provides structural design services ensuring perfect fit and product protection.</p>
                  </div>
                </div>
                <div className="flex">
                  <Box className="text-primary mr-5 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-dark uppercase text-sm mb-2">Technical Inserts</h4>
                    <p className="text-gray-500 text-sm">Custom EVA foam, PET blister, or biodegradable paper pulp inserts available for item security.</p>
                  </div>
                </div>
              </div>
              <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-100 pt-10">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">Stock Dies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24h</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">Samples</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">Recyclable</div>
                </div>
              </div>
            </div>
            <div className="bg-white aspect-square border border-gray-100 flex items-center justify-center">
                <span className="text-gray-300 font-bold uppercase tracking-widest text-xs">Structural Packaging Gallery</span>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default BoxesPage;
