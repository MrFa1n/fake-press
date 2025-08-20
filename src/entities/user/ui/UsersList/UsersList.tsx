import type { User } from "../../types";
import { UserCard } from "../UserCard/UserCard";
import styles from "./UsersList.module.css";

interface UsersListProps {
  users: User[];
}

export const UsersList = ({ users }: UsersListProps) => {
  return (
    <div className={styles.wrapper}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
