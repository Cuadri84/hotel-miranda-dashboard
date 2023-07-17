import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDelay } from "../functions/extras";
import { fetchData } from "./fetchData";

export const getDataContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const result = await addDelay(fetchData("Contacts"), 200);
    return result;
  }
);

export const archiveContact = createAsyncThunk(
  "contacts/archivedContact",
  async (id: string) => {
    const result = await id;
    return result;
  }
);

interface ContactState {
  contactsList: any[];
  status: "idle" | "loading" | "success" | "failed";
}

const initialState: ContactState = {
  contactsList: [],
  status: "idle",
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
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
    builder.addCase(archiveContact.fulfilled, (state, action) => {
      const index = state.contactsList.findIndex(
        (contact) => contact.id === action.payload
      );
      state.contactsList[index].archived = !state.contactsList[index].archived;
    });
  },
});

export default contactSlice.reducer;
