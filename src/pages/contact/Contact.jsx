import React, { useState, useEffect } from "react";

// Styled Components
import {
  Table,
  HeaderTitle,
  TableActions,
  TableFilters,
  FilterButton,
  TableButtons,
} from "../../components/styled/Tables.jsx";

import { ContactSwiper } from "../../components/ContactSwiper/ContactSwiper";
import { Container } from "../../components/styled/ContainerStyled";
import { ContactSwiperContainer } from "../dashboard/DashboardStyled";
import { DropdownMenu } from "../../components/styled/DropDownMenu.jsx";

export const Contact = () => {
  const [activeFilter, setActiveFilter] = useState("Date");
  return (
    <>
      {" "}
      <ContactSwiperContainer>
        <ContactSwiper></ContactSwiper>
      </ContactSwiperContainer>
      <TableActions>
        <TableFilters>
          <FilterButton>All Customer Reviews</FilterButton>
          <FilterButton>Archived</FilterButton>
        </TableFilters>
        <TableButtons>
          <DropdownMenu
            setActiveFilter={setActiveFilter}
            type="white"
            options={["Date", "User"]}
          ></DropdownMenu>
        </TableButtons>
      </TableActions>
    </>
  );
};
