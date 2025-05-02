
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Book, Headphones, List, Mic, Translate, User } from 'lucide-react';

const Dashboard = () => {
  // Mock data
  const userStats = {
    streak: 7,
    xp: 1240,
    level: 5,
    progress: 68,
  };
  
  const recentActivities = [
    { id: 1, title: "Zulu Basics", date: "2 hours ago", xpEarned: 30 },
    { id: 2, title: "Xhosa Greetings", date: "Yesterday", xpEarned: 45 },
    { id: 3, title: "Afrikaans Vocab", date: "2 days ago", xpEarned: 25 },
  ];
  
  const recommendedLessons = [
    { 
      id: 1, 
      title: "Zulu Conversation Skills",
      description: "Learn everyday conversational phrases in Zulu",
      level: "Intermediate",
      icon: <Translate className="h-6 w-6 text-mzansi-purple" />,
      path: "/lessons/zulu/conversation"
    },
    { 
      id: 2, 
      title: "Xhosa Pronunciation",
      description: "Master the unique click sounds of Xhosa",
      level: "Beginner",
      icon: <Mic className="h-6 w-6 text-mzansi-purple" />,
      path: "/lessons/xhosa/pronunciation"
    },
    { 
      id: 3, 
      title: "Sotho Vocabulary Builder",
      description: "Expand your Sotho vocabulary with these essential words",
      level: "Beginner",
      icon: <Book className="h-6 w-6 text-mzansi-purple" />,
      path: "/lessons/sotho/vocabulary"
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Your Dashboard</h1>
            <p className="text-mzansi-dark/70">Track your progress and continue learning</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link to="/profile">
              <Button variant="outline" className="flex items-center gap-2 border-mzansi-purple text-mzansi-purple">
                <User size={18} />
                <span>Profile</span>
              </Button>
            </Link>
            <Link to="/lessons">
              <Button className="flex items-center gap-2 bg-mzansi-purple hover:bg-mzansi-purple/90">
                <Book size={18} />
                <span>Start Learning</span>
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-mzansi-light-purple">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Current Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="text-3xl font-bold text-mzansi-purple">{userStats.streak} days</div>
                <div className="ml-auto flex space-x-1">
                  {[...Array(7)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-6 w-6 rounded-full ${i < userStats.streak % 7 ? 'bg-mzansi-purple' : 'bg-mzansi-light-purple'}`}
                    ></div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-mzansi-light-purple">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total XP</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-mzansi-purple">{userStats.xp} XP</div>
              <div className="mt-2 text-sm text-mzansi-dark/70">Earn 60 more XP to reach level {userStats.level + 1}</div>
            </CardContent>
          </Card>
          
          <Card className="border-mzansi-light-purple">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Current Level</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="text-3xl font-bold text-mzansi-purple">Level {userStats.level}</div>
                <div className="ml-4 flex-1">
                  <Progress value={userStats.progress} className="h-2" />
                  <div className="mt-1 text-xs text-right text-mzansi-dark/70">{userStats.progress}%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="border-mzansi-light-purple">
              <CardHeader>
                <CardTitle>Recommended Lessons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendedLessons.map((lesson) => (
                    <Link key={lesson.id} to={lesson.path}>
                      <div className="flex items-start p-4 rounded-lg border border-mzansi-light-purple hover:bg-mzansi-light-purple/20 transition-colors">
                        <div className="bg-mzansi-light-purple/50 p-2 rounded-full mr-4">
                          {lesson.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-lg">{lesson.title}</h3>
                            <span className="text-xs px-2 py-1 rounded-full bg-mzansi-light-purple text-mzansi-purple">
                              {lesson.level}
                            </span>
                          </div>
                          <p className="text-mzansi-dark/70 text-sm mt-1">{lesson.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="border-mzansi-light-purple">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Activity</CardTitle>
                <Link to="/history" className="text-xs text-mzansi-purple hover:underline">
                  View all
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between pb-3 border-b border-mzansi-light-purple">
                      <div>
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-xs text-mzansi-dark/70">{activity.date}</p>
                      </div>
                      <div className="bg-mzansi-light-purple/70 px-2 py-1 rounded-full text-xs">
                        +{activity.xpEarned} XP
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-mzansi-light-purple mt-6">
              <CardHeader>
                <CardTitle>Daily Goal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <div className="inline-block p-4 bg-mzansi-light-purple rounded-full mb-4">
                    <List className="h-8 w-8 text-mzansi-purple" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Complete 3 lessons today</h3>
                  <p className="text-sm text-mzansi-dark/70 mb-4">You've completed 1 of 3 lessons</p>
                  <Progress value={33} className="h-2 mb-4" />
                  <Link to="/lessons">
                    <Button className="w-full bg-mzansi-purple hover:bg-mzansi-purple/90">
                      Continue Learning
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
