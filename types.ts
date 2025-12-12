import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: Highlight[];
}

export interface Highlight {
  title: string;
  detail: string;
  impact: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ProjectDetail {
  period: string;
  background: string;
  tasks: string[]; // List of specific tasks
  techStack: string[]; // Specific techs used
  challenges?: string[]; // Technical challenges
  results?: string[]; // Outcomes
}

export interface BentoItemProps {
  id: string;
  title: string;
  subtitle?: string;
  description: string; // Short description for the card
  icon: LucideIcon;
  cols?: number; // Span columns
  rows?: number; // Span rows
  dark?: boolean;
  
  // New field for the detailed modal
  details: ProjectDetail;
}