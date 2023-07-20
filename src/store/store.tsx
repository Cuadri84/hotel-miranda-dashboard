import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import contactSlice from "../features/contacSlice";
import bookingSlice from "../features/bookingSlice";
import roomsSlice from "../features/roomsSlice";
import usersSlice from "../features/usersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
    bookings: bookingSlice,
    rooms: roomsSlice,
    users: usersSlice,
  },
});

/**
 * Añadir hint en useSelector
 * @typedef {ReturnType<typeof store.getState>} RootState
 * @type {import("react-redux").TypedUseSelectorHook<RootState>}
 */
export const useTypedSelector = useSelector;
