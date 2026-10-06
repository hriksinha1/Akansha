export interface ProfileConfig {
  name: string;
  fullName: string;
  title: string;
  tagline: string;
  headline: string;
  supportingCopy: string;
  statement: string;
  statementSub: string;
  bioIntro: string;
  bioParagraph1: string;
  bioParagraph2: string;
  location: string;
  focus: string[];
  availability: string[];
  instagramHandle: string;
  instagramUrl: string;
  realEstateInstagram: string;
  mediaInstagram: string;
  kokanInstagram: string;
  contactEmail: string;
}

export interface AreaOfWork {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link?: string;
  linkText?: string;
}

export interface EcosystemBrand {
  id: string;
  title: string;
  handle: string;
  url: string;
  category: string;
  headline: string;
  description: string;
  image: string;
  ctaText: string;
  highlights: string[];
}

export interface AppearanceItem {
  id: string;
  title: string;
  organization: string;
  edition: string;
  context: string;
  location: string;
  date: string;
  headline: string;
  subheading: string;
  description: string;
  image: string;
  altText: string;
  badgeText: string;
  highlights: string[];
}

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  date: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
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
  featured?: boolean;
}

export interface InstagramPost {
  id: string;
  caption: string;
  likes: string;
  date: string;
  image: string;
  url: string;
  category?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  opportunityType: string;
  message: string;
}
