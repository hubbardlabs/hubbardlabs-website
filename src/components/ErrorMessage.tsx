import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  retryAction?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, retryAction }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="bg-red-900/20 text-red-500 px-6 py-4 rounded-lg flex items-center mb-4">
        <AlertTriangle className="w-5 h-5 mr-2" />
        <span>{message}</span>
      </div>
      {retryAction && (
        <button
          onClick={retryAction}
          className="flex items-center text-primary hover:text-primary-dark transition-colors"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;