
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-mzansi-light-purple">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold gradient-text">TalkMzansi</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/lessons" className="text-mzansi-dark hover:text-mzansi-purple transition-colors">
            Lessons
          </Link>
          <Link to="/practice" className="text-mzansi-dark hover:text-mzansi-purple transition-colors">
            Practice
          </Link>
          <Link to="/dashboard" className="text-mzansi-dark hover:text-mzansi-purple transition-colors">
            Dashboard
          </Link>
          <Link to="/login">
            <Button variant="outline" className="border-mzansi-purple text-mzansi-purple hover:bg-mzansi-light-purple">
              Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-mzansi-purple hover:bg-mzansi-purple/90">
              Get Started
            </Button>
          </Link>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-mzansi-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-mzansi-light-purple">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/lessons" 
              className="text-mzansi-dark hover:text-mzansi-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Lessons
            </Link>
            <Link 
              to="/practice" 
              className="text-mzansi-dark hover:text-mzansi-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Practice
            </Link>
            <Link 
              to="/dashboard" 
              className="text-mzansi-dark hover:text-mzansi-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/login" 
              className="block"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button variant="outline" className="w-full border-mzansi-purple text-mzansi-purple hover:bg-mzansi-light-purple">
                Log In
              </Button>
            </Link>
            <Link 
              to="/signup" 
              className="block"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-mzansi-purple hover:bg-mzansi-purple/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
