import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";

export const getDataUsers = createAsyncThunk("contacts/fetchUsers", () => {
  return fetchData("Users");
});

const initialState = {
  usersList: [],
  status: "loading",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDataUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDataUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.usersList = action.payload;
      })
      .addCase(getDataUsers.rejected, (state) => {
        state.status = "failed";
        console.error("Not possible to fetch the contacts");
      });
  },
});

export default usersSlice.reducer;
