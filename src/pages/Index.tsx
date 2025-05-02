
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Layout from '@/components/layout/Layout';
import { Book, Headphones, Mic, Translate, Volume } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-mzansi-light-purple/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Learn South African Languages with <span className="gradient-text">TalkMzansi</span>
            </h1>
            <p className="text-lg md:text-xl text-mzansi-dark/80 mb-8">
              Discover the beauty of South Africa's official languages through interactive, AI-powered lessons 
              designed to make language learning fun and effective.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button className="btn-primary w-full sm:w-auto text-lg">Get Started Free</Button>
              </Link>
              <Link to="/lessons">
                <Button variant="outline" className="border-mzansi-purple text-mzansi-purple hover:bg-mzansi-light-purple w-full sm:w-auto text-lg">
                  Explore Lessons
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-mzansi-light-purple animate-pulse-slow">
              <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
                {['Zulu', 'Xhosa', 'Afrikaans', 'Sotho', 'Tswana', 'Venda', 'Tsonga', 'Swati', 'Ndebele'].map((language) => (
                  <span
                    key={language}
                    className="px-3 py-1 rounded-full bg-gradient-to-r from-mzansi-purple/10 to-mzansi-blue/10 text-mzansi-dark"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How TalkMzansi Works</h2>
            <p className="text-lg text-mzansi-dark/70 max-w-2xl mx-auto">
              Our AI-powered platform makes learning South African languages intuitive and engaging
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Book className="h-8 w-8 text-mzansi-purple" />,
                title: 'Structured Lessons',
                description: 'Follow a curriculum designed by language experts for maximum retention'
              },
              {
                icon: <Mic className="h-8 w-8 text-mzansi-purple" />,
                title: 'Speech Recognition',
                description: 'Practice pronunciation with real-time feedback on your speaking'
              },
              {
                icon: <Volume className="h-8 w-8 text-mzansi-purple" />,
                title: 'Audio Lessons',
                description: 'Listen to native speakers and train your ear for authentic sounds'
              },
              {
                icon: <Translate className="h-8 w-8 text-mzansi-purple" />,
                title: 'Multiple Languages',
                description: 'Learn any of South Africa\'s 11 official languages on one platform'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-mzansi-light-purple shadow-sm card-hover"
              >
                <div className="bg-mzansi-light-purple/50 p-3 rounded-full inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-mzansi-dark/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-mzansi-purple/10 to-mzansi-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Language Journey?</h2>
            <p className="text-lg mb-8 text-mzansi-dark/80">
              Join thousands of learners discovering South African languages with our interactive platform.
            </p>
            <Link to="/signup">
              <Button className="btn-primary text-lg">Create Free Account</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
