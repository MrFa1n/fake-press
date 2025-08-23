import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { Post } from "../types";
import type { RootState } from "@/app/providers/store";

const postsAdapter = createEntityAdapter<Post>();

const postSlice = createSlice({
  name: "post",
  initialState: postsAdapter.getInitialState(),
  reducers: {
    addMany: postsAdapter.addMany,
    addOne: postsAdapter.addOne,
    setAll: postsAdapter.setAll,
  },
});

export const { addMany, addOne, setAll } = postSlice.actions;
export const postSelectors = postsAdapter.getSelectors<RootState>(
  (state) => state.post
);

export default postSlice.reducer;
