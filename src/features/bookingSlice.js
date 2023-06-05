import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";

export const getDataBookings = createAsyncThunk(
  "bookings/fetchBookings",
  () => {
    return fetchData("Bookings");
  }
);

const initialState = {
  bookingsList: [],
  status: "loading",
};

export const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDataBookings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDataBookings.fulfilled, (state, action) => {
        state.status = "success";
        state.bookingsList = action.payload;
      })
      .addCase(getDataBookings.rejected, (state) => {
        state.status = "failed";
        console.error("Not possible to fetch the bookings");
      });
  },
});

export default bookingSlice.reducer;
