import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="bg-red-900/50 border border-red-500 rounded-lg p-6 max-w-md mx-auto">
        <div className="flex items-center space-x-3">
          <AlertCircle className="h-6 w-6 text-red-400 flex-shrink-0" />
          <p className="text-red-200">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
