import { EcosystemBrand } from '../types';

export const ecosystemBrands: Record<string, EcosystemBrand> = {
  realEstate: {
    id: "eco-real-estate",
    title: "Real Estate",
    handle: "realestatewithakansha",
    url: "https://www.instagram.com/realestatewithakansha/",
    category: "Property & Architectural Spaces",
    headline: "Exploring real estate through a more personal lens.",
    description: "Bringing aesthetic sensibility, location appreciation, and lifestyle storytelling to properties and residential spaces. A dedicated space for curated design perspectives and living environments.",
    image: "/src/assets/images/editorial_studio_arch_1791265071829.jpg",
    ctaText: "Visit Real Estate Profile",
    highlights: [
      "Architectural living spaces",
      "Property aesthetics & lifestyle views",
      "Curated visual walk-throughs"
    ]
  },
  mediaCreative: {
    id: "eco-mediajars",
    title: "Media & Creative",
    handle: "mediajars",
    url: "https://www.instagram.com/mediajars/",
    category: "Media Production & Creative Curation",
    headline: "Stories, media perspectives & creative collaboration.",
    description: "A collaborative touchpoint exploring media narratives, digital creative initiatives, and visual formats designed to spark genuine conversation.",
    image: "/src/assets/images/campaign_media_stage_1791265102202.jpg",
    ctaText: "Explore Media",
    highlights: [
      "Media storytelling",
      "Creative production",
      "Format experimentation"
    ]
  },
  kokanQuality: {
    id: "eco-kokan",
    title: "Kokan Quality",
    handle: "kokan_quality",
    url: "https://www.instagram.com/kokan_quality/",
    category: "Regional Heritage & Related Brand",
    headline: "Heritage, authentic roots & regional pride.",
    description: "A related brand endeavor highlighting the richness, authentic flavors, and traditional heritage of the Konkan region.",
    image: "/src/assets/images/campaign_studio_warm_1791265091994.jpg",
    ctaText: "View Kokan Quality",
    highlights: [
      "Regional authenticity",
      "Heritage curation",
      "Local resonance"
    ]
  }
};
