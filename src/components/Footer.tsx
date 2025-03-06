import React from 'react';
import { Sparkles, Instagram } from 'lucide-react';

// SVG-иконка ВКонтакте
const VkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-6 w-6 fill-current text-gray-400 hover:text-white transition-colors"
    aria-label="VKontakte"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 14.19c-.39.36-.9.54-1.53.54-.63 0-1.14-.18-1.53-.54-.39-.36-.59-.84-.59-1.44v-.54c0-.6.2-1.08.59-1.44.39-.36.9-.54 1.53-.54.63 0 1.14.18 1.53.54.39.36.59.84.59 1.44v.54c0 .6-.2 1.08-.59 1.44zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
  </svg>
);

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
              <VkIcon /> {/* Используем SVG-иконку ВКонтакте */}
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