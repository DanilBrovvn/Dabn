import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-200 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-pink-200 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6">
            <Sparkles className="h-12 w-12 text-indigo-600 mx-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Магия с юмором от <span className="text-indigo-600">Игоря Чудакова</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            Уникальные иллюзии и комедийные трюки для вашего мероприятия
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Заказать выступление
            </a>
            <a 
              href="#videos" 
              className="px-8 py-3 bg-white text-indigo-600 rounded-full font-medium border border-indigo-200 hover:border-indigo-600 transition-colors shadow-md hover:shadow-lg"
            >
              Посмотреть видео
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;