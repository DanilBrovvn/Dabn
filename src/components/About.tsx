import React from 'react';
import { Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-pink-100 dark:bg-pink-100 rounded-xl"></div>
              <img
                src="GW7s2wZ2Esk.jpg"
                alt="Игорь Чудаков выступает"
                className="relative z-10 rounded-xl shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-100/90 dark:bg-white/80 p-4 rounded-lg shadow-md z-20 backdrop-blur-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-700">
                  Более 3000 выступлений за денежку
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 dark:bg-pink-50 rounded-full text-pink-700 dark:text-pink-700 font-medium mb-6">
              <Star className="h-4 w-4" />
              <span>О себе</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Комедийный иллюзионист с опытом более 10 лет
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-200 mb-6">
              Привет! Я Игорь Чудаков, и я превращаю обычные мероприятия в
              незабываемые события с помощью магии и юмора. Мои выступления —
              это не просто фокусы, это интерактивное шоу, где каждый гость
              становится частью представления.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-200 mb-8">
              Я выступал на корпоративных мероприятиях крупнейших компаний
              России, частных вечеринках и фестивалях. Мой подход сочетает
              классические иллюзии с современным юмором, создавая уникальное
              шоу, которое запомнится надолго.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-pink-50 dark:bg-pink-300/10 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Корпоративы
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Идеальное развлечение для ваших сотрудников и клиентов
                </p>
              </div>
              <div className="bg-lavender-50 dark:bg-lavender-50/10 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Частные события
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Сделаю ваш праздник по-настоящему волшебным
                </p>
              </div>
              <div className="bg-mint-50 dark:bg-mint-50/10 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Свадьбы
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Удивительные моменты для особенного дня
                </p>
              </div>
              <div className="bg-peach-50 dark:bg-peach-50/10 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Фестивали в бане
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Масштабные иллюзии для больших аудиторий 3-10 человек
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;