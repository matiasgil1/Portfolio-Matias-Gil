export interface EcosystemItem {
  name: string;
  url: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'all' | 'ai' | 'enterprise' | 'ecosystem';
  technologies: {
    frontend: string[];
    backend: string[];
    integrations: string[];
    reports?: string[];
    security?: string[];
  };
  url: string;
  ecosystem?: EcosystemItem[];
  imageUrl?: string;
  isFeatured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 1-5 for visual bars
    iconName: string;
  }[];
}
