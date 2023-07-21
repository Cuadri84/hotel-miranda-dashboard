import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetch from "cross-fetch";
import { IUser } from "./interfaces/interfaces";
import Swal from "sweetalert2";

export const getDataUsers = createAsyncThunk<IUser[]>(
  "users/fetchUsers",
  async () => {
    const result = await fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => data);

    return result as IUser[];
  }
);

export const getUser = createAsyncThunk<string, string>(
  "user/GetUserDetails",
  async (_id) => {
    const result = await fetch(`http://localhost:3001/users/${_id}`)
      .then((res) => res.json())
      .then((data) => data);
    return result;
  }
);

export const deleteUser = createAsyncThunk<string, string>(
  "users/DeleteUser",
  async (_id) => {
    await fetch(`http://localhost:3001/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => data);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Deleted user",
      showConfirmButton: false,
      timer: 1500,
    });
    return _id;
  }
);

export const editUser = createAsyncThunk<IUser, { _id: string; user: IUser }>(
  "users/EditUser",
  async ({ _id, user }) => {
    const response = await fetch(`http://localhost:3001/users/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to edit user");
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Edited user",
      showConfirmButton: false,
      timer: 1500,
    });
    const result = await response.json();

    return result;
  }
);

export const createNewUser = createAsyncThunk<IUser, IUser>(
  "users/CreateUser",
  async (newUser) => {
    const response = await fetch(`http://localhost:3001/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    const result = await response.json();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Created new User",
      showConfirmButton: false,
      timer: 1500,
    });

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
        state.singleUser = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.singleUserStatus = "failed";
        console.error("Not possible to fetch the user");
      });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.usersList = state.usersList.filter(
        (user) => user._id !== action.payload
      );
    });
    builder.addCase(createNewUser.fulfilled, (state, action) => {
      state.usersList = [...state.usersList, action.payload];
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.usersList = state.usersList.map((user) => {
        return user._id === action.payload._id ? action.payload : user;
      });
      state.singleUser = null;
    });
  },
});

export default usersSlice.reducer;
