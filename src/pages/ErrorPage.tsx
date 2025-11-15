import React, { useState, useEffect } from 'react';
import { AlertCircle, Home, MessageSquare, ArrowRight, Search } from 'lucide-react';

interface ErrorMessage {
  title: string;
  description: string;
  emoji: string;
}

interface SuggestedPage {
  name: string;
  path: string;
  icon: string;
}

interface ErrorMessages {
  [key: string]: ErrorMessage;
}

const ErrorPage: React.FC = () => {
  const [errorCode, setErrorCode] = useState<string>('404');
  const [animatedNumber, setAnimatedNumber] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    let counter: number = 0;
    const interval = setInterval(() => {
      if (counter < parseInt(errorCode)) {
        counter += Math.ceil(parseInt(errorCode) / 20);
        setAnimatedNumber(Math.min(counter, parseInt(errorCode)));
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [errorCode]);

  const errorMessages: ErrorMessages = {
    '404': {
      title: 'পৃষ্ঠা খুঁজে পাওয়া যাচ্ছে না',
      description: 'আমরা দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা আর বিদ্যমান নেই বা সরানো হয়েছে।',
      emoji: '😕'
    },
    '500': {
      title: 'সার্ভার ত্রুটি',
      description: 'আমাদের সার্ভারে একটি সমস্যা দেখা দিয়েছে। অনুগ্রহ করে কিছুক্ষণ পরে আবার চেষ্টা করুন।',
      emoji: '⚙️'
    },
    '403': {
      title: 'অনুমতি অস্বীকৃত',
      description: 'আপনার কাছে এই পৃষ্ঠা অ্যাক্সেস করার অনুমতি নেই।',
      emoji: '🔒'
    }
  };

  const current: ErrorMessage = errorMessages[errorCode] || errorMessages['404'];

  const suggestedPages: SuggestedPage[] = [
    { name: 'হোম', path: '/', icon: '🏠' },
    { name: 'বিভাগ সমূহ', path: '/departments', icon: '📚' },
    { name: 'আমাদের সম্পর্কে', path: '/about', icon: 'ℹ️' },
    { name: 'যোগাযোগ', path: '/contact', icon: '📞' }
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Add search logic here
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-20">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl w-full">
        {/* Error Code Display */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <div className="relative mb-8">
              <div className="text-9xl md:text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-pulse">
                {animatedNumber}
              </div>
              <div className="absolute inset-0 text-9xl md:text-[150px] font-black text-green-500 opacity-20 blur-2xl">
                {animatedNumber}
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="text-center mb-12">
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {current.title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {current.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a 
            href="/" 
            className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/50"
          >
            <Home size={20} className="mr-2" />
            হোমে ফিরে যান
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition" />
          </a>
          <a 
            href="/" 
            onClick={handleContactClick} 
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <MessageSquare size={20} className="mr-2" />
            আমাদের সাথে যোগাযোগ করুন
          </a>
        </div>

        {/* Search Box */}
        <div className="mb-16">
          <form onSubmit={handleSearchSubmit}>
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg p-6">
              <label className="flex items-center gap-3 cursor-pointer group">
                <Search className="text-green-400 group-hover:text-green-300 transition" size={24} />
                <input
                  type="text"
                  placeholder="এখানে খুঁজুন..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-lg"
                />
              </label>
            </div>
          </form>
        </div>

        {/* Suggested Pages */}
        <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">আপনি এখানে যেতে চাইতে পারেন:</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {suggestedPages.map((page: SuggestedPage, index: number) => (
              <a
                key={index}
                href={page.path}
                className="group block"
              >
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 hover:from-green-500 hover:to-green-600 rounded-lg p-6 text-center transition-all transform hover:scale-110 cursor-pointer">
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">
                    {page.icon}
                  </div>
                  <p className="text-white font-semibold group-hover:text-white transition">
                    {page.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">এখনও সাহায্যের প্রয়োজন?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-300">
            <a 
              href="tel:+8801712054763" 
              className="hover:text-green-400 transition flex items-center justify-center gap-2"
            >
              <span>📞</span> +880 1712-054763
            </a>
            <a 
              href="mailto:nesarahmd763@gmail.com" 
              className="hover:text-green-400 transition flex items-center justify-center gap-2"
            >
              <span>✉️</span> nesarahmd763@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="fixed top-20 right-10 opacity-10">
        <AlertCircle size={100} className="text-green-500 animate-bounce" />
      </div>
      <div className="fixed bottom-20 left-10 opacity-10">
        <AlertCircle size={80} className="text-blue-500 animate-pulse" />
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;