import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8 text-center max-w-md mx-auto\" role="alert">
      <div className="flex justify-center mb-4">
        <div className="bg-red-100 dark:bg-red-900/50 p-3 rounded-full">
          <AlertCircle className="text-red-600 dark:text-red-400\" size={32} aria-hidden="true" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-red-900 dark:text-red-200 mb-2">Unable to Load Skips</h3>
      <p className="text-red-700 dark:text-red-300 mb-6">{message}</p>
      <button
        onClick={onRetry}
        className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 transition-colors duration-200 flex items-center gap-2 mx-auto focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        aria-label="Retry loading skip information"
      >
        <RefreshCw size={18} aria-hidden="true" />
        Try Again
      </button>
    </div>
  );
};

export default ErrorMessage;