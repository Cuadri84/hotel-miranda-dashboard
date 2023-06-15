import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import { RoomStatus } from "./components/rooms/RoomRowStyled";

afterEach(cleanup);

test("Renders green tag with text AVAILABLE if the current room is available", () => {
  const roomStatus = "Available";
  render(<RoomStatus status={roomStatus}>{roomStatus}</RoomStatus>);

  const button = screen.getByRole("button", { name: roomStatus });
  console.log(button);

  expect(button).toHaveStyle(`backgroundColor: rgb(90, 208, 122)`);
});

test("Renders red tag with text Booked if the current room is available", () => {
  const roomStatus = "";
  render(<RoomStatus status={roomStatus}>{roomStatus}</RoomStatus>);

  const button = screen.getByRole("button", { name: roomStatus });
  console.log(button);

  expect(button).toHaveStyle(`backgroundColor: rgb(226, 52, 40)`);
});
