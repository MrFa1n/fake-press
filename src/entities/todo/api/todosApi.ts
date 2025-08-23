import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Todo } from "../model/types";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodosByUser: builder.query<Todo[], number>({
      query: (userId) => `users/${userId}/todos`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Todos", id } as const)), // Теги для каждой задачи
              { type: "Todos", id: "LIST" },
            ]
          : [{ type: "Todos", id: "LIST" }],
    }),
  }),
});

export const { useGetTodosByUserQuery } = todosApi;
