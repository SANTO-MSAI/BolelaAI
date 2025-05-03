import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import GreetingsModule from "./GreetingsModule";
import NumbersAndCounting from "./NumbersAndCounting";
import CommonPhrases from "./CommonPhrases";
import Questions from "./Questions";
import Responses from "./Responses";

const BasicLessons = () => {
  const { language, typeId, moduleId } = useParams();
  console.log("Module ID from URL:", moduleId);

  const modules = [
    { id: "greetings", title: "Greetings", description: "Learn how to greet people." },
    { id: "numbers", title: "Numbers and counting", description: "How to introduce yourself." },
    { id: "phrases", title: "Common Phrases", description: "Everyday useful phrases." },
    { id: "questions", title: "Questions", description: "Asking and answering questions." },
    { id: "responses", title: "Responses", description: "How to respond politely." }
  ];

  const renderModule = () => {
    switch (moduleId) {
      case "greetings":
        return <GreetingsModule />;
      case "numbers":
        return <NumbersAndCounting />;
      case "phrases":
        return <CommonPhrases />;
      case "questions":
        return <Questions />;
      case "responses":
        return <Responses />;
      default:
        return <p className="text-red-600">Module not found.</p>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-mzansi-black mb-4">
        Basic Lessons in {language?.toUpperCase()}
      </h1>
      <p className="text-muted-foreground mb-6">Lesson Type: {typeId}</p>

      {/* 🧠 Show module content if one is selected */}
      {moduleId ? (
        <div className="bg-white p-6 rounded-xl shadow-md">{renderModule()}</div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-4">
            {modules.map((module) => (
              <Link
                key={module.id}
                to={`/basiclessons/${language}/${typeId}/${module.id}`}
                className="block"
              >
                <div className="border rounded-2xl p-4 hover:shadow-md transition bg-white">
                  <h2 className="text-xl font-semibold text-mzansi-purple">{module.title}</h2>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                  <button className="mt-4 w-full bg-mzansi-purple text-white px-4 py-2 rounded-xl">Start Module</button>
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
        </>
      )}
    </div>
  );
};

export default BasicLessons;
