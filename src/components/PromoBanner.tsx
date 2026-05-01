import React from 'react';

const PromoBanner = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-sm">
        <div className="aspect-[21/9] relative">
          <img 
            src="https://sc02.alicdn.com/kf/A0fc1f199f7644b2786df69788856a247p.png" 
            alt="Custom Packaging and Printing Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-start p-12">
            <div className="max-w-xl text-white">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Beyond Standard Packaging. <br />
                <span className="text-[#A3C585]">Your Premium Print Partner.</span>
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Innovative label solutions and sustainable packaging boxes tailored for global high-end brands.
              </p>
              <a href="https://wa.me/8619129955180" target="_blank" className="inline-block bg-[#2D5A27] text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#1f401b] transition-all">
                Order Samples
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
