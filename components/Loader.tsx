
import React from 'react';

const loadingMessages = [
  "Warming up the AI's imagination...",
  "Sketching out some concepts...",
  "Mixing digital paints...",
  "Consulting the muses of motion...",
  "Generating visual brilliance...",
  "Almost there, polishing the pixels..."
];

export const Loader: React.FC = () => {
    const [message, setMessage] = React.useState(loadingMessages[0]);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setMessage(prevMessage => {
                const currentIndex = loadingMessages.indexOf(prevMessage);
                const nextIndex = (currentIndex + 1) % loadingMessages.length;
                return loadingMessages[nextIndex];
            });
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);


  return (
    <div className="flex flex-col items-center justify-center text-center text-gray-400 space-y-4 py-16">
       <svg className="w-16 h-16 text-purple-500 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
         viewBox="0 0 24 24">
         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
         <path className="opacity-75" fill="currentColor"
           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
         </path>
       </svg>
      <p className="text-lg font-medium">{message}</p>
      <p className="text-sm">This can take a moment, especially for complex ideas.</p>
    </div>
  );
};
