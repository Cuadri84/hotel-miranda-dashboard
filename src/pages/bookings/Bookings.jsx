import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// Styled Components
import {
  Table,
  HeaderTitle,
  TableActions,
  TableFilters,
  FilterButton,
  TableButtons,
} from "../../components/styled/Tables.jsx";

import { Container } from "../../components/styled/ContainerStyled.jsx";
import { DropdownMenu } from "../../components/styled/DropDownMenu.jsx";
import { Loader } from "../../components/styled/Loader.jsx";
import { CreateButton } from "../../components/styled/ButtonsStyled.jsx";
export const Bookings = () => {
  const [activeFilter, setActiveFilter] = useState("Order Date");
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
    </>
  );
};
