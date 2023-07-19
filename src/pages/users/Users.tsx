// React & Router
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Redux
import { RootStateOrAny, useDispatch } from "react-redux";
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

import { IUser } from "../../features/interfaces/interfaces";

//Components
import { Container } from "../../components/styled/ContainerStyled";
import {
  DropdownMenu,
  DropdownMenuProps,
} from "../../components/styled/DropDownMenu";
import { Loader } from "../../components/styled/Loader";
import { CreateButton } from "../../components/styled/ButtonsStyled";
import { UserRow } from "../../components/users/UserRow";

export const Users: React.FC = () => {
  const dispatch = useDispatch();
  const { usersList, status } = useTypedSelector(
    (state: RootStateOrAny) => state.users
  );
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState<IUser[]>(usersList);
  const [activeFilter, setActiveFilter] = useState("Start date");

  useEffect(() => {
    if (status === "idle") dispatch(getDataUsers());
  }, [usersList, dispatch, status]);

  const getAllUsers = () => {
    setUsers(usersList);
  };

  const filterByType = (type: "ACTIVE" | "INACTIVE") => {
    setUsers(usersList.filter((user: IUser) => user.state === type));
  };

  useEffect(() => {
    setUsers(
      usersList.filter((user: IUser) => user.name.toLowerCase().includes(query))
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

  const handleSelect = (value: string) => {
    setActiveFilter(value);
  };

  const dropdownMenuProps: DropdownMenuProps = {
    type: "white",
    options: ["Start Date", "Name"],
    onSelect: handleSelect,
  };

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
                <HeaderTitle>Name</HeaderTitle>
                <HeaderTitle>Job Desk</HeaderTitle>
                <HeaderTitle>Contact</HeaderTitle>
                <HeaderTitle>Status</HeaderTitle>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserRow key={user._id} user={user} />
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
};
