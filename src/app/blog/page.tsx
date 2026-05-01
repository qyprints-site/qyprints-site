import React from 'react';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Why UV DTF Stickers are Revolutionizing Product Branding in 2026",
    excerpt: "Discover the technology behind 3D transfer stickers and why top electronics brands are switching to this no-heat application method.",
    date: "Apr 28, 2026",
    author: "Technical Team",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    readTime: "6 min read",
    slug: "uv-dtf-revolution-2026"
  },
  {
    title: "Eco-Friendly Packaging: Meeting FSC Standards in Global Markets",
    excerpt: "How QYPrints helps brands transition to sustainable packaging without compromising on structural integrity or premium aesthetics.",
    date: "Apr 15, 2026",
    author: "Compliance Dept",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
    readTime: "8 min read",
    slug: "fsc-packaging-standards"
  },
  {
    title: "The Science of Color Fidelity: Achieving E < 3 in Label Printing",
    excerpt: "Learn about our 100% in-house inspection process and the high-precision rotary presses that ensure consistent brand colors across billions of units.",
    date: "Mar 20, 2026",
    author: "Production Expert",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
    readTime: "5 min read",
    slug: "color-fidelity-label-printing"
  }
];

const BlogPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 bg-[#f8f9fa] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-[#003366] mb-6 text-center">Insights & Innovation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
            Exploring the latest trends in industrial labeling, material science, and sustainable packaging.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {blogPosts.map((post, index) => (
              <article key={index} className="grid md:grid-cols-2 gap-12 items-center group cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div>
                  <div className="flex items-center text-xs text-gray-400 mb-4 space-x-6 uppercase tracking-widest font-bold">
                    <span className="flex items-center"><Calendar size={14} className="mr-1 text-[#00AEEF]" /> {post.date}</span>
                    <span className="flex items-center"><User size={14} className="mr-1 text-[#00AEEF]" /> {post.author}</span>
                    <span className="flex items-center"><Clock size={14} className="mr-1 text-[#00AEEF]" /> {post.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#003366] mb-6 group-hover:text-[#00AEEF] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-[#003366] font-bold">
                    CONTINUE READING <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      
      <footer className="bg-[#003366] py-10 text-center text-white/40 text-sm">
        <p>© 2026 ShenZhen QiYao Tec Co., Ltd.</p>
      </footer>
    </main>
  );
};

export default BlogPage;
