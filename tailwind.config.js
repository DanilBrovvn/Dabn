/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fdf2f8', // Нежно-розовый
          900: '#831843', // Темно-розовый
        },
        lavender: {
          50: '#f5f3ff', // Лавандовый
          900: '#4c1d95', // Темно-лавандовый
        },
        mint: {
          50: '#f0fdfa', // Мятный
          900: '#134e4a', // Темно-мятный
        },
        peach: {
          50: '#fff7ed', // Персиковый
          900: '#7c2d12', // Темно-персиковый
        },
      },
    },
  },
  plugins: [],
};