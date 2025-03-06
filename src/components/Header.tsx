import React from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-indigo-600">
          <Sparkles className="h-6 w-6" />
          <span>Игорь Чудаков</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">О себе</a>
          <a href="#gallery" className="text-gray-700 hover:text-indigo-600 transition-colors">Галерея</a>
          <a href="#videos" className="text-gray-700 hover:text-indigo-600 transition-colors">Видео</a>
          <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition-colors">Отзывы</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Контакты</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col gap-4">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              О себе
            </a>
            <a 
              href="#gallery" 
              className="text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              Галерея
            </a>
            <a 
              href="#videos" 
              className="text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              Видео
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              Отзывы
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              Контакты
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;