import React from 'react';
import { AssessmentSection as SectionType } from '../types/assessment';

interface Props {
  section: SectionType;
  value: string;
  onChange: (value: string) => void;
  result: string;
  showCitations: boolean;
}

export const AssessmentSection: React.FC<Props> = ({
  section,
  value,
  onChange,
  result,
  showCitations,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
      <div className="flex items-center mb-4">
        {section.icon}
        <h3 className="text-xl font-semibold ml-2 text-gray-800 dark:text-white">
          {section.title}
        </h3>
      </div>

      <div className="mb-4 flex-grow">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {section.question}
        </label>
        <input
          type={section.inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={section.placeholder}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#15ae75] focus:border-[#15ae75] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {result && (
        <div className="text-lg font-semibold text-[#15ae75] mb-4">
          {result}
        </div>
      )}

      {showCitations && (
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            {section.source}
          </h4>
          <ol className="text-sm text-gray-600 dark:text-gray-400 list-decimal list-inside space-y-1">
            {section.citations.map((citation, index) => (
              <li key={index}>
                <a
                  href={citation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#15ae75] hover:underline"
                >
                  {citation.text}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};