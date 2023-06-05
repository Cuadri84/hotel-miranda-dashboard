import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";

export const getDataContacts = createAsyncThunk(
  "contacts/fetchContacts",
  () => {
    return fetchData("Contacts");
  }
);

const initialState = {
  contactsList: [],
  status: "loading",
};

export const conctactSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDataContacts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDataContacts.fulfilled, (state, action) => {
        state.status = "success";
        state.contactsList = action.payload;
      })
      .addCase(getDataContacts.rejected, (state) => {
        state.status = "failed";
        console.error("Not possible to fetch the contacts");
      });
  },
});

export default conctactSlice.reducer;
