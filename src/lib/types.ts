// WordPress-ready data types
// These interfaces match WordPress REST API response shapes
// for easy future integration

export interface WPPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  featured_image?: string;
  slug: string;
  categories?: string[];
}

export interface Work {
  id: number;
  title: string;
  year: string;
  description: string;
  genre: string;
  publisher: string;
  image?: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  location?: string;
  image?: string;
  type: 'award' | 'event' | 'presentation';
}

export interface MediaItem {
  id: number;
  title: string;
  description: string;
  url: string;
  type: 'youtube' | 'facebook' | 'article';
  thumbnail?: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

export interface BiographySection {
  id: number;
  title: string;
  content: string;
  period?: string;
  image?: string;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  heroQuote: string;
  heroQuoteAuthor: string;
  authorName: string;
  authorBio: string;
  contactEmail: string;
}
