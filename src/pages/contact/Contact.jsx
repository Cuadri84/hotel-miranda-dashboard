import React, { useState } from "react";

// Styled Components
import {
  Table,
  HeaderTitle,
  TableActions,
  TableFilters,
  FilterButton,
  TableButtons,
} from "../../components/styled/Tables.jsx";

//Data
import contacts from "../../data/contact.json";

//Components
import { ContactSwiper } from "../../components/ContactSwiper/ContactSwiper";
import { Container } from "../../components/styled/ContainerStyled";
import { ContactSwiperContainer } from "../dashboard/DashboardStyled";
import { DropdownMenu } from "../../components/styled/DropDownMenu.jsx";
import { ContactRow } from "../../components/contacts/ContactRow.jsx";

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
      <Container>
        <Table>
          <thead>
            <tr>
              <HeaderTitle>Order ID</HeaderTitle>
              <HeaderTitle>Date</HeaderTitle>
              <HeaderTitle>Customer</HeaderTitle>
              <HeaderTitle>Comment</HeaderTitle>
              <HeaderTitle>Action</HeaderTitle>
            </tr>
          </thead>
          <tbody className="task-container">
            {contacts.map((contact) => (
              <ContactRow key={contact.id} contact={contact} />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
