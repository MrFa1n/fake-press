import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { Post } from "../types";
import { postsApi } from "../../api/postsApi";

const postsAdapter = createEntityAdapter<Post>();

const initialState = postsAdapter.getInitialState();

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addMany: postsAdapter.addMany,
    addOne: postsAdapter.addOne,
    setAll: postsAdapter.setAll,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      postsApi.endpoints.getPosts.matchFulfilled,
      (state, { payload }) => {
        postsAdapter.setAll(state, payload);
      }
    );
    builder.addMatcher(
      postsApi.endpoints.getPostById.matchFulfilled,
      (state, { payload }) => {
        postsAdapter.upsertOne(state, payload);
      }
    );
    builder.addMatcher(
      postsApi.endpoints.getPostByUserId.matchFulfilled,
      (state, { payload }) => {
        postsAdapter.upsertMany(state, payload);
      }
    );
  },
});

export const { addMany, addOne, setAll } = postSlice.actions;
export const postsReducer = postSlice.reducer;

export type PostState = ReturnType<typeof postsReducer>;

export const postSelectors = postsAdapter.getSelectors<PostState>(
  (state) => state
);

export default postsReducer;
