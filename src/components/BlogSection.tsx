import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Why UV DTF Stickers are Revolutionizing Product Branding in 2026",
    excerpt: "Discover the technology behind 3D transfer stickers and why top electronics brands are switching to this no-heat application method.",
    date: "Apr 28, 2026",
    author: "Technical Team",
    image: "https://sc02.alicdn.com/kf/A3a2d7f04e1b04dfa850ef496acc0b504c.png",
    slug: "uv-dtf-revolution-2026"
  },
  {
    title: "Sustainable Packaging: FSC-Certified Custom Boxes for Eco-Brands",
    excerpt: "Explore our latest eco-friendly printing samples including recycled kraft paper mailers and non-toxic soy-based ink solutions.",
    date: "Apr 15, 2026",
    author: "Compliance Dept",
    image: "https://sc02.alicdn.com/kf/Ad9883d1a65ef4b9e99da9dabf5007107E.png",
    slug: "fsc-packaging-standards"
  },
  {
    title: "Heidelberg Excellence: Achieving Delta E < 3 in High-Volume Runs",
    excerpt: "A deep dive into our offset printing process ensuring absolute color consistency for global cosmetic and retail brands.",
    date: "Mar 20, 2026",
    author: "Production Expert",
    image: "https://sc02.alicdn.com/kf/Adb201dbef3684127928b2c9c9cb0bc2au.png",
    slug: "color-fidelity-label-printing"
  }
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-white" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Industrial Insights</h2>
            <h3 className="text-4xl font-bold text-dark uppercase">Latest from QYPrints</h3>
          </div>
          <a href="/blog" className="hidden md:flex items-center text-primary font-bold group">
            VIEW ALL NEWS <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="flex flex-col group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center text-xs text-gray-400 mb-3 space-x-4 uppercase tracking-widest font-bold">
                <span className="flex items-center"><Calendar size={12} className="mr-1" /> {post.date}</span>
                <span className="flex items-center"><User size={12} className="mr-1" /> {post.author}</span>
              </div>
              <h4 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors leading-tight uppercase tracking-tight">
                {post.title}
              </h4>
              <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-auto flex items-center text-primary font-bold text-xs uppercase tracking-widest">
                READ MORE <ArrowRight size={14} className="ml-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
