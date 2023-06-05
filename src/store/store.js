import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "../features/contacSlice";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
  },
});

/**
 * Añadir hint en useSelector
 * @typedef {ReturnType<typeof store.getState>} RootState
 * @type {import("react-redux").TypedUseSelectorHook<RootState>}
 */
export const useTypedSelector = useSelector;
