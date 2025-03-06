import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

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
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                    <p className="text-sm text-gray-500 mt-1">Доступен с 10:00 до 20:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@igorchudakov.ru</p>
                    <p className="text-sm text-gray-500 mt-1">Отвечаю в течение 24 часов</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Локация</h4>
                    <p className="text-gray-600">Москва и Московская область</p>
                    <p className="text-sm text-gray-500 mt-1">Возможны выезды в другие города</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Иван Иванов"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="ivan@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Расскажите о вашем мероприятии и пожеланиях"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;