import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import { RoomStatus } from "./components/rooms/RoomRowStyled";

afterEach(cleanup);

test("Renders green tag with text AVAILABLE if the current room is available", () => {
  const roomStatus = "Available";
  render(<RoomStatus status={"#5AD07A"}>{roomStatus}</RoomStatus>);

  const button = screen.getByRole("button", { name: roomStatus });

  expect(button).toHaveStyle(`backgroundColor:"#5AD07A"`);
});

test("Renders red tag with text Booked if the current room is available", () => {
  const roomStatus = "";
  render(<RoomStatus status={"#E23428"}>{roomStatus}</RoomStatus>);

  const buttonRed = screen.getByRole("button", { name: roomStatus });

  expect(buttonRed).toHaveStyle(`backgroundColor:"#E23428"`);
});
