import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";

export const getDataRooms = createAsyncThunk("contacts/fetchRooms", () => {
  return fetchData("Rooms");
});

export const getRoom = createAsyncThunk("room/GetRoomDetails", async (id) => {
  return await id;
});

export const deleteRoom = createAsyncThunk("rooms/DeleteRooms", async (id) => {
  return await id;
});

const initialState = {
  roomsList: [],
  status: "loading",
  singleRoom: "ramon",
  singleRoomStatus: "loading",
};

export const roomsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDataRooms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDataRooms.fulfilled, (state, action) => {
        state.status = "success";
        state.roomsList = action.payload;
      })
      .addCase(getDataRooms.rejected, (state) => {
        state.status = "failed";
        console.error("Not possible to fetch the contacts");
      });
    builder
      .addCase(getRoom.pending, (state) => {
        state.singleRoom = null;
        state.singleRoomStatus = "loading";
      })
      .addCase(getRoom.fulfilled, (state, action) => {
        state.singleRoomStatus = "success";
        state.singleRoom = state.roomsList.find(
          (room) => room.room_number === action.payload
        );
      })
      .addCase(getRoom.rejected, (state) => {
        state.singleRoomStatus = "failed";
        console.error("Not possible to fetch the room");
      });
    builder.addCase(deleteRoom.fulfilled, (state, action) => {
      state.roomsList = state.roomsList.filter(
        (room) => room.id !== action.payload
      );
    });
  },
});

export default roomsSlice.reducer;
