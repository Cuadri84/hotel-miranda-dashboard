import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetch from "cross-fetch";
import { Booking } from "./interfaces/interfaces";

export const getDataBookings = createAsyncThunk<Booking[]>(
  "bookings/fetchBookings",
  async () => {
    const result = await fetch("http://localhost:3001/bookings")
      .then((res) => res.json())
      .then((data) => data);

    return result as Booking[];
  }
);

export const getBooking = createAsyncThunk<string, string>(
  "booking/GetBookingDetails",
  async (_id) => {
    const result = await fetch(`http://localhost:3001/bookings/${_id}`)
      .then((res) => res.json())
      .then((data) => data);
    return result;
  }
);

export const deleteBooking = createAsyncThunk<string, string>(
  "bookings/DeleteBooking",
  async (_id) => {
    await fetch(`http://localhost:3001/bookings/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => data);
    return _id;
  }
);

export const createNewBooking = createAsyncThunk<Booking, Booking>(
  "bookings/CreateBooking",
  async (newBooking) => {
    const response = await fetch(`http://localhost:3001/bookings/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBooking),
    });

    if (!response.ok) {
      throw new Error("Failed to create booking");
    }

    const result = await response.json();

    return result;
  }
);

export const editBooking = createAsyncThunk<
  Booking,
  { _id: string; booking: Booking }
>("bookings/EditBooking", async ({ _id, booking }) => {
  const response = await fetch(`http://localhost:3001/bookings/${_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(booking),
  });

  if (!response.ok) {
    throw new Error("Failed to edit booking");
  }

  const result = await response.json();

  return result;
});

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
        state.singleBooking = action.payload;
      })
      .addCase(getBooking.rejected, (state) => {
        state.singleBookingStatus = "failed";
        console.error("Not possible to fetch the booking");
      });

    builder.addCase(deleteBooking.fulfilled, (state, action) => {
      state.bookingsList = state.bookingsList.filter(
        (booking) => booking._id !== action.payload
      );
    });

    builder.addCase(createNewBooking.fulfilled, (state, action) => {
      const newBooking = action.payload;
      state.bookingsList = [...state.bookingsList, newBooking];
    });

    builder.addCase(editBooking.fulfilled, (state, action) => {
      const updatedBooking = action.payload;
      state.bookingsList = state.bookingsList.map((booking) => {
        return booking._id === updatedBooking._id ? updatedBooking : booking;
      });
      state.singleBooking = null;
    });
  },
});

export default bookingSlice.reducer;
