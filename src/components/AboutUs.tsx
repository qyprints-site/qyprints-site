import React from 'react';
import { Award, ShieldCheck, Leaf, Target, Settings, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content matching brand story */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-primary"></div>
              <span className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Since 2004</span>
            </div>
            
            <h2 className="text-4xl font-black text-[#1a3a1a] mb-8 uppercase tracking-tighter leading-tight">
              Shenzhen QY Printing Co., Ltd. <br />
              <span className="text-gray-400">Your Premier Partner</span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed mb-10">
              <p>
                Established in 2004, Shenzhen QY Printing Co., Ltd. is a specialist manufacturer of high-performance custom labels, stickers, and packaging solutions. We serve demanding industries including food & beverage, wine & spirits, pharmaceuticals, and industrial sectors.
              </p>
              <p>
                We invest in advanced <span className="text-[#1a3a1a] font-bold underline decoration-primary">Heidelberg and ROLAND</span> printing technology to ensure exceptional print quality, delivering 98% color fidelity for brand-consistent results across every order.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4 p-4 bg-[#f8faf8] rounded-xl border border-gray-100">
                <Target className="text-primary mt-1" size={20} />
                <div>
                  <div className="font-bold text-[#1a3a1a] text-sm uppercase mb-1">Customization</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">End-to-End Solutions</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-[#f8faf8] rounded-xl border border-gray-100">
                <Settings className="text-primary mt-1" size={20} />
                <div>
                  <div className="font-bold text-[#1a3a1a] text-sm uppercase mb-1">QA Inspection</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">Multi-stage Process</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8 opacity-60">
              <div className="flex items-center gap-2"><Award size={18} /> ISO 9001</div>
              <div className="flex items-center gap-2"><Leaf size={18} /> FSC</div>
              <div className="flex items-center gap-2"><ShieldCheck size={18} /> RoHS</div>
            </div>
          </div>

          {/* Right: Technical visual matching the factory vibe */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src="https://sc01.alicdn.com/kf/H73da82a3543a45a8aa4f5b72e7304b70h.png" 
                  className="rounded-2xl shadow-lg" 
                  alt="Precision Tech" 
                />
                <div className="bg-primary p-6 rounded-2xl text-white">
                  <div className="text-4xl font-black mb-1">98%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Color Fidelity</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-dark p-6 rounded-2xl text-white">
                  <CheckCircle className="text-primary mb-4" size={32} />
                  <div className="text-sm font-bold uppercase tracking-widest">Responsibility</div>
                </div>
                <img 
                  src="https://sc01.alicdn.com/kf/Ha5975eedd1f44937b2843005721d7dd86.png" 
                  className="rounded-2xl shadow-lg" 
                  alt="Quality Assurance" 
                />
              </div>
            </div>
            
            {/* Background Decorative Text */}
            <div className="absolute -top-10 -right-10 text-[10rem] font-black text-gray-100 -z-10 select-none">QY</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
