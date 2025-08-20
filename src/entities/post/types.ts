export interface Post {
  id: number;
  userId?: number;
  title: string;
  body: string;
  comments?: {
    id: number;
    name: string;
    text: string;
  }[];
}
