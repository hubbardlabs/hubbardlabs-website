export interface Term {
  id: number;
  name: string;
  slug: string;
  taxonomy?: string;
  count?: number;
}

export interface Snippet {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  acf?: {
    language?: string;
    code_snippet?: string;
  };
  _embedded?: {
    'wp:term'?: Term[][];
  };
  'hlabs-code-category'?: number[];
  'hlabs-code-tag'?: number[];
}