import React, { useEffect, useState } from "react";

// Redux
import { useDispatch, RootStateOrAny } from "react-redux";
import { getDataContacts } from "../../features/contacSlice";
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
import { ContactSwiper } from "../../components/ContactSwiper/ContactSwiper";

import { Container } from "../../components/styled/ContainerStyled";
import { ContactSwiperContainer } from "../dashboard/DashboardStyled";
import {
  DropdownMenu,
  DropdownMenuProps,
} from "../../components/styled/DropDownMenu";
import { ContactRow } from "../../components/contacts/ContactRow";
import { Loader } from "../../components/styled/Loader";
import { IContact } from "../../features/interfaces/interfaces";

export const Contact: React.FC = () => {
  const dispatch = useDispatch();
  const { contactsList, status } = useTypedSelector(
    (state: RootStateOrAny) => state.contacts
  );

  const [contacts, setContacts] = useState<IContact[]>(contactsList);

  useEffect(() => {
    if (status === "idle") dispatch(getDataContacts());
  }, [contactsList, dispatch, status]);

  const getAllContacts = () => {
    setContacts(contactsList);
  };

  const filterByType = (type: boolean) => {
    setContacts(
      contactsList.filter((contact: IContact) => contact.archived === type)
    );
  };

  const [activeFilter, setActiveFilter] = useState<string>("Date");

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
      case "Name":
        orderedContacts.sort((a, b) => {
          const nameA = a.name.toUpperCase().replace(/\s/g, "");
          const nameB = b.name.toUpperCase().replace(/\s/g, "");
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

  const handleSelect = (value: string) => {
    setActiveFilter(value);
  };

  const dropdownMenuProps: DropdownMenuProps = {
    type: "white",
    options: ["Date", "Name"],
    onSelect: handleSelect,
  };

  return (
    <>
      <ContactSwiperContainer variant="">
        <ContactSwiper />
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
                <HeaderTitle>Customer</HeaderTitle>
                <HeaderTitle>Date</HeaderTitle>
                <HeaderTitle>Subject</HeaderTitle>
                <HeaderTitle>Comment</HeaderTitle>
                <HeaderTitle>Action</HeaderTitle>
              </tr>
            </thead>
            <tbody className="task-container">
              {contacts.map((contact) => (
                <ContactRow key={contact._id} contact={contact} />
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
};
