import React from 'react';
import { Zap, Mail, HelpCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* Company Logo and Name */}
          <div className="flex items-center space-x-2 order-1 sm:order-1">
            <Zap className="h-6 w-6 text-[#15ae75]" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Touchdata Inc.
            </span>
          </div>

          {/* Contact and Support Links */}
          <div className="flex items-center space-x-6 order-2 sm:order-2">
            <a
              href="https://www.touchdata.ai/contact1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-[#15ae75] dark:hover:text-[#15ae75] transition-colors duration-200"
            >
              <Mail className="h-5 w-5" />
              <span>Contact</span>
            </a>
            <a
              href="mailto:support@touchdata.ai"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-[#15ae75] dark:hover:text-[#15ae75] transition-colors duration-200"
            >
              <HelpCircle className="h-5 w-5" />
              <span>Support</span>
            </a>
          </div>

          {/* Copyright Text */}
          <p className="text-gray-500 dark:text-gray-400 order-3 sm:order-3">
            © {new Date().getFullYear()} Touchdata AI
          </p>
        </div>
      </div>
    </footer>
  );
}