import React from 'react';

interface TestimonialCardProps {
  image: string;
  name: string;
  title: string;
  subtitle: string;
  arabic: string;
  bengaliGreeting: string;
  testimonialText: string[];
  rating: number;
}

const Speech: React.FC<TestimonialCardProps> = ({
  image,
  name,
  title,
  subtitle,
  arabic,
  bengaliGreeting,
  testimonialText,
  rating,
}) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-green-600 text-lg mb-2 flex items-center justify-center gap-2">
            <span>📚</span>
            <span className='underline underline-offset-8'>বাণী</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800">
            প্রতিষ্ঠাতা ও প্রিন্সিপালের এর <span className="text-green-600">বাণী</span>
          </h1>
        </div>

        {/* Card Section */}
        <div className="border-4 border-green-600 rounded-3xl bg-white p-8 md:p-12 relative">
          {/* Rating Badge */}
          <div style={{ borderRadius: "20px 20px 20px 0px" }} className="absolute top-6 right-6 bg-green-600 text-white  w-12 h-12 flex items-center justify-center font-bold text-lg">
            {rating}
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Section - Image and Info */}
            <div className="flex flex-col items-center md:w-1/4 md:items-start">
              {/* Profile Image */}
              <div className="mb-6">
                <img
                  src={image}
                  alt={name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-dashed border-gray-300 object-cover"
                />
              </div>

              {/* Name and Title */}
              <div className="text-center md:text-left">
                <h2 className="text-lg font-bold text-gray-800 mb-1">{name}</h2>
                <p className="text-green-600 text-sm font-semibold mb-2">{title}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{subtitle}</p>
              </div>

              {/* Arabic Text */}
              <p className="text-gray-500 text-sm mt-4 text-right">{arabic}</p>
            </div>

            {/* Right Section - Testimonial */}
            <div className="md:w-3/4">
              {/* Greeting */}
              <p className="text-green-600 text-base  font-semibold mb-4">{bengaliGreeting}</p>

              {/* Testimonial Text */}
              <div className="space-y-4 text-gray-700 text leading-relaxed">
                {testimonialText.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const testimonialData: TestimonialCardProps = {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    name: 'শায়েখ নেজার আহমেদ আন নাহিরী',
    title: 'প্রতিষ্ঠাতা পরিচালক',
    subtitle: 'মারকাজুত তারফিজ উইনোয়ানানাল মাদ্রাসা',
    arabic: 'بسم الله الرحمن الرحيم',
    bengaliGreeting: 'আলাহামদুলিল্লাহ',
    testimonialText: [
      'মারকাজুত তারফিজ উইনোয়ানানাল মাদ্রাসা প্রতিষ্ঠার মাধ্যে আমরা এমন উদ্দেশ্য নিয়ে কাজ করছি যাতে প্রতিটি শিক্ষার্থী ইসলামী জ্ঞান, নৈতিকতা এবং আধুনিক শিক্ষার সমন্বয় লাভ করে (তোলার নথ সুমান হয়াছে)।',
      'আমাদের লক্ষ্য হলো কেমন পরিবর্তনশীল প্রজেক্ট ও চ্যারিটিক সুবায়ারের উপজন সৃষ্টি গড়ে তোলা। আমরা চাই, আমাদের শিক্ষার্থীরা কুরআন বুক ও আধুনিক জ্ঞান নিয়ে এগিয়ে যাতে তারা নিজেরা সফল মানুষ হোক।',
      'দোয়া ও সহযোগিতা কামনা করি, যেন আল্লাহ আমাদের এই মহৎ উদ্দেশ্য বাস্তবায়নের তারিফে দান করেন।',
    ],
    rating: 99,
  };

  return <Speech {...testimonialData} />;
}