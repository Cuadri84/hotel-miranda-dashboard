import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Redux
import { RootStateOrAny, useDispatch } from "react-redux";
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
  InputText,
} from "../../components/styled/Tables";

//Components
import { Container } from "../../components/styled/ContainerStyled";
import {
  DropdownMenu,
  DropdownMenuProps,
} from "../../components/styled/DropDownMenu";
import { Loader } from "../../components/styled/Loader";
import { CreateButton } from "../../components/styled/ButtonsStyled";
import { BookingRow } from "../../components/bookings/BookingRow";
import { Booking } from "../../features/interfaces/interfaces";

export const Bookings: React.FC = () => {
  const dispatch = useDispatch();
  const { bookingsList, status } = useTypedSelector(
    (state: RootStateOrAny) => state.bookings
  );
  const [query, setQuery] = useState("");
  const [bookings, setBookings] = useState<Booking[]>(bookingsList);
  const [activeFilter, setActiveFilter] = useState("Order Date");

  useEffect(() => {
    if (status === "idle") dispatch(getDataBookings());
  }, [bookingsList, dispatch, status]);

  const getAllBookings = () => {
    setBookings(bookingsList);
  };

  const filterByType = (type: string) => {
    setBookings(
      bookingsList.filter((booking: Booking) => booking.status === type)
    );
  };

  useEffect(() => {
    setBookings(
      bookingsList.filter((booking: Booking) =>
        booking.name.toLowerCase().includes(query)
      )
    );
  }, [query, bookingsList]);

  useEffect(() => {
    const orderedBookings = [...bookingsList];
    switch (activeFilter) {
      case "Order Date":
        orderedBookings.sort((a, b) => {
          let dateA = a.orderDate.slice(0, 10);
          let dateB = b.orderDate.slice(0, 10);
          if (
            dateB.split("/").reverse().join() <
            dateA.split("/").reverse().join()
          ) {
            return -1;
          } else {
            return 1;
          }
        });
        break;
      case "Guest":
        orderedBookings.sort((a, b) => {
          const nameA = a.userName.toUpperCase().replace(/\s/g, "");
          const nameB = b.userName.toUpperCase().replace(/\s/g, "");
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        break;
      case "Check In":
        orderedBookings.sort((a, b) => a.room_rate - b.room_rate);
        break;
      case "Check Out":
        orderedBookings.sort((a, b) => a.room_rate - b.room_rate);
        break;
      default:
        break;
    }
    setBookings(orderedBookings);
  }, [activeFilter, bookingsList]);

  const handleSelect = (value: string) => {
    setActiveFilter(value);
  };

  const dropdownMenuProps: DropdownMenuProps = {
    type: "white",
    options: ["Order Date", "Guest", "Check In", "Check Out"],
    onSelect: handleSelect,
  };

  return (
    <>
      <TableActions>
        <TableFilters>
          <FilterButton onClick={getAllBookings}>All Bookings</FilterButton>
          <FilterButton onClick={() => filterByType("Check In")}>
            Check In
          </FilterButton>
          <FilterButton onClick={() => filterByType("Check Out")}>
            Check Out
          </FilterButton>
          <FilterButton onClick={() => filterByType("In Progress")}>
            In Progress
          </FilterButton>
        </TableFilters>
        <InputText
          placeholder="Search Booking"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></InputText>
        <TableButtons>
          <CreateButton>
            <NavLink to="/newBooking">+ New Booking</NavLink>
          </CreateButton>
          <DropdownMenu {...dropdownMenuProps} />
        </TableButtons>
      </TableActions>
      {status === "loading" ? (
        <Loader />
      ) : (
        <Container>
          <Table>
            <thead>
              <tr>
                <HeaderTitle>Guest</HeaderTitle>
                <HeaderTitle>Order Date</HeaderTitle>
                <HeaderTitle>Check In</HeaderTitle>
                <HeaderTitle>Check Out</HeaderTitle>
                <HeaderTitle>Special Request</HeaderTitle>
                <HeaderTitle>Room Number</HeaderTitle>
                <HeaderTitle>Status</HeaderTitle>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <BookingRow key={booking.id} booking={booking} />
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
};
