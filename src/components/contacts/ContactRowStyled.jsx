import styled from "styled-components";

const DataContainer = styled.td`
  vertical-align: top;
  div {
    padding-top: 1rem;
    padding-left: 4rem;
    svg {
      fill: #135846;
    }
  }
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
    margin: 1.5rem 2rem 0 4rem;
    width: 24px;
    height: 24px;
    cursor: pointer;
    padding: 0;
    font-family: var(--font-poppins);
    font-size: 1.6rem;
    &.green {
      color: #5ad07a;
    }
    &.red {
      color: #e23428;
    }
  }
`;

export { DataContainer, DataContainerButton };
