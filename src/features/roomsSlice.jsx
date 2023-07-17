import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDelay } from "../functions/extras";
import { fetchData } from "./fetchData";

export const getDataRooms = createAsyncThunk("rooms/fetchRooms", async () => {
  const result = await addDelay(fetchData("Rooms"), 200);
  return result;
});

export const getRoom = createAsyncThunk(
  "room/GetRoomDetails",
  async (id: string) => {
    const result = await id;
    return result;
  }
);

export const deleteRoom = createAsyncThunk(
  "rooms/DeleteRooms",
  async (id: string) => {
    const result = await id;
    return result;
  }
);

export const editRoom = createAsyncThunk(
  "rooms/EditRoom",
  async (id: string) => {
    const result = await id;
    return result;
  }
);

export const createNewRoom = createAsyncThunk(
  "rooms/CreateRoom",
  async (newRoom: any) => {
    const result = await newRoom;
    return result;
  }
);

interface RoomState {
  roomsList: any[];
  status: "idle" | "loading" | "success" | "failed";
  singleRoom: any;
  singleRoomStatus: "loading" | "success" | "failed";
}

const initialState: RoomState = {
  roomsList: [],
  status: "idle",
  singleRoom: null,
  singleRoomStatus: "loading",
};

export const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
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
        console.error("Not possible to fetch the rooms");
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
    builder.addCase(createNewRoom.fulfilled, (state, action) => {
      state.roomsList = [...state.roomsList, action.payload];
    });
    builder.addCase(editRoom.fulfilled, (state, action) => {
      state.roomsList = state.roomsList.map((room) => {
        return room.id === action.payload.id ? action.payload : room;
      });
      state.singleRoom = null;
    });
  },
});

export default roomsSlice.reducer;
