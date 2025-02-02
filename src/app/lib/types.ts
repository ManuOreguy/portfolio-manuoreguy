export type Experience = {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  logos: string[];
  bgColor?: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

export type NavItem = {
  label: string;
  href: string;
};
