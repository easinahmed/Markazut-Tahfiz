import { Mail, MapPin, Phone } from "lucide-react";

// Header Component
const Header: React.FC = () => {
  return (
    <div className="bg-green-700 text-white py-3 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center ">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          
          <span>স্বাগতম! মারকাজুত তাহফিজ ইন্টারন্যাশনাল মাদ্রাসা </span>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>মিরপুর ১০, ঢাকা, বাংলাদেশ </span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>nesarahmad763@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+8801712-054763</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header
