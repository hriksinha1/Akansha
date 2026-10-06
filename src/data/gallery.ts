import { GalleryItem } from '../types';
import { akanshaImages } from './images';

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-hero-pool",
    title: "Poolside Terrace & Contemporary Architecture",
    category: "Editorial Portrait",
    aspect: "tall",
    image: akanshaImages.hero,
    altText: "Akansha Sharad Renuse in a light olive puff-sleeve top beside a swimming pool terrace with modern cabanas",
    location: "Rooftop Terrace",
    year: "2026",
    caption: "Poised on-camera presence against open sky, wicker poolside cabanas, and contemporary architecture.",
    featured: true
  },
  {
    id: "gal-ideas-of-india",
    title: "Ideas of India Summit 3.0 · ABP Network",
    category: "Public Appearance",
    aspect: "tall",
    image: akanshaImages.ideasOfIndia,
    altText: "Akansha Sharad Renuse at the ABP Network Ideas of India Summit 3.0 backdrop in a tailored yellow blazer and black trousers",
    location: "ABP Network Summit, Mumbai",
    year: "2026",
    caption: "Documented presence at the premier national dialogue forum convened by ABP Network in Mumbai.",
    featured: true
  },
  {
    id: "gal-blue-portrait",
    title: "Architectural Wood-Panelling & Studio Setting",
    category: "Editorial Portrait",
    aspect: "portrait",
    image: akanshaImages.about,
    altText: "Akansha Sharad Renuse in a royal blue collared peplum top in a modern architectural wood-panelled interior",
    location: "Studio Interior",
    year: "2026",
    caption: "A confident on-camera portrait blending warm timber textures with bold royal blue tailoring.",
    featured: true
  },
  {
    id: "gal-studio-portrait",
    title: "Editorial Portfolio & Personal Profile",
    category: "Editorial Portrait",
    aspect: "portrait",
    image: akanshaImages.gallery01,
    altText: "Akansha Sharad Renuse editorial portrait in contemporary styling",
    location: "Studio Setting",
    year: "2026",
    caption: "A distinct on-camera presence capturing modern elegance and personal brand authenticity.",
    featured: true
  }
];
