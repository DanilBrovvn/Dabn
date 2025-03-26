import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Все мероприятия' },
    { id: 'corporate', name: 'Корпоративные' },
    { id: 'family_children', name: 'Семейные и детские' },
  ];

  const images = [
    {
      url: '/3.jpg',
      caption: '',
      category: 'corporate'
    },
    {
      url: '/Corp (4).jpg',
      caption: '',
      category: 'corporate'
    },
    {
      url: '/Corp (5).jpg',
      caption: '',
      category: 'corporate'
    },
    {
      url: '/Corp (6).jpg',
      caption: '',
      category: 'corporate'
    },
    {
      url: '/Corp (7).jpg',
      caption: '',
      category: 'corporate'
    },
    {
      url: '/Corp (8).jpg',
      caption: '',
      category: 'corporate'
    },
    {
      url: '/2.jpg',
      caption: '',
      category: 'corporate'
    },
    {
      url: '/4.jpg',
      caption: '',
      category: 'corporate'
    },
    {
      url: '/Aj8YcNWVBoo.jpg',
      caption: '',
      category: 'family_children'
    },
    {
      url: '/MzGoWKYyQt8.jpg',
      caption: '',
      category: 'corporate'
    },
    {
      url: '/Det1.jpg',
      caption: '',
      category: 'family_children'
    },
    {
      url: '/det2.jpg',
      caption: '',
      category: 'family_children'
    },
    {
      url: '/det3.jpg',
      caption: '',
      category: 'family_children'
    },
    {
      url: '/Sem1.jpg',
      caption: '',
      category: 'family_children'
    },
    {
      url: '/Sem4.jpg',
      caption: '',
      category: 'corporate'
    },
    {
      url: '/kZb_G0II5L8.jpg',
      caption: '',
      category: 'family_children'
    },
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => 
        activeCategory === 'family_children' 
          ? image.category === 'family_children' 
          : image.category === activeCategory
      );

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-indigo-50 dark:bg-indigo-950 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-700 dark:text-indigo-300 font-medium mb-6">
            <Camera className="h-4 w-4" />
            <span>Галерея</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Моменты с выступлений
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Взгляните на фотографии с моих выступлений и почувствуйте атмосферу удивления и веселья.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
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
            alt="Увеличенное изображение из галереи"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;