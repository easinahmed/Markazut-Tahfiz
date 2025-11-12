import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryItem {
  id: number;
  image: string;
  alt: string;
}

interface GalleryGridProps {
  title: string;
  subtitle: string;
  images: GalleryItem[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ title, subtitle, images }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-green-600  text-lg mb-2 flex items-center justify-center gap-2">
            <span>📚</span>
            <span className='underline underline-offset-8'>গ্যা লা রি</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 mt-3">
            {title}
          </h2>
          <p className="text-gray-600 text-base">{subtitle}</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl h-64 md:h-72"
              onClick={() => setSelectedImage(item)}
              style={{ borderRadius: "60px 60px 60px 0px" }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  🔍
                </div>
              </div>
            </div>
          ))}

          
          
        </div>
      </div>

      {/* Modal/Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full z-10 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
            />

            {/* Image Description */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-white text-lg font-semibold">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Example usage
export default function Gallery() {
  const galleryData: GalleryGridProps = {
    title: 'আমাদের ফটো গ্যালারি',
    subtitle: 'আমাদের স্মৃতিময় মুহূর্তগুলি এখানে দেখুন',
    images: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
        alt: 'ইভেন্ট ছবি ১',
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
        alt: 'কার্যক্রম ছবি ১',
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
        alt: 'পোর্ট্রেট ছবি',
      },
      {
        id: 4,
        image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&h=400&fit=crop',
        alt: 'দল ছবি ১',
      },
      {
        id: 5,
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
        alt: 'কাজের পরিবেশ',
      },
      {
        id: 6,
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
        alt: 'ইভেন্ট ছবি ২',
      },
      {
        id: 7,
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
        alt: 'কার্যক্রম ছবি ২',
      },
      {
        id: 8,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
        alt: 'দল ফটো',
      },
      {
        id: 9,
        image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&h=400&fit=crop',
        alt: 'গ্রুপ ছবি',
      },
    ],
  };

  return <GalleryGrid {...galleryData} />;
}