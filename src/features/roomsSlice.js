import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";

export const getDataRooms = createAsyncThunk("contacts/fetchRooms", () => {
  return fetchData("Rooms");
});

const initialState = {
  roomsList: [],
  status: "loading",
};

export const roomsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDataRooms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDataRooms.fulfilled, (state, action) => {
        state.status = "success";
        state.roomsList = action.payload;
      })
      .addCase(getDataRooms.rejected, (state) => {
        state.status = "failed";
        console.error("Not possible to fetch the contacts");
      });
  },
});

export default roomsSlice.reducer;
