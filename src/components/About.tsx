import React from 'react';
import { Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-indigo-100 rounded-xl"></div>
              <img
                src="BratForoGlavnoe.jpg"
                alt="Игорь Чудаков выступает"
                className="relative z-10 rounded-xl shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-100 p-4 rounded-lg shadow-md z-20">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Более 500 успешных выступлений
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-700 font-medium mb-6">
              <Star className="h-4 w-4" />
              <span>О себе</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Комедийный иллюзионист с опытом более 10 лет
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Привет! Я Игорь Чудаков, и я превращаю обычные мероприятия в
              незабываемые события с помощью магии и юмора. Мои выступления —
              это не просто фокусы, это интерактивное шоу, где каждый гость
              становится частью представления.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Я выступал на корпоративных мероприятиях крупнейших компаний
              России, частных вечеринках и фестивалях. Мой подход сочетает
              классические иллюзии с современным юмором, создавая уникальное
              шоу, которое запомнится надолго.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Корпоративы
                </h3>
                <p className="text-gray-600">
                  Идеальное развлечение для ваших сотрудников и клиентов
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Частные события
                </h3>
                <p className="text-gray-600">
                  Сделаю ваш праздник по-настоящему волшебным
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Свадьбы
                </h3>
                <p className="text-gray-600">
                  Удивительные моменты для особенного дня
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Фестивали
                </h3>
                <p className="text-gray-600">
                  Масштабные иллюзии для больших аудиторий
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
