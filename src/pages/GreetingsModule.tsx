import React from 'react';
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

const GreetingsModule = () => {
  const { speak } = useSpeechSynthesis();

  const speakZulu = (text: string) => speak({ text, lang: 'zu-ZA' });
  const speakEnglish = (text: string) => speak({ text, lang: 'en-US' });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow space-y-6">
      <h2 className="text-3xl font-bold text-mzansi-purple text-center">
        🗣️ Zulu Greetings Lesson
      </h2>
      <p className="text-center text-gray-700">
        Below are some common Zulu greetings with their English translations. Click the buttons to hear each phrase spoken aloud.
      </p>

      {greetings.map((item, index) => (
        <div
          key={index}
          className="border rounded-xl p-4 shadow-sm hover:shadow-md transition space-y-2"
        >
          <p className="text-xl font-semibold italic text-mzansi-purple">{item.phrase}</p>
          <p className="text-gray-700">Translation: <strong>{item.translation}</strong></p>

          <div className="space-x-2">
            <Button onClick={() => speakZulu(item.phrase)}>🔊 Hear Zulu</Button>
            <Button onClick={() => speakEnglish(item.translation)} variant="outline">🔊 Hear English</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GreetingsModule;
