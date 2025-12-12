import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-900 text-slate-300 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2">{PERSONAL_INFO.name}</h3>
          <p className="text-sm opacity-70">
            Logic in Code, Emotion in Experience.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href={PERSONAL_INFO.github} className="hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        © 2024 Choi Jeong-won. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;