import { useGetTodosByUserQuery } from "@/entities/todo/api/todosApi";
import { useGetUsersByIdQuery } from "@/entities/user/api/userApi";
import { useParams } from "react-router-dom";

export const UserTodosPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  const {
    data: todos = [],
    isLoading,
    isError,
  } = useGetTodosByUserQuery(userId);

  const { data: user, isLoading: userLoading } = useGetUsersByIdQuery(userId);

  if (userLoading) return <div>Загрузка пользователя...</div>;
  if (isLoading) return <div>Загрузка задач...</div>;
  if (isError) return <div>Ошибка загрузки</div>;

  return (
    <div>
      <h1>Задачи пользователя {user?.name}</h1>
      <ol type="1">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "✅" : "❌"}
          </li>
        ))}
      </ol>
    </div>
  );
};
