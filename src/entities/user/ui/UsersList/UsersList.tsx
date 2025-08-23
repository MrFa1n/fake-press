import { ItemList } from "@/shared/ui/ItemList/ItemList";
import type { User } from "../../model/types";
import { UserCard } from "../UserCard/UserCard";
import styles from "./UsersList.module.css";

interface UsersListProps {
  users: User[];
}

export const UsersList = ({ users }: UsersListProps) => {
  return (
    <div className={styles.wrapper}>
      <ItemList<User>
        items={users}
        keyExtractor={(user) => user.id}
        renderItem={(user) => <UserCard key={user.id} user={user} />}
      />
    </div>
  );
};
