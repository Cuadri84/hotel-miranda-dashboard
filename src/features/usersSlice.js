import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";

export const getDataUsers = createAsyncThunk("contacts/fetchUsers", () => {
  return fetchData("Users");
});
export const getUser = createAsyncThunk("user/GetUserDetails", async (id) => {
  return await id;
});

const initialState = {
  usersList: [],
  status: "loading",
  singleUser: "",
  singleUserStatus: "loading",
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
    builder
      .addCase(getUser.pending, (state) => {
        state.singleUser = null;
        state.singleUserStatus = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.singleUserStatus = "success";
        state.singleUser = state.usersList.find(
          (user) => user.id === action.payload
        );
      })
      .addCase(getUser.rejected, (state) => {
        state.singleUserStatus = "failed";
        console.error("Not possible to fetch the user");
      });
  },
});

export default usersSlice.reducer;
