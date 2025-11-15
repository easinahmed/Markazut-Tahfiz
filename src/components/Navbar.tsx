import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

// Types
interface NavItem {
  label: string;
  href: string;
}


// Navigation Component
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'হোম', href: '/' },
    { label: 'আমাদের সম্পর্কে', href: '/about' },
    { label: 'নোটিশ', href: '/notice' },
    { label: 'বিভাগ সমূহ', href: '/departments' },
    { label: 'ভর্তি', href: '/admission' },
    { label: 'লগইন', href: '/login' },
    { label: 'যোগাযোগ', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <img src="logo.jpg" alt="markazut tahfiz logo" />
              </div>
              <h3 className="font-bold text-4xl font-arabic">المركز</h3>
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-gray-700 relative afterNav hover:text-hover font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <button className=" bg-[#78A083] hover:bg-hover cursor-pointer text-white px-6 py-2 rounded-full transition-colors">
              আবেদন করুন
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-green-600 font-medium"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-4 bg-[#78A083] hover:bg-hover text-white px-6 py-2 rounded-lg transition-colors">
              আবেদন করুন
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar