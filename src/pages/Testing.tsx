import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const zulu_lesson = {
  title: 'Zulu Lesson 1: Introduction',
  levels: [
    {
      level: 'Level 1: Greetings & Basics',
      content: [
        { english: 'Hello (singular)', zulu: 'Sawubona' },
        { english: 'Hello (plural)', zulu: 'Sanibonani' },
        { english: 'How are you?', zulu: 'Unjani?' },
        { english: "I'm fine", zulu: 'Ngikhona' },
        { english: 'Thank you', zulu: 'Ngiyabonga' },
        { english: 'Yes', zulu: 'Yebo' },
        { english: 'No', zulu: 'Cha' },
      ],
    },
    {
      level: 'Level 2: Common Verbs',
      content: [
        { english: 'Eat', zulu: 'Ukudla' },
        { english: 'Go', zulu: 'Ukuhamba' },
        { english: 'Speak', zulu: 'Ukukhuluma' },
        { english: 'Learn', zulu: 'Ukufunda' },
        { example: 'Ngiyadla', meaning: 'I am eating' },
        { example: 'Ngiyahamba', meaning: 'I am going' },
        { example: 'Ngikhuluma', meaning: 'I speak' },
        { example: 'Ngifunda', meaning: 'I learn/study' },
      ],
    },
    {
      level: 'Level 3: Simple Sentences',
      content: [
        { english: 'I am learning Zulu', zulu: 'Ngifunda isiZulu' },
        { english: 'What is your name?', zulu: 'Ubani igama lakho?' },
        { english: 'My name is [name]', zulu: 'Igama lami ngu[name]' },
        { english: 'Where are you from?', zulu: 'Uvelaphi?' },
        { english: 'I am from South Africa', zulu: 'Ngivela eNingizimu Afrika' },
      ],
    },
    {
      level: 'Level 4: Noun Classes (Intro)',
      note: 'Zulu nouns are grouped into classes that affect verb and adjective agreement.',
      content: [
        { class: 1, noun: 'umuntu', meaning: 'person', prefix: 'u-' },
        { class: 2, noun: 'abantu', meaning: 'people', prefix: 'ba-' },
        { class: 7, noun: 'isihlalo', meaning: 'chair', prefix: 'isi-' },
        { class: 8, noun: 'izihlalo', meaning: 'chairs', prefix: 'izi-' },
        { example_singular: 'Umuntu uyahamba', meaning: 'The person is going' },
        { example_plural: 'Abantu bayahamba', meaning: 'The people are going' },
      ],
    },
  ],
};

const LessonPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-6 text-mzansi-purple">{zulu_lesson.title}</h1>
        {zulu_lesson.levels.map((level, index) => (
          <Card key={index} className="mb-8 border-mzansi-light-purple shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">{level.level}</CardTitle>
              {level.note && <CardDescription>{level.note}</CardDescription>}
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {level.content.map((item, idx) => (
                  <li key={idx} className="border-b py-2">
                    {item.english && item.zulu && (
                      <div className="flex justify-between">
                        <span className="text-mzansi-dark font-medium">{item.english}</span>
                        <span className="text-mzansi-purple">{item.zulu}</span>
                      </div>
                    )}
                    {item.example && item.meaning && (
                      <div className="flex justify-between">
                        <span className="text-mzansi-dark italic">{item.example}</span>
                        <span className="text-mzansi-purple">{item.meaning}</span>
                      </div>
                    )}
                    {item.example_singular && (
                      <div className="flex justify-between">
                        <span className="text-mzansi-dark italic">{item.example_singular}</span>
                        <span className="text-mzansi-purple">{item.meaning}</span>
                      </div>
                    )}
                    {item.example_plural && (
                      <div className="flex justify-between">
                        <span className="text-mzansi-dark italic">{item.example_plural}</span>
                        <span className="text-mzansi-purple">{item.meaning}</span>
                      </div>
                    )}
                    {item.noun && (
                      <div className="text-sm text-mzansi-dark">
                        <strong>Class {item.class}:</strong> <span className="font-medium">{item.noun}</span> — {item.meaning} (<span className="text-mzansi-purple">Prefix: {item.prefix}</span>)
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default LessonPage;