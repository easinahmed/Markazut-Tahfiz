import { ChevronRight, LucideChevronsRight, Mail, MapPin, Phone } from "lucide-react";

// Footer Component
const Footer: React.FC = () => {
  const year =new Date().getFullYear()
  return (
    <footer className="bg-[#78A083] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="w-30 h-30 mb-5 overflow-hidden">
              <img className="h-full" src="logo.jpg" alt="logo" />
            </div>
            <h3 className="text-2xl font-bold mb-4">যোগাযোগ</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                মিরপুর , ঢাকা, বাংলাদেশ
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} />
                +8801712-054763
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                nesarahmad763@gmail.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-alkatra font-bold mb-4">দ্রুত লিংক</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-hover hover:translate-x-2.5 transition-all duration-500 flex items-center "><ChevronRight /> হোম</a></li>
              <li><a href="#" className="hover:text-hover hover:translate-x-2.5 transition-all duration-500 flex items-center"><ChevronRight /> আমাদের সম্পর্কে</a></li>
              <li><a href="#" className="hover:text-hover hover:translate-x-2.5 transition-all duration-500 flex items-center"><ChevronRight /> ভর্তি</a></li>
              <li><a href="#" className="hover:text-hover hover:translate-x-2.5 transition-all duration-500 flex items-center"><ChevronRight /> যোগাযোগ</a></li>
            </ul> 
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">সময়সূচী</h3>
            <p>শনিবার - বৃহস্পতিবার</p>
            <p>সকাল ৮:০০ - বিকাল ৫:০০</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {year} মারকাজুত তাহফিজ । সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer