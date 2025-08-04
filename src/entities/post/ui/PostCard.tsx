import styles from "./PostCard.module.css";

interface PostCardProps {
  title: string;
  body: string;
}

export const PostCard = ({ title, body }: PostCardProps) => {
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
    </article>
  );
};
