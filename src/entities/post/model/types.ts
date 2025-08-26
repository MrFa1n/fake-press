interface Comment {
  id: number;
  postId: number;
  name: string;
  email: `${string}@${string}`;
  body: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  comments: Comment[];
}
