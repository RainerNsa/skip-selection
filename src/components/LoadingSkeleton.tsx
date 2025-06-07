import React from 'react';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse" role="status" aria-label="Loading skip options">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
          {/* Image skeleton */}
          <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-xl mb-4"></div>
          
          <div className="flex justify-between items-start mb-4">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-32"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20"></div>
          </div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-3"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-6"></div>
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl w-full"></div>
        </div>
      ))}
      <span className="sr-only">Loading skip options...</span>
    </div>
  );
};

export default LoadingSkeleton;