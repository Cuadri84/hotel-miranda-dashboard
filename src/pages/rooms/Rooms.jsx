// React & Router
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { getDataRooms } from "../../features/roomsSlice";
import { useTypedSelector } from "../../store/store";

// Styled Components
import {
  FilterButton,
  HeaderTitle,
  Table,
  TableActions,
  TableButtons,
  TableFilters,
} from "../../components/styled/Tables";

//Components
import { RoomRow } from "../../components/rooms/RoomRow";
import { CreateButton } from "../../components/styled/ButtonsStyled";
import { Container } from "../../components/styled/ContainerStyled";
import { DropdownMenu } from "../../components/styled/DropDownMenu";
import { Loader } from "../../components/styled/Loader";

export const Rooms = () => {
  const dispatch = useDispatch();
  const { roomsList } = useTypedSelector((state) => state.rooms);
  const { status } = useTypedSelector((state) => state.rooms);
  const [rooms, setRooms] = useState(roomsList);
  const [activeFilter, setActiveFilter] = useState("Room Nr.");

  useEffect(() => {
    if (status === "idle") dispatch(getDataRooms());
  }, [roomsList, dispatch, status]);

  const getAllRooms = () => {
    setRooms(roomsList);
  };

  const filterByType = (type) => {
    setRooms(roomsList.filter((room) => room.room_status === type));
  };

  useEffect(() => {
    const orderedRooms = [...roomsList];
    switch (activeFilter) {
      case "Room Nr.":
        orderedRooms.sort((a, b) => a.room_number - b.room_number);
        break;
      case "Highest rate first":
        orderedRooms.sort((a, b) => b.room_rate - a.room_rate);
        break;
      case "Lowest rate first":
        orderedRooms.sort((a, b) => a.room_rate - b.room_rate);
        break;
      default:
        break;
    }
    setRooms(orderedRooms);
  }, [activeFilter, roomsList]);

  return (
    <>
      {" "}
      <TableActions>
        <TableFilters>
          <FilterButton onClick={getAllRooms}>All Rooms</FilterButton>
          <FilterButton onClick={() => filterByType("Available")}>
            Available Rooms
          </FilterButton>
          <FilterButton onClick={() => filterByType("Booked")}>
            Booked Rooms
          </FilterButton>
        </TableFilters>
        <TableButtons>
          <CreateButton>
            <NavLink to="/newRoom">+ New Room</NavLink>
          </CreateButton>
          <DropdownMenu
            setActiveFilter={setActiveFilter}
            type="white"
            options={["Room Nr.", "Highest rate first", "Lowest rate first"]}
          ></DropdownMenu>
        </TableButtons>
      </TableActions>
      {status === "loading" ? (
        <Loader />
      ) : (
        <Container>
          <Table>
            {" "}
            <thead>
              <tr>
                <HeaderTitle>Room Name</HeaderTitle>
                <HeaderTitle>Bed Type</HeaderTitle>
                <HeaderTitle>Facilities</HeaderTitle>
                <HeaderTitle>Rate</HeaderTitle>
                <HeaderTitle>Offer Price</HeaderTitle>
                <HeaderTitle>Status</HeaderTitle>
              </tr>
            </thead>
            <tbody>
              {rooms.map((rooms) => (
                <RoomRow key={rooms.id} room={rooms} />
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
};
