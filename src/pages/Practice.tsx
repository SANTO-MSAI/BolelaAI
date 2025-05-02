
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mic, MicOff, Volume } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

const Practice = () => {
  const [isListening, setIsListening] = useState(false);
  const [sourceLanguage, setSourceLanguage] = useState('english');
  const [targetLanguage, setTargetLanguage] = useState('zulu');
  const [transcript, setTranscript] = useState('');
  const [result, setResult] = useState('');
  const [feedback, setFeedback] = useState('');
  const { toast } = useToast();

  const languages = [
    { id: 'english', name: 'English' },
    { id: 'zulu', name: 'Zulu' },
    { id: 'xhosa', name: 'Xhosa' },
    { id: 'afrikaans', name: 'Afrikaans' },
    { id: 'sotho', name: 'Sotho' },
    { id: 'tswana', name: 'Tswana' },
    { id: 'venda', name: 'Venda' },
  ];

  const practicePhrases = {
    'zulu': [
      { phrase: "Sawubona, unjani?", translation: "Hello, how are you?" },
      { phrase: "Ngiyaphila, wena unjani?", translation: "I am fine, how are you?" },
      { phrase: "Ngiyabonga", translation: "Thank you" },
    ],
    'xhosa': [
      { phrase: "Molo, unjani?", translation: "Hello, how are you?" },
      { phrase: "Ndiphilile, wena unjani?", translation: "I am fine, how are you?" },
      { phrase: "Enkosi", translation: "Thank you" },
    ],
    'default': [
      { phrase: "Hello", translation: "Hello" },
      { phrase: "How are you?", translation: "How are you?" },
      { phrase: "Thank you", translation: "Thank you" },
    ]
  };

  const getPracticePhrasesForLanguage = () => {
    if (targetLanguage === 'zulu') return practicePhrases.zulu;
    if (targetLanguage === 'xhosa') return practicePhrases.xhosa;
    return practicePhrases.default;
  };

  const startListening = () => {
    // In a real app, we would use the Web Speech API here
    setIsListening(true);
    toast({
      title: "Listening started",
      description: "Speak now. In a real app, this would use your microphone.",
    });
    
    // Simulate speech recognition after 3 seconds
    setTimeout(() => {
      setIsListening(false);
      const randomPhrases = getPracticePhrasesForLanguage();
      const randomPhrase = randomPhrases[Math.floor(Math.random() * randomPhrases.length)];
      /**
       * Create mock object to test communication
       * Key:value = speech:randomPhrase
       */
      axios.post("https://localhost:5000/speech_practice", randomPhrases).then(function(response) {
              console.log(response.data)
                alert(response.data.message);
      })
            .catch(function(error) {
                console.error('There was an error!', error);
            });

      setTranscript("I said: " + randomPhrase.translation);
      setResult(randomPhrase.phrase);
      
      // Random feedback
      const feedbackOptions = [
        "Great pronunciation! Your intonation is excellent.",
        "Good attempt! Try to emphasize the second syllable more.",
        "Almost there! Remember to use the proper tone for this phrase.",
      ];
      
      setFeedback(feedbackOptions[Math.floor(Math.random() * feedbackOptions.length)]);
    }, 3000);
  };

  const stopListening = () => {
    setIsListening(false);
    toast({
      title: "Listening stopped",
      description: "Speech recognition cancelled.",
    });
  };

  const playAudio = (text: string) => {
    toast({
      title: "Playing audio",
      description: `In a real app, this would play: "${text}"`,
    });
  };

  const handleClear = () => {
    setTranscript('');
    setResult('');
    setFeedback('');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Practice Your Speaking</h1>
          <p className="text-lg text-mzansi-dark/70 max-w-2xl mx-auto">
            Get real-time feedback on your pronunciation and grammar. Speak into your microphone and our AI will analyze your speech.
          </p>
        </div>
        
        <Tabs defaultValue="speak">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="speak">Speech to Text</TabsTrigger>
              <TabsTrigger value="listen">Text to Speech</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="speak">
            <Card className="border-mzansi-light-purple max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle>Speech Practice</CardTitle>
                <CardDescription>
                  Speak in one language and get the translation in another, with pronunciation feedback
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">I'll speak in:</label>
                    <Select value={sourceLanguage} onValueChange={setSourceLanguage}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map(lang => (
                          <SelectItem key={lang.id} value={lang.id}>{lang.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Translate to:</label>
                    <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.filter(lang => lang.id !== sourceLanguage).map(lang => (
                          <SelectItem key={lang.id} value={lang.id}>{lang.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="bg-mzansi-light-purple/30 rounded-lg p-6 text-center mb-6">
                  <p className="text-sm text-mzansi-dark/70 mb-4">
                    {isListening
                      ? "Listening... Speak now"
                      : "Press the microphone button and start speaking"
                    }
                  </p>
                  
                  <Button
                    className={`h-20 w-20 rounded-full ${
                      isListening 
                        ? 'bg-red-500 hover:bg-red-600'
                        : 'bg-mzansi-purple hover:bg-mzansi-purple/90'
                    }`}
                    onClick={isListening ? stopListening : startListening}
                  >
                    {isListening 
                      ? <MicOff className="h-10 w-10" /> 
                      : <Mic className="h-10 w-10" />
                    }
                  </Button>
                </div>
                
                {(transcript || result) && (
                  <div className="space-y-6">
                    {transcript && (
                      <div className="p-4 rounded-lg bg-mzansi-light-purple/20 border border-mzansi-light-purple">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">You said:</h3>
                          <Button size="sm" variant="ghost" onClick={handleClear}>Clear</Button>
                        </div>
                        <p>{transcript}</p>
                      </div>
                    )}
                    
                    {result && (
                      <div className="p-4 rounded-lg bg-mzansi-light-blue/20 border border-mzansi-light-blue">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">Translation:</h3>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="flex gap-1 items-center"
                            onClick={() => playAudio(result)}
                          >
                            <Volume size={16} />
                            Listen
                          </Button>
                        </div>
                        <p className="text-lg font-medium">{result}</p>
                      </div>
                    )}
                    
                    {feedback && (
                      <div className="p-4 rounded-lg bg-mzansi-yellow/20 border border-mzansi-yellow">
                        <h3 className="font-medium mb-2">Feedback:</h3>
                        <p>{feedback}</p>
                      </div>
                    )}
                  </div>
                )}
                
                {!transcript && !result && (
                  <div className="p-4 rounded-lg bg-mzansi-light-purple/10 border border-dashed border-mzansi-light-purple text-center">
                    <p className="text-mzansi-dark/60">Your speech will appear here</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="listen">
            <Card className="border-mzansi-light-purple max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle>Pronunciation Practice</CardTitle>
                <CardDescription>
                  Listen to native pronunciation of common phrases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Language:</label>
                  <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.filter(lang => lang.id !== 'english').map(lang => (
                        <SelectItem key={lang.id} value={lang.id}>{lang.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-4">
                  {getPracticePhrasesForLanguage().map((item, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-lg border border-mzansi-light-purple hover:bg-mzansi-light-purple/10 transition-colors"
                    >
                      <div className="flex justify-between">
                        <div>
                          <p className="text-lg font-medium">{item.phrase}</p>
                          <p className="text-sm text-mzansi-dark/70">{item.translation}</p>
                        </div>
                        <Button 
                          variant="outline" 
                          size="icon"
                          className="h-10 w-10"
                          onClick={() => playAudio(item.phrase)}
                        >
                          <Volume className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Practice;
