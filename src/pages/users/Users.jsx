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
  InputText,
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
  const { status } = useTypedSelector((state) => state.users);
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState(usersList);
  const [activeFilter, setActiveFilter] = useState("Start date");

  useEffect(() => {
    dispatch(getDataUsers());
  }, []);

  const getAllUsers = () => {
    setUsers(usersList);
  };
  const filterByType = (type) => {
    setUsers(usersList.filter((user) => user.state === type));
  };

  useEffect(() => {
    setUsers(
      usersList.filter((user) => user.name.toLowerCase().includes(query))
    );
  }, [query, usersList]);

  useEffect(() => {
    const orderedUsers = [...usersList];
    switch (activeFilter) {
      case "Start date":
        orderedUsers.sort((a, b) => {
          let dateA = a.date;
          let dateB = b.date;
          if (dateB.split("/").join() > dateA.split("/").join()) {
            return -1;
          } else {
            return 1;
          }
        });
        break;
      case "Name":
        orderedUsers.sort((a, b) => {
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
    setUsers(orderedUsers);
  }, [activeFilter, usersList]);

  return (
    <>
      <TableActions>
        <TableFilters>
          <FilterButton onClick={getAllUsers}>All Employees</FilterButton>
          <FilterButton onClick={() => filterByType("ACTIVE")}>
            Active Employees
          </FilterButton>
          <FilterButton onClick={() => filterByType("INACTIVE")}>
            Inactive Employees
          </FilterButton>
        </TableFilters>

        <InputText
          placeholder="Search Employee"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></InputText>

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
      {status === "loading" ? (
        <Loader />
      ) : (
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
              {users.map((user) => (
                <UserRow key={user.id} user={user} />
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
};
