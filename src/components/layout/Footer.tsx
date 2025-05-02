
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-mzansi-light-purple/50 border-t border-mzansi-light-purple">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold gradient-text">TalkMzansi</Link>
            <p className="mt-2 text-mzansi-dark/70 text-sm">
              Learn South African languages through engaging, interactive lessons.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-mzansi-dark mb-3">Learn</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/lessons" className="text-mzansi-dark/70 hover:text-mzansi-purple text-sm transition-colors">
                  Lessons
                </Link>
              </li>
              <li>
                <Link to="/practice" className="text-mzansi-dark/70 hover:text-mzansi-purple text-sm transition-colors">
                  Practice
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-mzansi-dark/70 hover:text-mzansi-purple text-sm transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-mzansi-dark mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-mzansi-dark/70 hover:text-mzansi-purple text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-mzansi-dark/70 hover:text-mzansi-purple text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-mzansi-dark mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-mzansi-dark/70 hover:text-mzansi-purple text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-mzansi-dark/70 hover:text-mzansi-purple text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-mzansi-light-purple text-center">
          <p className="text-mzansi-dark/60 text-sm">
            &copy; {new Date().getFullYear()} TalkMzansi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
