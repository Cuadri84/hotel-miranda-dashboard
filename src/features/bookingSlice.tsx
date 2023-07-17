import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDelay } from "../functions/extras";
import { fetchData } from "./fetchData";
import { Booking } from "./interfaces/interfaces";

export const getDataBookings = createAsyncThunk<Booking[]>(
  "bookings/fetchBookings",
  async () => {
    const result = await addDelay(fetchData("Bookings"), 200);
    return result as Booking[];
  }
);

export const getBooking = createAsyncThunk<string, string>(
  "booking/GetBookingDetails",
  async (id) => {
    const result = await id;
    return result;
  }
);

export const deleteBooking = createAsyncThunk<string, string>(
  "bookings/DeleteBooking",
  async (bookingID) => {
    const result = await bookingID;
    return result;
  }
);

export const createNewBooking = createAsyncThunk<string, any>(
  "bookings/CreateBooking",
  async (newBooking) => {
    const result = await newBooking;
    return result;
  }
);

export const editBooking = createAsyncThunk<string, string>(
  "bookings/EditBooking",
  async (idBooking) => {
    const result = await idBooking;
    return result;
  }
);

interface BookingState {
  bookingsList: Booking[];
  status: "idle" | "loading" | "success" | "failed";
  singleBooking: any | null;
  singleBookingStatus: "loading" | "success" | "failed";
}

const initialState: BookingState = {
  bookingsList: [],
  status: "idle",
  singleBooking: null,
  singleBookingStatus: "loading",
};

export const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
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
          (booking) => booking.id.toString() === action.payload
        );
      })
      .addCase(getBooking.rejected, (state) => {
        state.singleBookingStatus = "failed";
        console.error("Not possible to fetch the booking");
      });
    builder.addCase(deleteBooking.fulfilled, (state, action) => {
      state.bookingsList = state.bookingsList.filter(
        (booking) => booking.id !== action.payload
      );
    });
    builder.addCase(createNewBooking.fulfilled, (state, action) => {
      const newBooking = JSON.parse(action.payload) as Booking;
      state.bookingsList = [...state.bookingsList, newBooking];
    });

    builder.addCase(editBooking.fulfilled, (state, action) => {
      const updatedBooking = JSON.parse(action.payload) as Booking;
      state.bookingsList = state.bookingsList.map((booking) => {
        return booking.id === updatedBooking.id ? updatedBooking : booking;
      });
      state.singleBooking = null;
    });
  },
});

export default bookingSlice.reducer;
