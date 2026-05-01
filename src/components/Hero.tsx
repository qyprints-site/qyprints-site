import React from 'react';
import { Award, ShieldCheck, Leaf, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 bg-dark overflow-hidden">
      {/* Background: Foggy Dark Forest matching Reference Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2560&auto=format&fit=crop" 
          alt="Foggy Forest Background"
          className="w-full h-full object-cover opacity-60 grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark/40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content - Layout matching Reference Image */}
          <div className="order-2 lg:order-1 text-white">
            <h4 className="text-xl md:text-2xl font-medium tracking-widest mb-4 opacity-90 drop-shadow-md">
              Focus · Professional · Innovate
            </h4>
            
            <h1 className="text-7xl md:text-[8rem] font-black leading-[0.9] mb-8 uppercase tracking-tighter drop-shadow-2xl">
              OEM & ODM
            </h1>

            <div className="max-w-xl">
               <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
                  LEADING MANUFACTURER <br />
                  OF PACKAGING PRINTING
               </h2>
               
               <p className="text-sm md:text-base text-white/80 leading-relaxed mb-10 font-medium max-w-lg">
                  With a variety of features to choose from, we can design the right tag or label solution to suit your project, application and environment.
               </p>

               <div className="flex flex-wrap gap-4 mb-8">
                 <a 
                   href="#contact" 
                   className="inline-block bg-white text-dark px-10 py-3.5 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-primary hover:text-white transition-all shadow-2xl"
                 >
                   Contact Us
                 </a>

                 <a 
                   href="https://qyprints.en.alibaba.com/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-block bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-3.5 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white hover:text-dark transition-all shadow-2xl flex items-center"
                 >
                   Visit Alibaba Store <Globe className="ml-2" size={14} />
                 </a>
               </div>
            </div>
          </div>

          {/* Image Content - Enlarged Labels & Boxes */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl flex flex-col items-center scale-125 origin-center lg:origin-right transition-transform duration-1000">
              {/* Product Showcase - Enlarged */}
              <div className="relative z-10 group">
                <img 
                  src="https://sc01.alicdn.com/kf/H384b27cc44c24c2ba9f1cbf2f17862133.png" 
                  alt="Packaging Printing Samples"
                  className="w-full h-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* White Certification Logos below products - Using Reference Image 38 */}
              <div className="mt-16 flex items-center justify-center opacity-80">
                 <img 
                   src="https://sc01.alicdn.com/kf/He052bcbb83204ebfa986b9fd740faf23v.png" 
                   className="h-10 md:h-12 w-auto object-contain" 
                   alt="Environmental Certifications (FSC, UL, RoHS, CE, Recyclable)" 
                 />
              </div>
              
              {/* Decorative elements to match the hand-holding-cup depth */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 blur-[100px] rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
