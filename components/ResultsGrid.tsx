
import React from 'react';
import type { GifConcept } from '../types';
import { ImageCard } from './ImageCard';

interface ResultsGridProps {
  concepts: GifConcept[];
}

export const ResultsGrid: React.FC<ResultsGridProps> = ({ concepts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {concepts.map((concept, index) => (
        <ImageCard key={index} concept={concept} />
      ))}
    </div>
  );
};
