
import React from 'react';
import type { GifConcept } from '../types';

interface ImageCardProps {
  concept: GifConcept;
}

export const ImageCard: React.FC<ImageCardProps> = ({ concept }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-xl border border-gray-700/50 transform transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/20">
      <img
        src={concept.imageUrl}
        alt={concept.prompt}
        className="w-full h-full object-cover aspect-square"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-center text-gray-200 text-sm">{concept.prompt}</p>
      </div>
       <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
         <p className="text-white text-xs truncate">{concept.prompt}</p>
       </div>
    </div>
  );
};
