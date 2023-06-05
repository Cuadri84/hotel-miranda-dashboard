// React & Router
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { getDataUsers } from "../../features/usersSlice";
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
import { DropdownMenu } from "../../components/styled/DropDownMenu";
import { Loader } from "../../components/styled/Loader";
import { CreateButton } from "../../components/styled/ButtonsStyled";
import { UserRow } from "../../components/users/UserRow";

export const Users = () => {
  const dispatch = useDispatch();
  const { usersList } = useTypedSelector((state) => state.users);

  //para hacer el loader
  const { status } = useTypedSelector((state) => state.users);

  const [activeFilter, setActiveFilter] = useState("Start date");

  useEffect(() => {
    dispatch(getDataUsers());
  }, []);

  return (
    <>
      <TableActions>
        <TableFilters>
          <FilterButton>All Employees</FilterButton>
          <FilterButton>Active Employees</FilterButton>
          <FilterButton>Inactive Employees</FilterButton>
        </TableFilters>
        <TableButtons>
          <CreateButton>
            <NavLink to="/newUser">+ New User</NavLink>
          </CreateButton>
          <DropdownMenu
            setActiveFilter={setActiveFilter}
            type="white"
            options={["Start date", "Name"]}
          ></DropdownMenu>
        </TableButtons>
      </TableActions>
      <Container>
        <Table>
          <thead>
            <tr>
              <HeaderTitle>Name</HeaderTitle>
              <HeaderTitle>Job Desk</HeaderTitle>
              <HeaderTitle>Contact</HeaderTitle>
              <HeaderTitle>Status</HeaderTitle>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
