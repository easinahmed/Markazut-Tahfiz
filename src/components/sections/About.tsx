import React from 'react';
import { Phone, ArrowRight, School, NotebookPen, MonitorCog, BookOpenText } from 'lucide-react';

interface StepCard {
  number: string;
  title: string;
  icon: React.ReactNode;
}

const StepCard: React.FC<StepCard> = ({ number, title, icon }) => (
  <div className="bg-white group  p-6 border-2 border-dashed hover:shadow-xl hover:scale-105 transition-all duration-500 border-gray-300 cursor-pointer flex flex-col items-center justify-center min-h-[140px] shadow-sm " style={{borderRadius: "40px 40px 40px 0px"}}>
    <div className="w-16 h-16 group-hover:rotate-y-360  group-hover:scale-110 bg-button rounded-full  transition-all duration-500 hover:shadow-lg  flex items-center justify-center mb-3 text-white text-2xl">
      {icon}
    </div>
    <span className="text-button text-3xl font-bold mb-2">{number}</span>
    <p className="text-gray-800 text-center font-semibold ">{title}</p>
  </div>
);

const ImageCircle: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="w-full h-full rounded-full border-dashed p-1 border-3 border-button  overflow-hidden bg-gray-200 flex items-center justify-center">
    <img src={src} alt={alt} className="w-full rounded-full h-full object-cover" />
  </div>
);

const ImageSquare: React.FC<{ src: string; alt: string; style?: React.CSSProperties }> = ({ src, alt, style }) => (
  <div style={{borderRadius: "60px 60px 0px 60px", ...style}} className="w-full p-1 h-full border-dashed border-3 border-button overflow-hidden bg-gray-200 flex items-center justify-center">
    <img style={{borderRadius: "60px 60px 0px 60px", ...style}} src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

export default function About(): React.ReactElement {
  const steps: StepCard[] = [
    {
      number: '01',
      title: 'আধুনিক ক্যাম্পাস',
      icon: <School size={30}/>,
    },
    {
      number: '02',
      title: 'অভিজ্ঞ ওস্তাদ',
      icon: <NotebookPen size={30}  />,
    },
    {
      number: '03',
      title: 'দক্ষ ব্যবস্থাপনা',
      icon: <MonitorCog size={30} />,
    },
    {
      number: '04',
      title: 'আধুনিক পাঠ্যক্রম',
      icon: <BookOpenText size={30} />,
    },
  ];

  return (
    <div className="w-full   bg-linear-to-b from-gray-50 to-white py-12 px-4">
      <div className='container'>
            <div className="max-w-7xl mx-auto">
        {/* Steps Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 mb-20">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Images */}
          <div className="lg:col-span-1 space-y-6">
            <div className="w-full aspect-square">
              <ImageSquare
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                alt="Islamic teaching moment"
              />
            </div>
            <div className="w-full aspect-square">
              <ImageCircle
                src="https://images.unsplash.com/photo-1507539332150-34daeb58d290?w=300&h=300&fit=crop"
                alt="Religious gathering celebration"
              />
            </div>
          </div>

          {/* Center Images */}
          <div className="lg:col-span-1 space-y-6">
            <div className="w-full aspect-square">
              <ImageCircle
                src="https://images.unsplash.com/photo-1507539332150-34daeb58d290?w=300&h=300&fit=crop"
                alt="Wedding celebration"
              />
            </div>
            <div className="w-full aspect-square">
              <ImageSquare
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=300&fit=crop"
                alt="Group gathering"
                style={{borderRadius: "0px 60px 60px 60px"}}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-1 flex flex-col justify-start">
            <div className="mb-4 flex items-center gap-2 text-green-700">
              <span className="text-sm font-semibold">🎯 আমাদের সেবা</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              আমাদের প্রতিষ্ঠান আপনার সন্তানের হিফজ শিক্ষাগত মান ও জ্ঞান বিকাশে প্রতিশ্রুতিবদ্ধ
            </h2>

            <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-8">
              সারকাউন্ট্রি তারফিজ ঈসলামনামাল রাম্মা আমাদের সুলালে হিফজ শিক্ষার মানোয়ান ও জ্ঞান বিকাশে সবন্ধতর্পক। আমরা কুরআন শিক্ষা ও মুখ করানোর নয়, বরং দক্ষতা প্রদান করি আমরা ও আমাদেরকে উন্নয়নের জন্য প্রতেক দেওয়া দেওয়া হবি আমাদের সেবন একটি সফা তৈরি তৈরি ব্যাধান বিষয়ে গেড় উত্তর, উন্নয়ায়উল।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-button hover:bg-hover cursor-pointer text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors">
                <span>বিস্তারিত</span>
                <ArrowRight size={18} />
              </button>
              <button className="bg-hover hover:bg-button cursor-pointer text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors">
                <Phone size={18} />
                <span>ফোন করুন</span>
              </button>
            </div>

            {/* Phone Number */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-xs font-medium mb-2">যোগাযোগ</p>
              <p className="text-2xl font-bold text-green-700">+8801712-054763</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

