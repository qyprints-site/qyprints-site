import React from 'react';
import { Mail, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-sm font-bold text-[#2D5A27] uppercase tracking-widest mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-[#1a1a1a] mb-8 uppercase">Get a Professional Solution Within 24 Hours</h3>
            <p className="text-gray-600 text-lg mb-12">
              Our technical engineers are ready to assist you with material selection, design optimization, and cost-effective printing solutions.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-[#f0f7ff] p-3 rounded-sm mr-4 text-[#2D5A27]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a1a1a] uppercase text-sm tracking-widest">Email Inquiries</h4>
                  <a href="mailto:sales01@qyprints.com" className="text-[#2D5A27] hover:underline text-lg font-bold">sales01@qyprints.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#f0f7ff] p-3 rounded-sm mr-4 text-[#2D5A27]">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a1a1a] uppercase text-sm tracking-widest">WhatsApp Support</h4>
                  <a href="https://wa.me/8619129955180" target="_blank" rel="noopener noreferrer" className="text-[#2D5A27] hover:underline text-lg font-bold">+86 19129955180</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#f0f7ff] p-3 rounded-sm mr-4 text-[#2D5A27]">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a1a1a] uppercase text-sm tracking-widest">Response Time</h4>
                  <p className="text-gray-600">Average response within 5 minutes during business hours.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-gray-50 p-10 rounded-sm border border-gray-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#1a1a1a] mb-2 uppercase tracking-widest">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 focus:border-[#2D5A27] outline-none transition-colors rounded-none" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1a1a1a] mb-2 uppercase tracking-widest">Company</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 focus:border-[#2D5A27] outline-none transition-colors rounded-none" placeholder="Company Name" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#1a1a1a] mb-2 uppercase tracking-widest">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-200 focus:border-[#2D5A27] outline-none transition-colors rounded-none" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#1a1a1a] mb-2 uppercase tracking-widest">Message</label>
                <textarea className="w-full px-4 py-3 border border-gray-200 focus:border-[#2D5A27] outline-none transition-colors h-32 rounded-none" placeholder="Tell us about your project requirements..."></textarea>
              </div>
              <button type="submit" className="w-full bg-[#2D5A27] text-white py-4 font-bold hover:bg-[#1f401b] transition-colors uppercase tracking-widest">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
