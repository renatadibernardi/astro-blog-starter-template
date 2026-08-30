export interface Bookmark {
  id: string;
  name: string;
  link: string;
  description?: string;
  createdAt: string;
  tags: string[];
  favicon?: string;
  ogthumb?: string;
  creator: string;
  favorite: boolean;
  bundles?: string[];
}
