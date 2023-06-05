import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import contactSlice from "../features/contacSlice";
import bookingSlice from "../features/bookingSlice";

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
    bookings: bookingSlice,
  },
});

/**
 * Añadir hint en useSelector
 * @typedef {ReturnType<typeof store.getState>} RootState
 * @type {import("react-redux").TypedUseSelectorHook<RootState>}
 */
export const useTypedSelector = useSelector;
