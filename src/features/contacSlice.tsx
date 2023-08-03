import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IContact } from "./interfaces/interfaces";
import { URI } from "./bookingSlice";

export const getDataContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const result = await fetch(`${URI}/contact`)
      .then((res) => res.json())
      .then((data) => data);

    return result as IContact[];
  }
);

export const archiveContact = createAsyncThunk(
  "contacts/archivedContact",
  async (_id: string) => {
    try {
      const response = await fetch(`${URI}/contact/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ archived: true }),
      });

      if (!response.ok) {
        throw new Error("Failed to archive contact");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error("Failed to archive contact");
    }
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
      const updatedContact = action.payload;

      const index = state.contactsList.findIndex(
        (contact) => contact._id === updatedContact._id
      );

      if (state.contactsList) {
        if (index !== -1 && index < state.contactsList.length) {
          state.contactsList[index] = updatedContact;
        }
      }
    });
  },
});

export default contactSlice.reducer;
