export interface FeatureItem {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  logo: string;
  logoTheme: 'light' | 'dark';
  status: 'In Development' | 'Coming Soon' | 'Prototype Concept';
  features: FeatureItem[];
  highlights: string[];
  disclaimer?: string;
  accentColor: string;
}

export interface LeadershipMember {
  name: string;
  title: string;
  roleDescription: string;
  initials: string;
}
