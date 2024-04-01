export interface Post {
  title: string;
  url: string;
  date: {
    time: number;
    string: string;
    formatShowDate: string;
  };
  cover: string;
  categories: string[];
  excerpt: string | undefined;
  hit: number;
}

export interface MySiteInfo {
  author: string;
}
export interface CategoryInfo {
  name: string;
}
export interface ArtTalk {
  site: string;
  server: string;
}
