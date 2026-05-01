import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const featuredProducts = [
  {
    title: '3D UV DTF Transfer Stickers',
    tag: 'Innovation',
    image: 'https://sc02.alicdn.com/kf/A3a2d7f04e1b04dfa850ef496acc0b504c.png',
    description: 'Instant application on high-end hardware, glass, and packaging surfaces with embossed texture.'
  },
  {
    title: 'Premium Cosmetic Box Printing',
    tag: 'Eco-Friendly',
    image: 'https://sc02.alicdn.com/kf/Ad9883d1a65ef4b9e99da9dabf5007107E.png',
    description: 'FSC-certified board with soy-based inks and luxury tactile finishes for beauty brands.'
  },
  {
    title: 'Precision Offset Printing',
    tag: 'Factory Direct',
    image: 'https://sc02.alicdn.com/kf/Adb201dbef3684127928b2c9c9cb0bc2au.png',
    description: 'Heidelberg 8-color execution for absolute color fidelity and high-volume retail labels.'
  },
  {
    title: 'Security & Anti-Counterfeit',
    tag: 'Brand Protection',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop',
    description: 'Advanced laser hologram and tamper-evident solutions for industrial security.'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold text-[#2D5A27] uppercase tracking-widest mb-4">Product Showcase</h2>
            <h3 className="text-4xl font-bold text-[#1a1a1a]">Engineered for Performance</h3>
          </div>
          <button className="hidden md:flex items-center text-[#2D5A27] font-bold group">
            EXPLORE CATALOG <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProducts.map((product, index) => (
            <div key={index} className="group relative overflow-hidden bg-gray-50 rounded-sm">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="text-[#A3C585] text-xs font-black uppercase tracking-widest mb-2">{product.tag}</div>
                <h4 className="text-2xl font-bold text-[#1a1a1a] mb-4 uppercase">{product.title}</h4>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <div className="flex space-x-4">
                  <a href="https://qyprints.en.alibaba.com/" className="text-sm font-bold text-[#2D5A27] border-b-2 border-[#A3C585] pb-1 hover:text-[#1a1a1a] hover:border-[#2D5A27] transition-colors">
                    VIEW SPECS
                  </a>
                  <a href="https://wa.me/8619129955180" className="text-sm font-bold text-[#2D5A27] hover:text-[#1a1a1a] transition-colors">
                    INQUIRE NOW →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
