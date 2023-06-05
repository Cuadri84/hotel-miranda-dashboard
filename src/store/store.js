import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import contactSlice from "../features/contacSlice";
import bookingSlice from "../features/bookingSlice";
import roomsSlice from "../features/roomsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
    bookings: bookingSlice,
    rooms: roomsSlice,
  },
});

/**
 * Añadir hint en useSelector
 * @typedef {ReturnType<typeof store.getState>} RootState
 * @type {import("react-redux").TypedUseSelectorHook<RootState>}
 */
export const useTypedSelector = useSelector;
