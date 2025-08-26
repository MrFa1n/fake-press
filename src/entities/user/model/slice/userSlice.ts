import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { User } from "../types";

const usersAdapter = createEntityAdapter<User>();

const initialState = usersAdapter.getInitialState();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addMany: usersAdapter.addMany,
    addOne: usersAdapter.addOne,
    setAll: usersAdapter.setAll,
  },
});

export const { addMany, addOne, setAll } = userSlice.actions;
export const usersReducer = userSlice.reducer;

export type UserState = ReturnType<typeof usersReducer>;

export const userSelectors = usersAdapter.getSelectors<UserState>(
  (state) => state
);

export default usersReducer;
