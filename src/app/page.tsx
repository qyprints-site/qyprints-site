import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FactoryShow from '@/components/FactoryShow';
import Categories from '@/components/Categories';
import AboutUs from '@/components/AboutUs';
import ProductionProcess from '@/components/ProductionProcess';
import PartnerSection from '@/components/PartnerSection';
import Contact from '@/components/Contact';
import { Mail, MessageSquare, Clock } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FactoryShow />
      
      {/* Certification Bar (Enhanced) */}
      <section className="py-16 bg-[#1a3a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black mb-2">ISO 9001</span>
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-60">Quality Management</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black mb-2">RoHS</span>
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-60">Environmental Standards</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black mb-2">FSC</span>
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-60">Sustainable Paper</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black mb-2">REACH</span>
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-60">Chemical Compliance</span>
          </div>
        </div>
      </section>

      <Categories />
      <AboutUs />
      <ProductionProcess />
      <PartnerSection />
      <Contact />
    </main>
  );
}
