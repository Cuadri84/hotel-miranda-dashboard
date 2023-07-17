import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";
import { addDelay } from "../functions/extras";

export const getDataUsers = createAsyncThunk("users/fetchUsers", async () => {
  const result = await addDelay(fetchData("Users"), 200);
  return result;
});

export const getUser = createAsyncThunk(
  "user/GetUserDetails",
  async (id: string) => {
    const result = await id;
    return result;
  }
);

export const deleteUser = createAsyncThunk(
  "users/DeleteUser",
  async (id: string) => {
    const result = await id;
    return result;
  }
);

export const editUser = createAsyncThunk(
  "users/EditUser",
  async (id: string) => {
    const result = await id;
    return result;
  }
);

export const createNewUser = createAsyncThunk(
  "users/CreateUser",
  async (newUser: any) => {
    const result = await newUser;
    return result;
  }
);

interface UserState {
  usersList: any[];
  status: "idle" | "loading" | "success" | "failed";
  singleUser: any;
  singleUserStatus: "loading" | "success" | "failed";
}

const initialState: UserState = {
  usersList: [],
  status: "idle",
  singleUser: null,
  singleUserStatus: "loading",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
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
        console.error("Not possible to fetch the users");
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
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.usersList = state.usersList.filter(
        (user) => user.id !== action.payload
      );
    });
    builder.addCase(createNewUser.fulfilled, (state, action) => {
      state.usersList = [...state.usersList, action.payload];
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.usersList = state.usersList.map((user) => {
        return user.id === action.payload.id ? action.payload : user;
      });
      state.singleUser = null;
    });
  },
});

export default usersSlice.reducer;
