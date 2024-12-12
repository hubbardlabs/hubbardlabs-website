export interface CloudAppItem {
  id: string;
  name: string;
  thumbnail_url: string;
  item_type: string;
  created_at: string;
  updated_at: string;
  share_url: string;
  content_url: string;
}

export interface CloudAppResponse {
  items: CloudAppItem[];
  total_pages: number;
  current_page: number;
  per_page: number;
  total_count: number;
}