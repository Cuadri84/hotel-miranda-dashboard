import styled from "styled-components";

const RoomNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.8rem;
  padding: 2.2rem 0 2.2rem 4rem;
  img {
    border-radius: 8px;
    width: 150px;
    height: 77px;
    object-fit: cover;
  }

  div {
    text-align: center;
  }
`;

const RoomId = styled.p`
  font-size: 1.4rem;
  color: #799283;
  font-family: var(--font-poppins);
  margin: 0;
`;

const RoomNumber = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 400;
  color: #393939;
  margin: 0;
`;

const DataContainer = styled.td`
  vertical-align: center;
`;

const DataContainerButton = styled.td`
  vertical-align: top;
  padding-right: 30px;
  position: relative;
  button {
    background-color: transparent;
    border: none;
    margin-left: 60px;
    margin-top: 15px;
    &:focus {
      outline: none;
    }
    svg {
      cursor: pointer;
    }
  }
`;

const RoomText = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 400;
  color: #393939;
  padding-left: 4rem;
  max-width: 30rem;
`;

const RoomPrice = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 600;
  padding-left: 4rem;
  max-width: 30rem;
  color: #212121;
  span {
    font-size: 1.4rem;
    color: #799283;
  }
`;

interface RoomStatusProps {
  status: string;
}

const RoomStatus = styled.button<RoomStatusProps>`
  width: 120px;
  border-style: none;
  background-color: ${(props) => props.status};
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 400;
  color: white;
  padding: 1.3rem 2.5rem;
  border-radius: 12px;
  text-align: center;
  margin-left: 4rem;
`;

export {
  RoomNameContainer,
  RoomId,
  RoomNumber,
  DataContainer,
  DataContainerButton,
  RoomText,
  RoomPrice,
  RoomStatus,
};
