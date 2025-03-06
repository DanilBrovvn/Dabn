import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Алексей Петров",
      position: "Директор по маркетингу, Яндекс",
      text: "Игорь выступал на нашем корпоративе, и это было потрясающе! Сочетание иллюзий и юмора создало неповторимую атмосферу. Все сотрудники были в восторге и до сих пор обсуждают его трюки.",
      rating: 5
    },
    {
      name: "Елена Соколова",
      position: "Организатор свадеб",
      text: "Уже третий раз приглашаем Игоря на свадьбы наших клиентов. Каждый раз он создает волшебную атмосферу и заставляет гостей смеяться. Настоящий профессионал своего дела!",
      rating: 5
    },
    {
      name: "Дмитрий Иванов",
      position: "Генеральный директор, ТехноПром",
      text: "Игорь выступал на открытии нашего нового офиса. Его представление было элегантным, смешным и удивительным одновременно. Идеальное сочетание для бизнес-мероприятия высокого уровня.",
      rating: 5
    },
    {
      name: "Мария Кузнецова",
      position: "Частный клиент",
      text: "Пригласила Игоря на день рождения мужа. Это был лучший подарок! Все гости были поражены его мастерством и чувством юмора. Обязательно пригласим снова!",
      rating: 5
    },
    {
      name: "Сергей Николаев",
      position: "Ресторан «Метрополь»",
      text: "Игорь регулярно выступает в нашем ресторане на специальных вечерах. Гости всегда в восторге, многие возвращаются специально, чтобы снова увидеть его шоу. Настоящий магнит для публики!",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 font-medium mb-6">
            <Star className="h-4 w-4" />
            <span>Отзывы</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Что говорят клиенты</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Отзывы от людей, которые уже испытали магию и юмор на своих мероприятиях
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Desktop Testimonials */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile Testimonials Carousel */}
          <div className="md:hidden relative">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonials[currentIndex].text}"</p>
              <div>
                <h4 className="font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600 text-sm">{testimonials[currentIndex].position}</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;