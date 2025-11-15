import  { useState } from 'react';
import { ChevronRight, BookOpen, Users } from 'lucide-react';

interface Department {
    id: number;
    name: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    details: string;
}

const Departments: React.FC = () => {
  const [hoveredDept, setHoveredDept] = useState<number | null>(null);

  const departments: Department[] = [
    {
      id: 1,
      name: 'কিতাব বিভাগ',
      
      description: 'উচ্চ মানের ইসলামিক শিক্ষা প্রদান করা হয়',
      icon: '📚',
      color: 'from-blue-500 to-blue-600',
      details: 'এই বিভাগে কোরআন, হাদিস এবং ইসলামিক জ্ঞানের উপর গভীর শিক্ষা প্রদান করা হয়।'
    },
    {
      id: 2,
      name: 'মক্তব',
      
      description: 'প্রাথমিক স্তরের শিক্ষার্থীদের জন্য',
      icon: '🏫',
      color: 'from-green-500 to-green-600',
      details: 'শুরুআতী বয়সের শিশুদের কোরআন এবং মৌলিক ইসলামিক শিক্ষা প্রদান করা হয়।'
    },
    {
      id: 3,
      name: 'মক্তব (বালিকা)',
      
      description: 'বালিকা শিক্ষার্থীদের জন্য আলাদা বিভাগ',
      icon: '👧',
      color: 'from-pink-500 to-pink-600',
      details: 'বালিকা শিক্ষার্থীদের জন্য বিশেষভাবে পরিচালিত মক্তব বিভাগ।'
    },
    {
      id: 4,
      name: 'হিফয',
     
      description: 'কোরআন সংরক্ষণকারী প্রোগ্রাম',
      icon: '✨',
      color: 'from-purple-500 to-purple-600',
      details: 'কোরআন মুখস্থ করার জন্য বিশেষায়িত প্রশিক্ষণ প্রদান করা হয়।'
    },
    {
      id: 5,
      name: 'হিফয (বালিকা)',
      
      description: 'বালিকা হিফয শিক্ষার্থীদের জন্য',
      icon: '💎',
      color: 'from-rose-500 to-rose-600',
      details: 'বালিকা শিক্ষার্থীদের জন্য কোরআন হিফয প্রোগ্রাম।'
    },
    {
      id: 6,
      name: 'জেনারেল (১ম - ৫ম)',
      
      description: 'সাধারণ শিক্ষা কর্মসূচি',
      icon: '🎓',
      color: 'from-amber-500 to-amber-600',
      details: 'প্রথম থেকে পঞ্চম শ্রেণীর সাধারণ শিক্ষা কর্মসূচি পরিচালিত হয়।'
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-linear-to-r from-green-700 to-green-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">আমাদের বিভাগসমূহ</h1>
          <p className="text-lg text-green-100">মারকাজুত তাহফীজ ইউটিবোয়ানানাল মাদরাসা</p>
          <p className="text-green-100 mt-2">উন্নত শিক্ষা ও ইসলামিক জ্ঞানের কেন্দ্র</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Intro Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">আমাদের শিক্ষামূলক বিভাগ</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            আমরা শিক্ষার্থীদের বিভিন্ন স্তর এবং আগ্রহ অনুযায়ী বিশেষায়িত শিক্ষা প্রদান করি।
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {departments.map((dept) => (
            <div
              key={dept.id}
              onMouseEnter={() => setHoveredDept(dept.id)}
              onMouseLeave={() => setHoveredDept(null)}
              className="transform transition duration-300 hover:scale-105 "
            >
              <div className={`bg-linear-to-br ${dept.color} rounded-xl shadow-lg hover:shadow-xl transition-all p-8 text-white h-full cursor-pointer`}>
                <div className="text-5xl mb-4">{dept.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{dept.name}</h3>
                <p className="text-green-50 mb-4 text-sm">{dept.description}</p>
                
                {hoveredDept === dept.id && (
                  <div className="mt-4 pt-4 border-t border-green-200">
                    <p className="text-sm text-green-50">{dept.details}</p>
                    <div className="flex items-center mt-3 text-green-100">
                      <ChevronRight size={18} className="mr-2" />
                      <span className="text-sm font-semibold">আরও জানুন</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">আমাদের প্রতিষ্ঠানের পরিসংখ্যান</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-6 mb-3">
                <p className="text-3xl font-bold text-blue-600">৫০+</p>
              </div>
              <p className="text-slate-600 font-semibold">অভিজ্ঞ শিক্ষক</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-lg p-6 mb-3">
                <p className="text-3xl font-bold text-green-600">১০০০+</p>
              </div>
              <p className="text-slate-600 font-semibold">শিক্ষার্থী</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-lg p-6 mb-3">
                <p className="text-3xl font-bold text-purple-600">৬+</p>
              </div>
              <p className="text-slate-600 font-semibold">বিভাগ</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 rounded-lg p-6 mb-3">
                <p className="text-3xl font-bold text-amber-600">২৫+</p>
              </div>
              <p className="text-slate-600 font-semibold">বছরের অভিজ্ঞতা</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <BookOpen className="mr-3 text-green-600" size={28} />
              আমাদের শেখার পদ্ধতি
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">✓</span>
                <span>ঐতিহ্যবাহী ও আধুনিক শিক্ষা পদ্ধতির সমন্বয়</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">✓</span>
                <span>ব্যক্তিগত মনোযোগ এবং পরিচর্যা</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">✓</span>
                <span>নিয়মিত মূল্যায়ন এবং অগ্রগতি ট্র্যাকিং</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">✓</span>
                <span>নৈতিক ও আধ্যাত্মিক উন্নয়নে ফোকাস</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Users className="mr-3 text-purple-600" size={28} />
              প্রশিক্ষণ কর্মসূচি
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">✓</span>
                <span>কোরআন তিলাওয়াত এবং তাজবিড়</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">✓</span>
                <span>ইসলামিক অধ্যয়ন এবং হাদিস</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">✓</span>
                <span>আরবি ভাষা শিক্ষা</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">✓</span>
                <span>সাধারণ একাডেমিক বিষয়</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-hover text-white py-12 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">আপনার সন্তানকে ভর্তি করান</h2>
          <p className="text-lg text-green-100 mb-8">আমাদের যেকোনো বিভাগে এখনই যোগাযোগ করুন</p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            যোগাযোগ করুন
          </button>
        </div>
      </div>
    </div>
  );
}

export default Departments