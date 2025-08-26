import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "@/entities/post";
import { commentsApi } from "@/entities/comment";
import { albumsApi } from "@/entities/album";
import { todosApi } from "@/entities/todo";
import { postReducer } from "@/entities/post";
import { userReducer } from "@/entities/user";
import { userApi } from "@/entities/user";
import { photoApi } from "@/entities/photo";

export const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photoApi.reducerPath]: photoApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
      userApi.middleware,
      commentsApi.middleware,
      albumsApi.middleware,
      photoApi.middleware,
      todosApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
