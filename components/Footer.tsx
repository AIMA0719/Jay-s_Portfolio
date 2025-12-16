import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-900 text-slate-300 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2">{PERSONAL_INFO.name}</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <Github size={24} />
            <span className="text-sm font-medium">{PERSONAL_INFO.github}</span>
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={24} />
            <span className="text-sm font-medium">{PERSONAL_INFO.email}</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;