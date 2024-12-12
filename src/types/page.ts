import { RenderedContent } from './common';

export interface WordPressPage {
  id: number;
  slug: string;
  title: RenderedContent;
  content: RenderedContent;
  excerpt: RenderedContent;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}