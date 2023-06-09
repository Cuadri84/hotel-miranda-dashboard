import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";
import { addDelay } from "../functions/extras";

export const getDataBookings = createAsyncThunk(
  "bookings/fetchBookings",
  () => {
    return addDelay(fetchData("Bookings"), 200);
  }
);

export const getBooking = createAsyncThunk(
  "booking/GetBookingDetails",
  async (idBooking) => {
    return await idBooking;
  }
);

export const deleteBooking = createAsyncThunk(
  "bookings/DeleteBooking",
  async (bookingID) => {
    return await bookingID;
  }
);

export const createNewBooking = createAsyncThunk(
  "bookings/CreateBooking",
  async (newBooking) => {
    return await newBooking;
  }
);

export const editBooking = createAsyncThunk(
  "bookings/EditBooking",
  async (idBooking) => {
    return await idBooking;
  }
);

const initialState = {
  bookingsList: [],
  status: "idle",
  singleBooking: null,
  singleBookingStatus: "loading",
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
    builder
      .addCase(getBooking.pending, (state) => {
        state.singleBooking = null;
        state.singleBookingStatus = "loading";
      })
      .addCase(getBooking.fulfilled, (state, action) => {
        state.singleBookingStatus = "success";
        state.singleBooking = state.bookingsList.find(
          (booking) => booking.bookingID === action.payload
        );
      })
      .addCase(getBooking.rejected, (state) => {
        state.singleBookingStatus = "failed";
        console.error("Not possible to fetch the booking");
      });
    builder.addCase(deleteBooking.fulfilled, (state, action) => {
      state.bookingsList = state.bookingsList.filter(
        (booking) => booking.bookingID !== action.payload
      );
    });
    builder.addCase(createNewBooking.fulfilled, (state, action) => {
      state.bookingsList = [...state.bookingsList, action.payload];
    });
    builder.addCase(editBooking.fulfilled, (state, action) => {
      state.bookingsList = state.bookingsList.map((booking) => {
        return booking.bookingID === action.payload.bookingID
          ? action.payload
          : booking;
      });
      state.singleBooking = null;
    });
  },
});

export default bookingSlice.reducer;
