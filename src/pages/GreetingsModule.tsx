import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

type Phrase = {
  phrase: string;
  translation: string;
};

// Function to fetch the phrases from the AI API

const greetings: Phrase[] = [
  { phrase: 'Sawubona', translation: 'Hello' },
  { phrase: 'Unjani?', translation: 'How are you?' },
  { phrase: 'Ngiyaphila', translation: 'I am fine' },
  { phrase: 'Ngiyabonga', translation: 'Thank you' },
  { phrase: 'Sala kahle', translation: 'Stay well' }
];

const GreetingsModule = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showNext, setShowNext] = useState(false);

  const current = greetings[currentIndex];

  const handleSubmit = () => {
    const normalizedInput = userInput.trim().toLowerCase();
    const expected = current.translation.toLowerCase();

    if (normalizedInput === expected) {
      setFeedback('✅ Correct!');
      setShowNext(true);
    } else {
      setFeedback(`❌ Try again. Hint: it means "${current.translation}"`);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setUserInput('');
    setFeedback('');
    setShowNext(false);
  };

  const finished = currentIndex >= greetings.length;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow">
      {!finished ? (
        <>
          <h2 className="text-2xl font-bold text-mzansi-purple mb-4">Translate this greeting:</h2>
          <p className="text-lg italic mb-4">🗣️ {current.phrase}</p>

          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your answer in English..."
            className="w-full border p-2 rounded mb-4"
          />

          <Button onClick={handleSubmit} className="mb-2">
            Submit
          </Button>

          {feedback && <p className="mb-4">{feedback}</p>}

          {showNext && (
            <Button onClick={handleNext} variant="outline">
              Next
            </Button>
          )}
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600">🎉 You’ve completed the Greetings Module!</h2>
          <p className="mt-2">Great work!</p>
        </div>
      )}
    </div>
  );
};

export default GreetingsModule;
