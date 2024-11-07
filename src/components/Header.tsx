import React from 'react';
import { Sun, Moon, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-[#15ae75]" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#15ae75] to-emerald-600 bg-clip-text text-transparent">
              Touchdata
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-[#15ae75]" />
              ) : (
                <Moon className="h-5 w-5 text-[#15ae75]" />
              )}
            </button>
            <a
              href="https://www.touchdata.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-[#15ae75] to-emerald-600 text-white rounded-full 
                hover:shadow-lg hover:shadow-green-500/30 transition-all duration-200 font-medium"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}