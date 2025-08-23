import { GlassBlock } from "@/shared/ui/GlassBlock/GlassBlock";
import type { User } from "../../model/types";
import styles from "./UserCard.module.css";
import { NavLink } from "react-router-dom";
import { Button } from "@/shared/ui/Button/Button";

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  const links = [
    { to: `/users/${user.id}/albums`, label: "Альбомы" },
    { to: `/users/${user.id}/todos`, label: "To-Do" },
    { to: `/users/${user.id}/posts`, label: "Посты" },
  ];

  return (
    <GlassBlock className={styles.container}>
      <div className={styles.content}>
        <div>
          <h2>{user.name}</h2>
          <div className={styles.desc}>
            <p>@{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noreferrer"
            >
              {user.website}
            </a>
          </div>
        </div>
        <div className={styles.btn}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              <Button variant="glassBlue" shape="softRounded" size="small">
                {link.label}
              </Button>
            </NavLink>
          ))}
        </div>
      </div>
    </GlassBlock>
  );
};
