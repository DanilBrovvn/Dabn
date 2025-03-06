import React from 'react';
import { Sparkles, Instagram } from 'lucide-react';
import vkIcon from '/icons8-vk-120.jpg'; // Импортируем локальное изображение

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 text-2xl font-bold text-white mb-6 md:mb-0">
            <Sparkles className="h-6 w-6 text-indigo-400" />
            <span>Игорь Чудаков</span>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/chudakov.magic/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="https://vk.com/i.chudakov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="VKontakte"
            >
              {/* Используем локальное изображение */}
              <img
                src={vkIcon} // Ссылка на локальное изображение
                alt="VKontakte"
                className="h-6 w-6" // Размеры изображения
              />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Игорь Чудаков. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;