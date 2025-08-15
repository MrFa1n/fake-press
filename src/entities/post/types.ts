export interface Post {
  id: number;
  title: string;
  body: string;
  comments?: {
    id: number;
    name: string;
    text: string;
  }[];
}
