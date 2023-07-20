// React & Router
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Redux
import { RootStateOrAny, useDispatch } from "react-redux";
import { getDataRooms } from "../../features/roomsSlice";
import { useTypedSelector } from "../../store/store";

// Styled Components
import {
  Table,
  HeaderTitle,
  TableActions,
  TableFilters,
  FilterButton,
  TableButtons,
} from "../../components/styled/Tables";

//Components
import { Container } from "../../components/styled/ContainerStyled";
import {
  DropdownMenu,
  DropdownMenuProps,
} from "../../components/styled/DropDownMenu";
import { Loader } from "../../components/styled/Loader";
import { CreateButton } from "../../components/styled/ButtonsStyled";
import { RoomRow } from "../../components/rooms/RoomRow";
import { IRoom } from "../../features/interfaces/interfaces";

export const Rooms: React.FC = () => {
  const dispatch = useDispatch();
  const { roomsList, status } = useTypedSelector(
    (state: RootStateOrAny) => state.rooms
  );

  const [rooms, setRooms] = useState<IRoom[]>(roomsList);
  const [activeFilter, setActiveFilter] = useState("Room Nr.");

  useEffect(() => {
    if (status === "idle") dispatch(getDataRooms());
  }, [roomsList, dispatch, status]);

  const getAllRooms = () => {
    setRooms(roomsList);
  };

  const filterByType = (type: string) => {
    setRooms(roomsList.filter((room: IRoom) => room.room_status === type));
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

  const handleSelect = (value: string) => {
    setActiveFilter(value);
  };

  const dropdownMenuProps: DropdownMenuProps = {
    type: "white",
    options: ["Room Nr.", "Highest rate first", "Lowest rate first"],
    onSelect: handleSelect,
  };

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
          <DropdownMenu {...dropdownMenuProps} />
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
                <RoomRow key={rooms._id} room={rooms} />
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
};
