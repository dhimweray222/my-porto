export interface Profile {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  image: string;
}

export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
  projectImage?: string;
  techStack?: string[];
  fullDescription?: string;
}

export interface ContactInfo {
  email: string;
  github?: string;
  linkedin?: string;
  phone?: string;
}

export interface PortfolioData {
  profile: Profile;
  experience: ExperienceItem[];
  contact: ContactInfo;
}
