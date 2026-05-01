import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const ProductDetail = ({ 
  title = "Custom UV DTF Transfer Stickers", 
  category = "Electronics & Gadgets",
  description = "High-performance UV DTF stickers designed for hardware, electronics, and non-porous surfaces. Featuring 3D embossed effects and industrial-grade adhesion.",
  features = ["3D Raised Effect", "Water & Scratch Resistant", "No MOQ Required", "High Color Accuracy (E<3)"],
  specs = [
    { label: "Material", value: "Premium UV Ink + PET Film" },
    { label: "Finishing", value: "Glossy / Matte / Foil" },
    { label: "Adhesive", value: "Permanent Acrylic" },
    { label: "Temperature", value: "-20°C to 80°C" }
  ]
}) => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-[#003366]">Home</a> / <a href="#" className="hover:text-[#003366]">{category}</a> / <span className="text-[#003366] font-bold">{title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Product Gallery Placeholder */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden border border-gray-200 flex items-center justify-center">
              <span className="text-gray-400 italic">Main Product Image (High-Res)</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-50 border border-gray-100 rounded-sm flex items-center justify-center text-xs text-gray-400">
                  Thumb {i}
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="inline-block px-3 py-1 bg-[#00AEEF]/10 text-[#00AEEF] text-xs font-bold uppercase tracking-wider rounded-sm mb-4">
              {category}
            </div>
            <h1 className="text-4xl font-bold text-[#003366] mb-6">{title}</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {description}
            </p>

            <div className="space-y-4 mb-10">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center text-[#003366] font-medium">
                  <CheckCircle2 size={20} className="text-[#00AEEF] mr-3" />
                  {feature}
                </div>
              ))}
            </div>

            {/* Technical Specs Table */}
            <div className="border-t border-gray-100 pt-8 mb-10">
              <h3 className="text-lg font-bold text-[#003366] mb-6 flex items-center">
                <ShieldCheck className="mr-2 text-[#00AEEF]" /> Technical Specifications
              </h3>
              <div className="grid grid-cols-2 gap-y-4 text-sm">
                {specs.map((spec, i) => (
                  <React.Fragment key={i}>
                    <div className="text-gray-500 font-medium uppercase tracking-wider">{spec.label}</div>
                    <div className="text-[#003366] font-bold">{spec.value}</div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://wa.me/8619129955180" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-[#003366] text-white py-4 px-8 font-bold text-center hover:bg-[#002244] transition-all flex items-center justify-center"
              >
                REQUEST A SAMPLE <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="mailto:sales01@qyprints.com"
                className="flex-1 border-2 border-[#003366] text-[#003366] py-4 px-8 font-bold text-center hover:bg-[#f0f7ff] transition-all"
              >
                CUSTOM QUOTE
              </a>
            </div>
          </div>
        </div>

        {/* Factory Standards Section in Product Detail */}
        <div className="mt-24 p-12 bg-[#f8f9fa] rounded-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-[#003366] mb-2">Manufacturing Excellence</h3>
            <p className="text-gray-600">All products undergo 100% quality inspection under ISO 9001 standards.</p>
          </div>
          <div className="flex space-x-8 opacity-40">
             <Zap size={48} className="text-[#003366]" />
             <ShieldCheck size={48} className="text-[#003366]" />
             <div className="text-2xl font-black text-[#003366]">E &lt; 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
