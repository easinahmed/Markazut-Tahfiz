import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  image: string;
  rating: number;
  ratingScore: number;
}

interface TestimonialSliderProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  title,
  subtitle,
  testimonials,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handle manual navigation
  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-green-600 text-lg mb-3 flex items-center justify-center gap-2">
            <span>👥</span>
            <span className="font-semibold">প্রশংসা পত্র</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">{subtitle}</p>

          {/* Decorative line */}
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="overflow-hidden"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4 md:px-0"
                >
                  <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg relative max-w-2xl mx-auto">
                    {/* Rating Badge */}
                    <div className="absolute top-6 right-6 bg-button text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                      {testimonial.ratingScore}
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-base leading-relaxed mb-8 min-h-24">
                      {testimonial.text}
                    </p>

                    {/* Divider */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex-1 h-1 bg-gradient-to-r from-button to-transparent rounded-full"></div>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-4 border-dashed border-button object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                        <p className="text-button text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute flex items-center justify-center cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-16 bg-button hover:bg-green-700 text-white p-3 w-10 h-10 rounded-full transition-colors z-10"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute flex items-center justify-center cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-16 bg-button hover:bg-green-700 text-white p-3 w-10 h-10 rounded-full transition-colors z-10"
          >
            →
          </button>

          {/* Dots/Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-green-600 w-8'
                    : 'bg-gray-300 w-3'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Example usage
export default function Testimonial() {
  const sliderData: TestimonialSliderProps = {
    title: 'আমাদের অভিভাবকদের আমাদের সম্পর্কে যা বলেন',
    subtitle:
      'আমাদের মূল্যবান অভিভাবকদের মতামত এবং অভিজ্ঞতা জানুন',
    testimonials: [
      {
        id: 1,
        name: 'আতাউর রহমান',
        location: 'গাজীপুর',
        text: 'মারকাজুত তারফিজ উইনোয়ানানাল মাদ্রাসায় আমার সন্তানকে ভর্তি করে আমরা অত্যন্ত সন্তুষ্ট। এখানে তার ইসলামী শিক্ষার পাশাপাশি আধুনিক বিষয়েও শক্ত ভিত্তি তৈরি হচ্ছে। শিক্ষকমণ্ডলীর যত্ন এবং শিক্ষার মান অসাধারণ।',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
        rating: 5,
        ratingScore: 99,
      },
      {
        id: 2,
        name: 'রাহুলান হোসাইন',
        location: 'গাজীপুর',
        text: 'মারকাজুত তারফিজ ইউনোয়ানানাল মাদ্রাসায় আমার সন্তান পড়াশোনা করে গর্বিত। এখানে আমাদের সন্তানদের জীবন পরিবর্তনকারী শিক্ষা প্রদান করা হয়। নৈতিক মূল্যবোধ শেখানো এবং সামাজিক দায়বদ্ধতা তৈরি করা হয়। আমাদের ছেলেমেয়েদের ভবিষ্যৎ উজ্জ্বল করতে আপনারা কাজ করছেন।',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop',
        rating: 5,
        ratingScore: 99,
      },
      {
        id: 3,
        name: 'আবু বক্কর',
        location: 'গাজীপুর',
        text: 'মারকাজুত তারফিজ মাদ্রাসায় আমার সন্তানকে ভর্তি করা আমার সবচেয়ে সঠিক সিদ্ধান্ত। এখানকার শিক্ষা পদ্ধতি অনন্য এবং আধুনিক। শিক্ষকরা প্রতিটি শিক্ষার্থীকে গুরুত্ব দেয় এবং তাদের প্রতিভা বিকাশে সহায়তা করে। আমরা সত্যিই কৃতজ্ঞ।',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop',
        rating: 5,
        ratingScore: 99,
      },
      {
        id: 4,
        name: 'ফারহান আহমেদ',
        location: 'চট্টগ্রাম',
        text: 'এই প্রতিষ্ঠানের শিক্ষার গুণমান সত্যিই প্রশংসনীয়। আমার সন্তান প্রতিদিন নতুন জিনিস শিখছে এবং আত্মবিশ্বাসী হয়ে উঠছে। অভিভাবক-শিক্ষক সম্পর্কও অত্যন্ত ভালো এবং স্বচ্ছ। এরকম একটি শিক্ষা প্রতিষ্ঠান পাওয়া সত্যিই ভাগ্যের ব্যাপার।',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
        rating: 5,
        ratingScore: 99,
      },
      {
        id: 5,
        name: 'করিম হোসেন',
        location: 'ঢাকা',
        text: 'মারকাজুত তারফিজ মাদ্রাসা আমার প্রত্যাশা ছাড়িয়ে গেছে। এখানকার পরিবেশ শান্তিপূর্ণ এবং শিক্ষাবান্ধব। শিক্ষার্থীরা শুধু পড়াশোনাই নয়, নৈতিকতা এবং দায়িত্বশীলতাও শিখছে। আমি সব অভিভাবকদের এই প্রতিষ্ঠানে সন্তান ভর্তি করতে পরামর্শ দিচ্ছি।',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop',
        rating: 5,
        ratingScore: 99,
      },
    ],
  };

  return <TestimonialSlider {...sliderData} />;
}