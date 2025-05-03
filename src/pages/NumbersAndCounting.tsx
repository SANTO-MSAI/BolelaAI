import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSpeechSynthesis } from 'react-speech-kit';
import { Button } from '@/components/ui/button';

type Phrase = {
  phrase: string;
  translation: string;
};

const greetings: Phrase[] = [
  { phrase: 'Sawubona', translation: 'Hello' },
  { phrase: 'Unjani?', translation: 'How are you?' },
  { phrase: 'Ngiyaphila', translation: 'I am fine' },
  { phrase: 'Ngiyabonga', translation: 'Thank you' },
  { phrase: 'Sala kahle', translation: 'Stay well' },
];

const NumbersAndCounting = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showNext, setShowNext] = useState(false);

  const { speak } = useSpeechSynthesis();
  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  const current = greetings[currentIndex];

  const handleSubmit = () => {
    const normalizedInput = (userInput || transcript).trim().toLowerCase();
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
    resetTranscript();
    setFeedback('');
    setShowNext(false);
  };

  const speakZulu = () => speak({ text: current.phrase, lang: 'zu-ZA' });
  const speakEnglish = () => speak({ text: current.translation, lang: 'en-US' });

  const finished = currentIndex >= greetings.length;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow space-y-4">
      {!finished ? (
        <>
          <h2 className="text-2xl font-bold text-mzansi-purple">Translate this greeting:</h2>
          <p className="text-lg italic">🗣️ {current.phrase}</p>

          <div className="space-x-2">
            <Button onClick={speakZulu}>🔊 Hear Zulu</Button>
            <Button onClick={speakEnglish} variant="outline">🔊 Hear English</Button>
          </div>

          <input
            value={userInput || transcript}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type or speak your answer..."
            className="w-full border p-2 rounded"
          />

          <div className="space-x-2 mt-2">
            <Button onClick={handleSubmit}>✅ Submit</Button>
            <Button onClick={SpeechRecognition.startListening} disabled={listening} variant="outline">
              🎤 {listening ? 'Listening...' : 'Speak'}
            </Button>
          </div>

          {feedback && <p className="mt-2">{feedback}</p>}

          {showNext && (
            <Button onClick={handleNext} className="mt-2" variant="secondary">
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

export default NumbersAndCounting;
