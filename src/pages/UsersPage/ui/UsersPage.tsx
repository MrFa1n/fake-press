import { useGetUsersQuery } from "@/entities/user/api/userApi";
import { UsersList } from "@/entities/user/ui/UsersList/UsersList";

export const UsersPage = () => {
  const { data: users = [], isLoading, isError } = useGetUsersQuery();

  if (isLoading) {
    return <div>Загрузка пользователей...</div>;
  }

  if (isError) {
    return <div>Ошибка загрузки данных</div>;
  }
  return <UsersList users={users} />;
};
