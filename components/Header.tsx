
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        AI GIF Collection Generator
      </h1>
      <p className="mt-3 text-lg text-gray-400">
        Turn your ideas into a vibrant collection of GIF keyframe concepts.
      </p>
    </header>
  );
};
