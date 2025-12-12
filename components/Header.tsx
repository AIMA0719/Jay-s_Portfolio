import React, { useState, useEffect } from 'react';
import { Smartphone, Mail, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tight text-slate-900">
            {PERSONAL_INFO.name}
          </span>
        </div>
        
        <nav className="flex items-center gap-6">
          <a 
            href={PERSONAL_INFO.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-primary-700 transition-colors"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-700 transition-colors"
          >
            <Mail size={16} />
            <span>Contact</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;