
import React from 'react';

const SparkleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block text-purple-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L11 12l2.293 2.293a1 1 0 01-1.414 1.414L10 13.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 12 6.293 9.707a1 1 0 010-1.414L8.586 6l-2.293-2.293a1 1 0 011.414-1.414L10 4.586l2.293-2.293a1 1 0 011.414 0z" />
    </svg>
);


export const WelcomeMessage: React.FC = () => {
  return (
    <div className="text-center text-gray-500 max-w-3xl mx-auto py-10">
      <h2 className="text-2xl font-semibold text-gray-300 mb-4">
        <SparkleIcon />
        Ready to Create?
      </h2>
      <p className="mb-2">
        Enter a theme or a creative idea in the box above to get started. The AI will brainstorm a series of GIF concepts and generate a keyframe image for each one.
      </p>
      <p className="text-sm">
        Try themes like "Cyberpunk food truck", "Animals having a picnic", or "Magic potions brewing". The more descriptive, the better!
      </p>
    </div>
  );
};
