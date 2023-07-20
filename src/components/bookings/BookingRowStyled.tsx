import styled, { css } from "styled-components";

const Row = styled.tr`
  border-top: 1px solid #d4d4d4;
  transition: box-shadow 0.2s;
  background-color: white;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 30px #00000014;
  }
`;

const GuestContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.8rem;
  margin-left: 4rem;

  img {
    border-radius: 8px;
    width: 4.5rem;
    min-width: 4.5rem;
    height: 4.5rem;
    min-height: 4.5rem;
    object-fit: cover;
  }
`;

const GuestName = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 500;
  color: #393939;
  margin: 0;
`;

const BookingID = styled.p`
  color: #799283;
  font-size: 1.4rem;
  font-family: var(--font-poppins);
  margin: 0;
`;

const DataContainer = styled.td`
  vertical-align: top;

  p {
    font-family: var(--font-poppins);
    color: #393939;
    font-size: 1.6rem;
    max-width: 30rem;
    padding-left: 4rem;
  }
`;

const DataContainerButton = styled.td`
  vertical-align: top;
  padding-right: 30px;

  button {
    background-color: transparent;
    border: none;
    margin-left: 60px;
    margin-top: 15px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

interface NotesButtonProps {
  type: string;
}

const NotesButton = styled.button<NotesButtonProps>`
  ${(props) => {
    if (props.type) {
      return css`
        background-color: white;
        font-family: var(--font-poppins);
        font-size: 1.6rem;
        font-weight: 400;
        width: 15rem;
        pointer-events: none;
        border: 1px solid #799283;
        color: #799283;
        border-radius: 12px;
        margin-left: 4rem;
        max-width: 16rem;
        padding: 1rem 3rem;
      `;
    } else {
      return css`
        transition: all 0.3s;
        font-family: var(--font-poppins);
        font-size: 1.6rem;
        font-weight: 600;
        width: 15rem;
        cursor: pointer;
        background-color: #eef9f2;
        color: #212121;
        border: none;
        border-radius: 12px;
        margin-left: 4rem;
        max-width: 16rem;
        padding: 1rem 3rem;
        &:hover {
          background-color: #0e3f32;
          color: white;
        }
      `;
    }
  }}
`;

interface StatusProps {
  $type: string;
}

const Status = styled.button<StatusProps>`
  width: 150px;
  border-style: none;
  ${(props) => {
    switch (props.$type) {
      case "Check In":
        return css`
          background-color: #e8ffee;
          font-family: var(--font-poppins);
          color: rgba(38, 166, 91, 1);
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 0.05rem;
          transition: background-color 0.3s;
          :hover {
            color: #e8ffee;
            background-color: rgba(38, 166, 91, 1);
          }
        `;
      case "Check Out":
        return css`
          background-color: #f9cac7;
          font-family: var(--font-poppins);
          color: #e23428;
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 0.05rem;
          transition: background-color 0.3s;
          :hover {
            color: #f9cac7;
            background-color: rgba(236, 100, 75, 1);
          }
        `;
      case "In Progress":
        return css`
          background-color: #fcffcd;
          font-family: var(--font-poppins);
          color: #ffbf00;
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 0.05rem;
          transition: background-color 0.3s;
          :hover {
            color: #fcffcd;
            background-color: #ffbf00;
          }
        `;
      default:
        return css`
          background-color: whitesmoke;
          font-family: var(--font-poppins);
          color: #393939;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.05rem;
        `;
    }
  }}
  padding: 13px 25px;
  border-radius: 12px;
  text-align: center;
  margin-left: 30px;
`;

const DropDown = styled.div`
  display: block;
  position: absolute;
  background-color: transparent;
  color: black;
  top: 50px;
  left: -5px;
  z-index: 2;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      text-decoration: none;
      button {
        margin: 0;
        width: 100%;
        height: fit-content;
        border-radius: 15px;
        padding: 10px 15px;
        background-color: white;
        display: block;
        border: 1px solid rgba(38, 166, 91, 1);
        color: black;
        font-family: var(--font-poppins);
        transition: all 0.3s;
        &:hover {
          background-color: #c5c5c5;
        }
      }
    }
  }
`;

export {
  Row,
  GuestContainer,
  GuestName,
  BookingID,
  DataContainer,
  DataContainerButton,
  NotesButton,
  Status,
  DropDown,
};
