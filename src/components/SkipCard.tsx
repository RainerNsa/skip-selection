import React from 'react';
import { Check, Package } from 'lucide-react';
import { Skip } from '../types/skip';
import LazyImage from './LazyImage';

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (skipId: string) => void;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect(skip.id);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(skip.id);
    }
  };

  return (
    <article
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={isSelected}
      aria-label={`Select ${skip.size} yard skip for £${skip.price} per ${skip.period}`}
      className={`
        relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
        ${isSelected 
          ? 'border-blue-600 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 shadow-blue-200 dark:shadow-blue-900/50' 
          : 'border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
        }
      `}
    >
      {isSelected && (
        <div className="absolute -top-3 -right-3 bg-blue-600 text-white rounded-full p-2 shadow-lg\" aria-hidden="true">
          <Check size={16} />
        </div>
      )}
      
      <div className="p-6">
        {/* Skip Image */}
        <div className="mb-4 rounded-xl overflow-hidden">
          <LazyImage
            src={`https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop`}
            alt={`${skip.size} yard skip container`}
            className="w-full h-32 object-cover"
          />
        </div>

        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
              <Package size={24} aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {skip.size} Yard Skip
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Standard hire</p>
            </div>
          </div>
          <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
            {skip.period} hire
          </span>
        </div>

        <div className="mb-4">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
            £{skip.price}
            <span className="text-lg text-gray-500 dark:text-gray-400 font-normal">/{skip.period}</span>
          </div>
          {skip.capacity && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="sr-only">Capacity: </span>
              {skip.capacity}
            </p>
          )}
        </div>

        {skip.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {skip.description}
          </p>
        )}

        <button
          className={`
            w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800
            ${isSelected
              ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }
          `}
          aria-label={isSelected ? `${skip.size} yard skip selected` : `Select ${skip.size} yard skip`}
        >
          {isSelected ? 'Selected' : 'Select Skip'}
        </button>
      </div>
    </article>
  );
};

export default SkipCard;