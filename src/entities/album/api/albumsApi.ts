import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Album } from "../types";

export const albumsApi = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Albums"],
  endpoints: (builder) => ({
    getAlbumsByUser: builder.query<Album[], number>({
      query: (userId) => `users/${userId}/albums`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Albums", id } as const)),
              { type: "Albums", id: "LIST" },
            ]
          : [{ type: "Albums", id: "LIST" }],
    }),
  }),
});

export const { useGetAlbumsByUserQuery } = albumsApi;
