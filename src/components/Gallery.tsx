import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: '/3.jpg',
      caption: 'Интерактивное шоу с участием зрителей',
    },
    {
      url: '/2.jpg',
      caption: 'Огненная иллюзия на детском празднике',
    },
    {
      url: '/4.jpg',
      caption: 'Левитация на корпоративном мероприятии',
    },
    {
      url: '/Aj8YcNWVBoo.jpg',
      caption: 'Левитация на корпоративном мероприятии',
    },
    {
      url: '/bce9wqTWW0k.jpg',
      caption: 'Левитация на корпоративном мероприятии',
    },
    {
      url: '/kZb_G0II5L8.jpg',
      caption: 'Левитация на корпоративном мероприятии',
    },
  ];

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 font-medium mb-6">
            <Camera className="h-4 w-4" />
            <span>Галерея</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Моменты с выступлений
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Взгляните на фотографии с моих выступлений и почувствуйте атмосферу
            удивления и веселья
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => openLightbox(image.url)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-indigo-300 transition-colors"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Увеличенное изображение"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
