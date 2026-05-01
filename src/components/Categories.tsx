import React from 'react';

const categories = [
  {
    title: 'Custom Labels Sticker',
    image: 'https://sc02.alicdn.com/kf/A6d72833f063949618f0ef927bbb8c430S.png',
    link: 'https://qyprints.en.alibaba.com/productgrouplist-964138203/Roll_Label_Sticker.html',
    items: [
      'Product labels for bottles, jars, and boxes',
      'Shipping labels and barcode labels',
      'Food & beverage ingredient / nutrition labels',
      'Cosmetic and skincare bottle labels',
      'Electronics and appliance information labels',
      'Brand stickers and promotional stickers'
    ]
  },
  {
    title: 'Custom Card Boxes',
    image: 'https://sc02.alicdn.com/kf/Af2fa0d5754c94cfd98b6016ec7e2a4b0r.png',
    link: 'https://qyprints.en.alibaba.com/productgrouplist-963471046/BOX.html',
    items: [
      'Cosmetic and skincare packaging boxes',
      'Tea, coffee, and snack gift boxes',
      'Pharmaceutical and healthcare packaging',
      'Small electronics and accessories boxes',
      'Jewelry and watch gift boxes',
      'Retail shelf packaging for premium products'
    ]
  },
  {
    title: 'Custom Mailer Boxes',
    image: 'https://sc02.alicdn.com/kf/Aa3914954cc1e423aacf2953ccd3954aeL.png',
    link: 'https://qyprints.en.alibaba.com/productgrouplist-963471046/BOX.html',
    items: [
      'E-commerce shipping boxes for online orders',
      'Subscription box packaging',
      'Clothing and shoe shipping boxes',
      'Electronics and gadget shipping boxes',
      'Gift mailer boxes for brand campaigns',
      'Sample and trial kit packaging'
    ]
  },
  {
    title: 'Custom Paper Bags',
    image: 'https://sc02.alicdn.com/kf/A621b6a88104e40b38be8d02c4d331e9dF.png',
    link: 'https://qyprints.en.alibaba.com/productgrouplist-965981100/TOP.html',
    items: [
      'Retail shopping bags for stores and boutiques',
      'Gift bags for festivals and events',
      'Brand promotion and marketing bags',
      'Exhibition and trade show bags',
      'Bakery and cafe takeaway bags',
      'Clothing and shoe store carry bags'
    ]
  }
];

const Categories = () => {
  return (
    <section className="py-24 bg-[#f1f5f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, index) => (
            <a 
              key={index} 
              href={cat.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-[2rem] overflow-hidden border border-[#dbe6db] shadow-sm hover:shadow-xl transition-all group block"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] bg-[#e8eee8] p-6 relative overflow-hidden flex items-center justify-center">
                <div className="w-full h-full rounded-[1.8rem] overflow-hidden flex items-center justify-center bg-white/40 p-4">
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="max-w-[85%] max-h-[85%] w-auto h-auto object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mx-0.5"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-full mx-0.5"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-full mx-0.5"></div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl font-bold text-[#1a3a1a] tracking-tight">{cat.title}</h3>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-primary/30 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-primary/30 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-primary/30 rounded-full"></div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-500 text-sm leading-relaxed">
                      <span className="mr-3 text-primary/40 mt-1.5 flex-shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
