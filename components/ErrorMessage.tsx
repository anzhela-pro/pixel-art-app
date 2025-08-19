
import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="max-w-2xl mx-auto my-8 p-4 bg-red-900/50 border border-red-500 text-red-300 rounded-lg text-center">
      <p className="font-semibold">An Error Occurred</p>
      <p className="text-sm mt-1">{message}</p>
    </div>
  );
};
