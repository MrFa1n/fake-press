import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { Post } from "../types";

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
});

export const { addMany, addOne, setAll } = postSlice.actions;
export const postsReducer = postSlice.reducer;

export type PostState = ReturnType<typeof postsReducer>;

export const postSelectors = postsAdapter.getSelectors<PostState>(
  (state) => state
);

export default postsReducer;
