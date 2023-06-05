import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { getDataBookings } from "../../features/bookingSlice";
import { useTypedSelector } from "../../store/store";

// Styled Components
import {
  Table,
  HeaderTitle,
  TableActions,
  TableFilters,
  FilterButton,
  TableButtons,
} from "../../components/styled/Tables.jsx";

//Components
import { Container } from "../../components/styled/ContainerStyled.jsx";
import { DropdownMenu } from "../../components/styled/DropDownMenu.jsx";
import { CreateButton } from "../../components/styled/ButtonsStyled.jsx";
import { BookingRow } from "../../components/bookings/BookingRow.jsx";

export const Bookings = () => {
  const dispatch = useDispatch();
  const { bookingsList } = useTypedSelector((state) => state.bookings);

  //para hacer el loader
  const { status } = useTypedSelector((state) => state.bookings);

  const [activeFilter, setActiveFilter] = useState("Order Date");

  useEffect(() => {
    dispatch(getDataBookings());
  }, []);

  return (
    <>
      {" "}
      <TableActions>
        <TableFilters>
          <FilterButton>All Bookings</FilterButton>
          <FilterButton>Check In</FilterButton>
          <FilterButton>Check Out</FilterButton>
          <FilterButton>In Progress</FilterButton>
        </TableFilters>
        <TableButtons>
          <CreateButton>
            <NavLink to="/newBooking">+ New Booking</NavLink>
          </CreateButton>
          <DropdownMenu
            setActiveFilter={setActiveFilter}
            type="white"
            options={["Order Date", "Guest", "Check In", "Check Out"]}
          ></DropdownMenu>
        </TableButtons>
      </TableActions>
      <Container>
        <Table>
          <thead>
            <tr>
              <HeaderTitle>Guest</HeaderTitle>
              <HeaderTitle>Order Date</HeaderTitle>
              <HeaderTitle>Check In</HeaderTitle>
              <HeaderTitle>Check Out</HeaderTitle>
              <HeaderTitle>Special Request</HeaderTitle>
              <HeaderTitle>Room type</HeaderTitle>
              <HeaderTitle>Status</HeaderTitle>
            </tr>
          </thead>
          <tbody>
            {bookingsList.map((booking) => (
              <BookingRow key={booking.id} booking={booking} />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
