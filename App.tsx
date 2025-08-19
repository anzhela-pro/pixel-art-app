
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { GeneratorForm } from './components/GeneratorForm';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { ResultsGrid } from './components/ResultsGrid';
import { WelcomeMessage } from './components/WelcomeMessage';
import type { GifConcept } from './types';
import { generateGifConcepts } from './services/geminiService';

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>('');
  const [gifConcepts, setGifConcepts] = useState<GifConcept[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!theme.trim()) {
      setError('Please enter a theme for your GIF collection.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setGifConcepts([]);

    try {
      const concepts = await generateGifConcepts(theme);
      setGifConcepts(concepts);
    } catch (e) {
      console.error(e);
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(`Failed to generate GIF concepts. ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <main className="mt-8">
          <GeneratorForm
            theme={theme}
            setTheme={setTheme}
            onSubmit={handleGenerate}
            isLoading={isLoading}
          />
          <div className="mt-12">
            {isLoading && <Loader />}
            {error && <ErrorMessage message={error} />}
            {!isLoading && !error && gifConcepts.length > 0 && (
              <ResultsGrid concepts={gifConcepts} />
            )}
            {!isLoading && !error && gifConcepts.length === 0 && (
              <WelcomeMessage />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
