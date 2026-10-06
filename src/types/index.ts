export interface ProfileConfig {
  name: string;
  fullName: string;
  title: string;
  tagline: string;
  bioIntro: string;
  bioParagraph1: string;
  bioParagraph2: string;
  location: string;
  focus: string[];
  availability: string[];
  instagramHandle: string;
  instagramUrl: string;
  contactEmail: string;
  representedBy?: string;
}

export interface AppearanceItem {
  id: string;
  title: string;
  organization: string;
  edition: string;
  context: string;
  location: string;
  date: string;
  description: string;
  image: string;
  altText: string;
  badgeText: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Campaign' | 'Brand Work' | 'Events' | 'Media' | 'Creative Direction';
  year: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'tall';
  image: string;
  altText: string;
  location?: string;
  year: string;
  caption: string;
}

export interface InstagramPost {
  id: string;
  caption: string;
  likes: string;
  date: string;
  image: string;
  url: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budgetRange?: string;
  message: string;
}
