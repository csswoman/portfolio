// Tipos principales del portfolio

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: number;
  title: string;
  institution: string;
  period: string;
}

export interface Skill {
  name: string;
  icon: string;
  width: number;
  height: number;
}

export interface Tool {
  name: string;
  icon: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  username: string;
  title: string;
  email: string;
  heroImage: string;
  aboutImage: string;
  contactImage: string;
}

// SEO Types
export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    type: string;
    locale: string;
    url: string;
    title: string;
    description: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
    site_name: string;
  };
  twitter?: {
    handle: string;
    site: string;
    cardType: string;
  };
}

