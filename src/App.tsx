
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Lessons from "./pages/Lessons";
import Practice from "./pages/Practice";
import NotFound from "./pages/NotFound";
import BasicLessons from "./pages/BasicLessons";
import GreetingsModule from "./pages/GreetingsModule";
import CommonPhrases from "./pages/CommonPhrases";
import Questions from "./pages/Questions";
import Responses from "./pages/Responses"
import NumbersAndCounting from "./pages/NumbersAndCounting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lessons" element={<Lessons />} />
         <Route path="/basiclessons/:language/:typeId/:moduleId" element={<BasicLessons />} />
          <Route path="/practice" element={<Practice />} />
          
          <Route path="/greetings" element={<GreetingsModule />} />
          <Route path="/numbers" element={<NumbersAndCounting />} />
          <Route path="/phrases" element={<CommonPhrases />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/responses" element={<Responses />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
