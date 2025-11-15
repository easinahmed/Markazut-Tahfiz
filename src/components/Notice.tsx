import { useState } from "react";

const Notice: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const newsItems = [
    'ফার্খীদের অসাধারণ পরীক্ষার ফলাফলের জন্য অভিনন্দন!',
    'আমাদের প্রতিষ্ঠান তাফজুলের শীর্ষ মাদ্রাসাগুলোর মধ্যে স্থান অর্জন করেছে',
    'আসুন সেমিনার ভর্তি নিবন্ধনের লোগো এখন পর্যন্ত সীমাহীন থাকবেন',
  ];

  return (
    <div className="bg-hover text-white py-3 relative overflow-hidden">
      <div className="container mx-auto px-4 flex items-center gap-4">
        {/* Notice Badge */}
        <div className="bg-button text-white px-4 py-2 rounded font-bold whitespace-nowrap shrink-0">
          লেটেস্ট নোটিশ
        </div>

        {/* Marquee Content */}
        <div className="flex-1 overflow-hidden relative">
          <div
            className={`flex gap-8 ${!isPaused ? 'animate-marquee' : ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...newsItems, ...newsItems].map((item, index) => (
              <div key={index} className="flex items-center gap-4 whitespace-nowrap">
                <span className="text-button">●</span>
                <span className="text-lg hover:scale-105 transition-all duration-500 cursor-pointer">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Notice