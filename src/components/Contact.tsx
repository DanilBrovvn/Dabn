import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 font-medium mb-6">
              <Phone className="h-4 w-4" />
              <span>Контакты</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Давайте создадим магию вместе</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Свяжитесь со мной, чтобы обсудить детали вашего мероприятия и узнать о доступных датах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-indigo-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Свяжитесь со мной</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Телефон</h4>
                    <p className="text-gray-600">+7 (999) 781-90-56</p>
                    <p className="text-sm text-gray-500 mt-1">Доступен с 10:00 до 20:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Локация</h4>
                    <p className="text-gray-600">Тула, Тульская область</p>
                    <p className="text-gray-600">Москва и Московская область</p>
                    <p className="text-sm text-gray-500 mt-1">Возможны выезды в другие города</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Удаляем форму */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;