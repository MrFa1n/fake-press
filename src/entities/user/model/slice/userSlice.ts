import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { User } from "../../types";
import type { RootState } from "@/app/providers/store";

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
export const userSelectors = usersAdapter.getSelectors<RootState>(
  (state) => state.user
);

export default userSlice.reducer;
