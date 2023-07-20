import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IRoom } from "./interfaces/interfaces";

export const getDataRooms = createAsyncThunk("rooms/fetchRooms", async () => {
  const result = await fetch("http://localhost:3001/rooms")
    .then((res) => res.json())
    .then((data) => data);

  return result as IRoom[];
});

export const getRoom = createAsyncThunk(
  "room/GetRoomDetails",
  async (_id: string) => {
    const result = await fetch(`http://localhost:3001/rooms/${_id}`)
      .then((res) => res.json())
      .then((data) => data);
    return result;
  }
);

export const deleteRoom = createAsyncThunk<string, string>(
  "rooms/DeleteRooms",
  async (_id) => {
    await fetch(`http://localhost:3001/rooms/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => data);
    return _id;
  }
);

export const createNewRoom = createAsyncThunk<IRoom, IRoom>(
  "rooms/CreateRoom",
  async (newRoom) => {
    const response = await fetch(`http://localhost:3001/rooms/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRoom),
    });

    if (!response.ok) {
      throw new Error("Failed to create Room");
    }

    const result = await response.json();

    return result;
  }
);

export const editRoom = createAsyncThunk<IRoom, { _id: string; room: IRoom }>(
  "rooms/EditRoom",
  async ({ _id, room }) => {
    const response = await fetch(`http://localhost:3001/rooms/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(room),
    });

    if (!response.ok) {
      throw new Error("Failed to edit room");
    }

    const result = await response.json();

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
        state.singleRoom = action.payload;
      })
      .addCase(getRoom.rejected, (state) => {
        state.singleRoomStatus = "failed";
        console.error("Not possible to fetch the room");
      });
    builder.addCase(deleteRoom.fulfilled, (state, action) => {
      state.roomsList = state.roomsList.filter(
        (room) => room._id !== action.payload
      );
    });
    builder.addCase(createNewRoom.fulfilled, (state, action) => {
      state.roomsList = [...state.roomsList, action.payload];
    });
    builder.addCase(editRoom.fulfilled, (state, action) => {
      state.roomsList = state.roomsList.map((room) => {
        return room.id === action.payload._id ? action.payload : room;
      });
      state.singleRoom = null;
    });
  },
});

export default roomsSlice.reducer;
