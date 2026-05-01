import React from 'react';
import { ShieldCheck, Leaf, FlaskConical, Globe } from 'lucide-react';

const Compliance = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Quality & Responsibility</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight uppercase">Beyond Printing: A Commitment to Standards</h3>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              At QYPrints, we believe that industrial quality is inseparable from environmental responsibility. Our processes are audited to meet the strictest global requirements.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start">
                <ShieldCheck className="text-accent mr-4 flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-lg mb-2 uppercase tracking-tight">ISO 9001:2015</h4>
                  <p className="text-sm text-white/60">Strict quality management system ensuring consistent output and continuous improvement.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Leaf className="text-accent mr-4 flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-lg mb-2 uppercase tracking-tight">FSC Certified</h4>
                  <p className="text-sm text-white/60">Supporting responsible forest management through our paper sourcing and supply chain.</p>
                </div>
              </div>
              <div className="flex items-start">
                <FlaskConical className="text-accent mr-4 flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-lg mb-2 uppercase tracking-tight">RoHS & REACH</h4>
                  <p className="text-sm text-white/60">Lead-free and chemical-safe materials, compliant with EU environmental directives.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="text-accent mr-4 flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-lg mb-2 uppercase tracking-tight">Global Logistics</h4>
                  <p className="text-sm text-white/60">Reliable DDP/DDU shipping services to over 100 countries worldwide.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-white/5 rounded-sm border border-white/10 p-12 flex flex-col justify-center">
              <div className="mb-8 border-l-4 border-accent pl-6">
                <div className="text-6xl font-black text-accent mb-2">0%</div>
                <div className="text-white/60 uppercase tracking-widest text-[10px] font-bold">Defect Rate Goal</div>
              </div>
              <div className="mb-8 border-l-4 border-accent pl-6">
                <div className="text-6xl font-black text-accent mb-2">100%</div>
                <div className="text-white/60 uppercase tracking-widest text-[10px] font-bold">In-house Inspection</div>
              </div>
              <div className="border-l-4 border-accent pl-6">
                {/* Fixed the < sign to avoid build errors */}
                <div className="text-6xl font-black text-accent mb-2">{"ΔE < 3"}</div>
                <div className="text-white/60 uppercase tracking-widest text-[10px] font-bold">Color Accuracy</div>
              </div>
              
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-accent/20"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-accent/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
