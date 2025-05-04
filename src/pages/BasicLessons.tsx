import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const BasicLessons = () => {
  const { language, typeId } = useParams();

  // Fake modules
  const modules = [
    { id: "/greetings", title: "Greetings", description: "Learn how to greet people." },
    { id: "/numbers", title: "Numbers and counting", description: "How to introduce yourself." },
    { id: "/phrases", title: "Common Phrases", description: "Everyday useful phrases." },
    { id: "/questions", title: "Questions", description: "Asking and answering questions." },
    { id: "/responses", title: "Responses", description: "How to respond politely." }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-mzansi-black mb-4">
        Basic Lessons in {language?.toUpperCase()}
      </h1>
      <p className="text-muted-foreground mb-6">Lesson Type: {typeId}</p>

      <div className="grid md:grid-cols-2 gap-4">

        {/* Means: “For every module in the list, render a styled clickable card that 
        links to that specific module’s page.” */}
        {modules.map((module) => (
          <Link
            key={module.id}
            to={`/basiclessons/${language}/${typeId}/${module.id}`}
            className="block"
          >
            <div className="border rounded-2xl p-4 hover:shadow-md transition bg-white">
              <h2 className="text-xl font-semibold text-mzansi-purple">
                {module.title}
              </h2>
              <p className="text-sm text-muted-foreground">{module.description}</p>
              <Link to={module.id} className="mt-4 md:mt-0">
              <Button className="mt-4 w-full">Start Module</Button>
              </Link>
              
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Link to="/">
          <Button className="bg-mzansi-purple hover:bg-mzansi-purple/90">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BasicLessons;
