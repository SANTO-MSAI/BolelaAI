
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Headphones, List, Mic, Globe, Users } from 'lucide-react';

const Lessons = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('zulu');
  
  const languages = [
    { id: 'zulu', name: 'Zulu' },
    { id: 'xhosa', name: 'Xhosa' },
    { id: 'afrikaans', name: 'Afrikaans' },
    { id: 'sotho', name: 'Sotho' },
    { id: 'tswana', name: 'Tswana' },
    { id: 'venda', name: 'Venda' },
  ];
  
  const lessonTypes = [
    { 
      id: 'basics', 
      name: 'Basics', 
      icon: <Book className="h-5 w-5" />,
      description: 'Learn fundamental vocabulary and grammar'
    },
    { 
      id: 'conversation', 
      name: 'Conversation', 
      icon: <Users className="h-5 w-5" />,
      description: 'Practice everyday dialogues and phrases'
    },
    { 
      id: 'vocabulary', 
      name: 'Vocabulary', 
      icon: <List className="h-5 w-5" />,
      description: 'Build your word bank in specific contexts'
    },
    { 
      id: 'listening', 
      name: 'Listening', 
      icon: <Headphones className="h-5 w-5" />,
      description: 'Train your ear with native speaker audio'
    },
    { 
      id: 'speaking', 
      name: 'Speaking', 
      icon: <Mic className="h-5 w-5" />,
      description: 'Practice pronunciation with speech recognition'
    }
  ];
  
  const lessonModules = {
    'zulu': [
      { id: 1, type: 'basics', title: 'Greetings & Introductions', level: 'Beginner', lessons: 5, completed: 3 },
      { id: 2, type: 'basics', title: 'Numbers & Counting', level: 'Beginner', lessons: 4, completed: 2 },
      { id: 3, type: 'conversation', title: 'At the Market', level: 'Beginner', lessons: 3, completed: 0 },
      { id: 4, type: 'conversation', title: 'Asking for Directions', level: 'Intermediate', lessons: 4, completed: 0 },
      { id: 5, type: 'vocabulary', title: 'Family Members', level: 'Beginner', lessons: 3, completed: 3 },
      { id: 6, type: 'vocabulary', title: 'Food & Dining', level: 'Intermediate', lessons: 5, completed: 2 },
      { id: 7, type: 'listening', title: 'Weather Expressions', level: 'Beginner', lessons: 3, completed: 1 },
      { id: 8, type: 'listening', title: 'Daily News', level: 'Advanced', lessons: 4, completed: 0 },
      { id: 9, type: 'speaking', title: 'Pronunciation Basics', level: 'Beginner', lessons: 5, completed: 2 },
      { id: 10, type: 'speaking', title: 'Tongue Twisters', level: 'Intermediate', lessons: 3, completed: 0 },
    ],
    'xhosa': [
      { id: 1, type: 'basics', title: 'Greetings & Introductions', level: 'Beginner', lessons: 5, completed: 0 },
      { id: 2, type: 'basics', title: 'Numbers & Counting', level: 'Beginner', lessons: 4, completed: 0 },
      { id: 3, type: 'conversation', title: 'At the Shop', level: 'Beginner', lessons: 3, completed: 0 },
      { id: 4, type: 'vocabulary', title: 'Animals & Nature', level: 'Beginner', lessons: 4, completed: 0 },
      { id: 5, type: 'listening', title: 'Traditional Stories', level: 'Intermediate', lessons: 3, completed: 0 },
      { id: 6, type: 'speaking', title: 'Click Sounds Practice', level: 'Beginner', lessons: 5, completed: 0 },
    ],
    // Default structure for other languages
    'default': [
      { id: 1, type: 'basics', title: 'Greetings & Introductions', level: 'Beginner', lessons: 5, completed: 0 },
      { id: 2, type: 'basics', title: 'Numbers & Counting', level: 'Beginner', lessons: 4, completed: 0 },
      { id: 3, type: 'conversation', title: 'Everyday Phrases', level: 'Beginner', lessons: 3, completed: 0 },
      { id: 4, type: 'vocabulary', title: 'Essential Words', level: 'Beginner', lessons: 4, completed: 0 },
      { id: 5, type: 'listening', title: 'Basic Comprehension', level: 'Beginner', lessons: 3, completed: 0 },
      { id: 6, type: 'speaking', title: 'Pronunciation Practice', level: 'Beginner', lessons: 5, completed: 0 },
    ]
  };
  
  const getCurrentLessons = () => {
    if (selectedLanguage === 'zulu') return lessonModules.zulu;
    if (selectedLanguage === 'xhosa') return lessonModules.xhosa;
    return lessonModules.default;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Lesson Explorer</h1>
            <p className="text-mzansi-dark/70">Choose a language and start learning</p>
          </div>
          <Link to="/practice" className="mt-4 md:mt-0">
            <Button className="flex items-center gap-2 bg-mzansi-purple hover:bg-mzansi-purple/90">
              <Mic size={18} />
              <span>Go to Practice</span>
            </Button>
          </Link>
        </div>
        
        <div className="mb-8">
          <div className="bg-white rounded-xl border border-mzansi-light-purple p-4 overflow-x-auto">
            <div className="flex space-x-3 min-w-max">
              {languages.map((language) => (
                <button
                  key={language.id}
                  onClick={() => setSelectedLanguage(language.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedLanguage === language.id
                    ? 'bg-gradient-to-r from-mzansi-purple to-mzansi-blue text-white'
                    : 'bg-mzansi-light-purple/50 text-mzansi-dark hover:bg-mzansi-light-purple'
                  }`}
                >
                  {language.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="basics">
          <TabsList className="w-full justify-start overflow-x-auto mb-6 bg-mzansi-light-purple/50">
            {lessonTypes.map((type) => (
              <TabsTrigger key={type.id} value={type.id} className="flex items-center gap-1.5">
                {type.icon}
                {type.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {lessonTypes.map((type) => (
            <TabsContent key={type.id} value={type.id}>
              <div className="mb-4">
                <h2 className="text-xl font-semibold">{type.name}</h2>
                <p className="text-mzansi-dark/70">{type.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getCurrentLessons()
                  .filter(lesson => lesson.type === type.id)
                  .map((module) => (
                    <Card key={module.id} className="border-mzansi-light-purple overflow-hidden card-hover">
                      <div className={`h-2 ${module.completed === module.lessons 
                        ? 'bg-green-500' 
                        : module.completed > 0 
                        ? 'bg-mzansi-purple' 
                        : 'bg-mzansi-light-purple'}`}
                      ></div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle>{module.title}</CardTitle>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            module.level === 'Beginner'
                            ? 'bg-mzansi-light-purple text-mzansi-purple'
                            : module.level === 'Intermediate'
                            ? 'bg-mzansi-light-blue text-mzansi-blue'
                            : 'bg-mzansi-yellow text-amber-700'
                          }`}>
                            {module.level}
                          </span>
                        </div>
                        <CardDescription>
                          {module.completed} of {module.lessons} lessons completed
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="w-full bg-mzansi-light-purple/50 h-2 rounded-full">
                          <div 
                            className="bg-mzansi-purple h-2 rounded-full" 
                            style={{ width: `${(module.completed / module.lessons) * 100}%` }}
                          ></div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link 
                          to={`/lessons/${selectedLanguage}/${type.id}/${module.id}`}
                          className="w-full"
                        >
                          <Button 
                            className="w-full"
                            variant={module.completed > 0 && module.completed < module.lessons ? "default" : "outline"}
                          >
                            {module.completed === 0 ? 'Start Lesson' : 
                             module.completed === module.lessons ? 'Review Lesson' : 'Continue Lesson'}
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default Lessons;
