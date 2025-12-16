import React from 'react';
import { LucideIcon } from 'lucide-react';

// --- New Types for Detailed Career Section ---

export interface CoreImplementation {
  title: string;
  items: string[];
}

export interface ProblemSolving {
  problem: string;
  solution: string;
  result: string;
}

export interface CareerProject {
  id?: string; // For linking from BentoGrid
  title: string;
  subtitle?: string; // Restored for legacy modal
  icon?: any; // Restored for legacy modal (LucideIcon)
  overview: string;
  background?: string; // From Bento details
  quantitative?: string[];
  roles?: string[];
  techStack: string[];
  coreImplementations?: CoreImplementation[];
  problemSolving?: ProblemSolving; // Legacy single problem solving
  challenges?: Challenge[]; // Multiple challenges from Bento
  results?: string[]; // Additional qualitative results from Bento
  additionalInfo?: { title: string; items: string[] }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  overviewStats: string[];
  projects: CareerProject[];
}

// --- Existing Types for Bento Grid (Preserved) ---

export interface Highlight {
  title: string;
  detail: string;
  impact: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface TaskCategory {
  title: string;
  items: string[];
}

export interface Challenge {
  title: string;
  problem: string;
  solution: string;
  result?: string; // Optional result field for challenges if needed
}

export interface ProjectDetail {
  period: string;
  background: string;
  tasks: TaskCategory[];
  techStack: string[];
  challenges: Challenge[];
  results: string[];
}

export interface BentoItemProps {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: LucideIcon;
  cols?: number;
  rows?: number;
  dark?: boolean;
  details: ProjectDetail;
}