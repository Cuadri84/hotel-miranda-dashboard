import React, { useEffect, useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { getDataContacts } from "../../features/contacSlice";
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
import { ContactSwiper } from "../../components/ContactSwiper/ContactSwiper";
import { Container } from "../../components/styled/ContainerStyled";
import { ContactSwiperContainer } from "../dashboard/DashboardStyled";
import { DropdownMenu } from "../../components/styled/DropDownMenu.jsx";
import { ContactRow } from "../../components/contacts/ContactRow.jsx";
import { Loader } from "../../components/styled/Loader";

export const Contact = () => {
  const dispatch = useDispatch();
  const { contactsList } = useTypedSelector((state) => state.contacts);
  const { status } = useTypedSelector((state) => state.contacts);
  const [contacts, setContacts] = useState(contactsList);

  useEffect(() => {
    if (status === "idle") dispatch(getDataContacts());
  }, [contacts, dispatch, status]);

  const getAllContacts = () => {
    setContacts(contactsList);
  };

  const filterByType = (type) => {
    setContacts(contactsList.filter((contact) => contact.archived === type));
  };

  const [activeFilter, setActiveFilter] = useState("Date");

  useEffect(() => {
    const orderedContacts = [...contactsList];
    switch (activeFilter) {
      case "Date":
        orderedContacts.sort((a, b) => {
          let dateA = a.date;
          let dateB = b.date;
          if (dateB.split("-").join() < dateA.split("-").join()) {
            return -1;
          } else {
            return 1;
          }
        });
        break;
      case "User":
        orderedContacts.sort((a, b) => {
          const nameA = a.user.name.toUpperCase().replace(/\s/g, "");
          const nameB = b.user.name.toUpperCase().replace(/\s/g, "");
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        break;
      default:
        break;
    }
    setContacts(orderedContacts);
  }, [activeFilter, contactsList]);

  return (
    <>
      {" "}
      <ContactSwiperContainer>
        <ContactSwiper></ContactSwiper>
      </ContactSwiperContainer>
      <TableActions>
        <TableFilters>
          <FilterButton onClick={() => getAllContacts()}>
            All Customer Reviews
          </FilterButton>
          <FilterButton onClick={() => filterByType(true)}>
            Archived
          </FilterButton>
        </TableFilters>
        <TableButtons>
          <DropdownMenu
            setActiveFilter={setActiveFilter}
            type="white"
            options={["Date", "User"]}
          ></DropdownMenu>
        </TableButtons>
      </TableActions>
      {status === "loading" ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};
