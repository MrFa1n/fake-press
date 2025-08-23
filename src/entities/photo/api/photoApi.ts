import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Photo } from "../model/types";

export const photoApi = createApi({
  reducerPath: "photoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Photos"],
  endpoints: (builder) => ({
    getPhotosByAlbum: builder.query<Photo[], number>({
      query: (albumId) => `photos?albumId=${albumId}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Photos", id } as const)),
              { type: "Photos", id: "LIST" },
            ]
          : [{ type: "Photos", id: "LIST" }],
    }),
  }),
});

export const { useGetPhotosByAlbumQuery } = photoApi;
