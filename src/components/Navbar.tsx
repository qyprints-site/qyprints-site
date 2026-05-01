import React from 'react';
import { Globe, Search, Menu, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="fixed w-full z-50">
      {/* Top tier with Logo and Certifications */}
      <div className="bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <span className="text-3xl font-black text-dark tracking-tighter">
              QY<span className="text-primary">PRINTS</span>
            </span>
            <div className="flex items-center gap-6 opacity-60 grayscale scale-75 origin-left">
               <span className="text-sm font-bold border-r border-gray-300 pr-6">BRGS</span>
               <span className="text-sm font-bold border-r border-gray-300 pr-6">FSC</span>
               <span className="text-sm font-bold border-r border-gray-300 pr-6">SEDEX</span>
               <span className="text-sm font-bold border-r border-gray-300 pr-6">ISO 9001</span>
               <span className="text-sm font-bold border-r border-gray-300 pr-6">ROHS</span>
               <span className="text-sm font-bold">REACH</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="https://sc01.alicdn.com/kf/H384b27cc44c24c2ba9f1cbf2f17862133.png" className="h-10 w-auto opacity-80" alt="Quick Preview" />
            <div className="bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Inquire Now</div>
          </div>
        </div>
      </div>

      {/* Main Navigation Tier */}
      <nav className="bg-dark/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-14 items-center">
            <div className="flex space-x-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <div className="relative group">
                <button className="hover:text-white transition-colors flex items-center">
                  Products <ChevronDown size={12} className="ml-1" />
                </button>
                <div className="absolute top-full left-0 w-64 bg-white shadow-2xl py-4 hidden group-hover:block border-t-2 border-primary translate-y-2">
                   <a href="https://qyprints.en.alibaba.com/productgrouplist-964138203/Roll_Label_Sticker.html" target="_blank" className="block px-6 py-3 text-dark text-[10px] hover:bg-gray-50 hover:text-primary transition-colors border-b border-gray-100">Custom Labels Sticker</a>
                   <a href="https://qyprints.en.alibaba.com/productgrouplist-963471046/BOX.html" target="_blank" className="block px-6 py-3 text-dark text-[10px] hover:bg-gray-50 hover:text-primary transition-colors border-b border-gray-100">Custom Card Boxes</a>
                   <a href="https://qyprints.en.alibaba.com/productgrouplist-963471046/BOX.html" target="_blank" className="block px-6 py-3 text-dark text-[10px] hover:bg-gray-50 hover:text-primary transition-colors border-b border-gray-100">Custom Mailer Boxes</a>
                   <a href="https://qyprints.en.alibaba.com/productgrouplist-965981100/TOP.html" target="_blank" className="block px-6 py-3 text-dark text-[10px] hover:bg-gray-50 hover:text-primary transition-colors">Custom Paper Bags</a>
                </div>
              </div>
              <a href="#about" className="hover:text-white transition-colors">About Us</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex items-center bg-white/10 px-4 py-1 rounded-full border border-white/20">
              <input 
                type="text" 
                placeholder="Search in This Store" 
                className="bg-transparent text-white text-[10px] placeholder:text-white/40 focus:outline-none w-48"
              />
              <Search size={14} className="text-white/60 ml-2" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
