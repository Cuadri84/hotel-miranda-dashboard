import styled from "styled-components";

const SidebarContainer = styled.div`
  width: ${(props) => props.display};
  min-width: ${(props) => props.display};
  max-height: ${(props) => props.adjustHeight};
  box-shadow: 13px 3px 40px #00000005;
  background-color: #ffffff;
  transition: all 0.3s;
  overflow: visible;
  position: relative;
`;
const ArrowButton = styled.button`
  position: absolute;
  left: 30rem;
  top: -8rem;
  background-color: transparent;
  border: none;
  width: fit-content;
  height: fit-content;
  img {
    height: 2.5em;
    width: 2.5em;
  }
`;

const Navigation = styled.nav`
  overflow: hidden;
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    a {
      text-decoration: none;
    }
  }
`;

const Link = styled.li`
  width: 70%;
  transition: all 0.2s;
  &:hover p,
  &:hover svg {
    fill: #e23428;
    color: #e23428;
  }
  a {
    display: flex;
    height: 7rem;
    border-radius: 6px;
    align-items: center;
    gap: 2rem;
    div {
      margin-right: 15%;
      transition: background-color 0.2s;
      width: 0.8rem;
      height: 100%;
      background-color: ${(props) => {
        if (props.route === props.current) {
          return "#E23428";
        } else {
          return "#FFFFFF";
        }
      }};
      border-radius: 0 8px 8px 0;
    }
    p {
      color: ${(props) => {
        if (props.route === props.current) {
          return "#E23428";
        } else {
          return "#799283";
        }
      }};
      font-family: var(--font-poppins);
      font-size: 1.8rem;
      text-decoration: none;
    }
    svg {
      fill: ${(props) => {
        if (props.route === props.current) {
          return "#E23428";
        } else {
          return "#799283";
        }
      }};
    }
  }
`;

const UserCard = styled.div`
  padding-bottom: 4rem;
  padding-top: 0rem;
  overflow: hidden;
`;
const NavigationDescription = styled.p`
  margin: 0;
  padding-left: 15%;
  overflow: hidden;
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 600;
  color: #212121;
`;

const NavigationRights = styled.p`
  margin: 0;
  padding-left: 15%;
  overflow: hidden;
  color: #799283;
  font-size: 1.4rem;
`;

const NavigationAuthor = styled.p`
  padding-left: 15%;
  overflow: hidden;
  color: #799283;
  font-size: 1.4rem;
  margin-top: 1rem;
  img {
    height: 1.1em;
    width: 1.1em;
  }
`;

export {
  SidebarContainer,
  ArrowButton,
  Navigation,
  Link,
  UserCard,
  NavigationDescription,
  NavigationRights,
  NavigationAuthor,
};
