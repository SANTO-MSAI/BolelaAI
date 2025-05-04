import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";


const Profile = () => {
  // Placeholder user data
  const user = {
    name: "John Doe",
    profileImage: "", // Set a URL or leave blank for fallback
    homeLanguage: "Zulu",
    learningLanguages: ["Xhosa", "Sesotho", "Tswana"],
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[70vh]">
        <div className="w-full max-w-md">
          <Card className="border-mzansi-light-purple shadow-lg">
            <CardHeader className="text-center space-y-2">
              <Avatar className="w-20 h-20 mx-auto">
                <AvatarImage src={user.profileImage} alt={user.name} />
                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{user.name}</CardTitle>
              <CardDescription>Language Enthusiast</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-mzansi-dark mb-1">Home Language</h3>
                <Badge className="bg-mzansi-purple text-white">{user.homeLanguage}</Badge>
              </div>
              <div>
                <h3 className="font-semibold text-mzansi-dark mb-1">Languages You're Learning</h3>
                <div className="flex flex-wrap gap-2">
                  {user.learningLanguages.map((lang, index) => (
                    <Badge key={index} variant="outline" className="border-mzansi-purple text-mzansi-purple">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;