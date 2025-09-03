import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "@/entities/post/api/postsApi";
import { commentsApi } from "@/entities/comment/api/commentsApi";
import { albumsApi } from "@/entities/album/api/albumsApi";
import { todosApi } from "@/entities/todo/api/todosApi";
import postReducer from "@/entities/post/model/slice/postSlice";
import userReducer from "@/entities/user/model/slice/userSlice";
import { userApi } from "@/entities/user/api/userApi";
import { photoApi } from "@/entities/photo/api/photoApi";

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
