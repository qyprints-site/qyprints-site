import React from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import { CheckCircle2, ShieldCheck, Layers, Droplets, Scissors } from 'lucide-react';

const LabelsPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-secondary/20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">Industrial Solutions</div>
          <h1 className="text-5xl font-bold text-dark mb-8">Professional Label Printing Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            From high-precision cosmetic stickers to heavy-duty industrial decals, QYPrints provides 20+ years of expertise in material science and printing technology.
          </p>
        </div>
      </section>

      {/* Product Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Visuals */}
            <div className="space-y-8">
              <div className="aspect-[4/3] bg-gray-50 border border-gray-100 flex items-center justify-center">
                <span className="text-gray-300 font-bold uppercase tracking-widest text-xs">High-Resolution Label Gallery</span>
              </div>
            </div>

            {/* Technical Details */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-8 uppercase tracking-tight">Engineering Features</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <Layers className="text-primary mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-dark uppercase text-sm mb-1">Multi-Material Substrates</h4>
                    <p className="text-gray-500 text-sm">Supporting PET, Vinyl, Kraft Paper, BOPP, and Synthetic substrates.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Droplets className="text-primary mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-dark uppercase text-sm mb-1">Extreme Resistance</h4>
                    <p className="text-gray-500 text-sm">Engineered to withstand UV, chemicals, water, and temperatures from -40°C to 120°C.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Scissors className="text-primary mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-dark uppercase text-sm mb-1">Precision Finishing</h4>
                    <p className="text-gray-500 text-sm">Full rotary die-cutting, gold/silver foil stamping, embossing, and spot UV coating.</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/20 p-8 rounded-sm mb-12 border border-secondary">
                <h3 className="font-bold text-dark mb-6 flex items-center uppercase text-sm tracking-widest">
                  <ShieldCheck size={18} className="mr-2 text-primary" /> Compliance Standards
                </h3>
                <ul className="grid grid-cols-2 gap-y-4 text-xs font-bold uppercase tracking-tight">
                  <li className="flex items-center text-gray-700"><CheckCircle2 size={14} className="mr-2 text-primary" /> 98% Color Fidelity</li>
                  <li className="flex items-center text-gray-700"><CheckCircle2 size={14} className="mr-2 text-primary" /> Digital & Flexo</li>
                  <li className="flex items-center text-gray-700"><CheckCircle2 size={14} className="mr-2 text-primary" /> SGS/RoHS Certified</li>
                  <li className="flex items-center text-gray-700"><CheckCircle2 size={14} className="mr-2 text-primary" /> Custom Shapes</li>
                </ul>
              </div>

              <div className="flex space-x-4">
                <a href="https://wa.me/8619129955180" target="_blank" className="flex-1 bg-primary text-white py-4 font-bold text-center text-xs uppercase tracking-widest hover:bg-dark transition-colors">Request Quote</a>
                <a href="mailto:sales01@qyprints.com" className="flex-1 border border-primary text-primary py-4 font-bold text-center text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">Order Samples</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default LabelsPage;
