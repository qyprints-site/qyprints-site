import React from 'react';
import { Phone, Search, Edit3, CreditCard, Printer, Truck } from 'lucide-react';

const steps = [
  { id: '01', title: 'Contact Us', icon: <Phone size={24} /> },
  { id: '02', title: 'Inform of needs', icon: <Search size={24} /> },
  { id: '03', title: 'Design Prototyping', icon: <Edit3 size={24} /> },
  { id: '04', title: 'Place order make payment', icon: <CreditCard size={24} /> },
  { id: '05', title: 'Arrange Printing', icon: <Printer size={24} /> },
  { id: '06', title: 'Pack Shipping', icon: <Truck size={24} /> }
];

const ProductionProcess = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#1a3a1a] uppercase tracking-tighter mb-4">
            Your Trusted One-Stop <br className="hidden md:block" /> Packaging Partner
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="relative mb-24">
          <img 
            src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2000&auto=format&fit=crop" 
            alt="Advanced Printing Machine"
            className="w-full h-[500px] object-cover rounded-sm shadow-xl"
          />
          <div className="absolute inset-0 bg-dark/10"></div>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-primary"></div>
            <h3 className="text-3xl font-black text-[#1a3a1a] uppercase tracking-tighter">Customized</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center group">
                {/* Step Number Badge */}
                <div className="bg-[#f0f4f0] text-primary font-bold px-3 py-1 text-xs rounded-full mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {step.id}
                </div>
                
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-white border border-gray-100 shadow-lg rounded-full flex items-center justify-center text-[#1a3a1a] group-hover:scale-110 group-hover:text-primary transition-all mb-6">
                  {step.icon}
                </div>

                {/* Text */}
                <h4 className="text-xs font-bold text-center text-gray-500 uppercase tracking-widest leading-relaxed px-4">
                  {step.title}
                </h4>

                {/* Connecting Arrow (hidden on last and on mobile based on cols) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-[calc(100%-1rem)] -translate-y-1/2 text-gray-200">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionProcess;
