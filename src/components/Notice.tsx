import { useState } from "react";

const Notice: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const newsItems = [
    'ফার্খীদের অসাধারণ পরীক্ষার ফলাফলের জন্য অভিনন্দন!',
    'আমাদের প্রতিষ্ঠান তাফজুলের শীর্ষ মাদ্রাসাগুলোর মধ্যে স্থান অর্জন করেছে',
    'আসুন সেমিনার ভর্তি নিবন্ধনের লোগো এখন পর্যন্ত সীমাহীন থাকবেন',
  ];

  return (
    <div className="bg-[#344955] text-white py-3 relative overflow-hidden">
      <div className="container mx-auto px-4 flex items-center gap-4">
        {/* Notice Badge */}
        <div className="bg-[#78A083] text-white px-4 py-2 rounded font-bold whitespace-nowrap shrink-0">
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
                <span className="text-[#78A083]">●</span>
                <span className="text-lg hover:scale-105 transition-all duration-500 cursor-pointer">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setIsPaused(true)}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded transition-colors"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded transition-colors"
            aria-label={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setIsPaused(true)}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded transition-colors"
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
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