import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Skip } from '../types/skip';

interface SelectionSummaryProps {
  selectedSkip: Skip | null;
  onContinue: () => void;
}

const SelectionSummary: React.FC<SelectionSummaryProps> = ({ selectedSkip, onContinue }) => {
  if (!selectedSkip) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-2xl z-50 animate-slide-up"
      role="region"
      aria-label="Selected skip summary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-600 dark:text-green-400\" size={24} aria-hidden="true" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {selectedSkip.size} Yard Skip Selected
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  £{selectedSkip.price}/{selectedSkip.period} • {selectedSkip.period} hire
                </p>
              </div>
            </div>
          </div>
          
          <button
            onClick={onContinue}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            aria-label={`Continue with ${selectedSkip.size} yard skip for £${selectedSkip.price}`}
          >
            Continue
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionSummary;