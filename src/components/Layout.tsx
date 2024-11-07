import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}