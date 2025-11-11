// Hero Component
const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[600px] bg-linear-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('logo.jpg')"
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            আন্তর্জাতিক হিফজ শিক্ষা প্রতিষ্ঠান এখন আপনার হাতের কাছে!
          </h1>
          
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-100">
            
                                        মারকাজুত তাহফিজ ইন্টারন্যাশনাল মাদ্রাসা বিশ্বের অন্যতম শীর্ষস্থানীয় হিফজুল কুরআন প্রতিষ্ঠান, যা আন্তর্জাতিক পর্যায়ে পবিত্র কুরআনের শিক্ষা ও প্রতিযোগিতায় অসাধারণ সাফল্য অর্জন করেছে। সম্প্রতি, এই মাদ্রাসার একজন ছাত্র পবিত্র কুরআন প্রতিযোগিতায় ১২৩টি দেশের মধ্যে প্রথম স্থান অর্জন করে বিশ্বমঞ্চে বাংলাদেশের নাম উজ্জ্বল করেছেন। এ সফলতা মারকাজুত তাহফিজ ইন্টারন্যাশনালের প্রতিযোগিতামূলক দক্ষতা, মানসম্পন্ন শিক্ষা ও আল্লাহর অশেষ অনুগ্রহের প্রতিফলন।
                                    
          </p>

          <button className="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-flex items-center gap-2">
            আমাদের সম্পর্কে
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -z-1 bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="white" opacity="0.1"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero