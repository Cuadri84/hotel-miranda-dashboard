// React
import React from "react";

// Styled Components
import styled, { css } from "styled-components";

interface PropsDropwdown {
  $type: string;
}

const DropdownMenuStyled = styled.select<PropsDropwdown>`
  ${(props) => {
    switch (props.$type) {
      case "green":
        return css`
          background-color: #135846;
          color: #ffffff;
        `;
      case "white":
        return css`
          background-color: white;
          border: 1px solid #135846;
          color: #135846;
          width: fit-content;
        `;
      default:
        return css``;
    }
  }};
  border-radius: 8px;
  font-weight: 500;
  font-family: var(--font-poppins);
  padding: 1.3rem 4rem;
  height: 50px;
  cursor: pointer;
  appearance: none;
  &:focus {
    outline: none;
  }
`;

// Dropdown component. It is given a number of options depending on in which page the dropdown is being used
interface DropdownMenuProps {
  type: string;
  options: string[];
  onSelect: (value: string) => void;
  selected?: string | null;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  type,
  options,
  onSelect,
  selected,
}) => {
  return (
    <div style={{ position: "relative" }}>
      <DropdownMenuStyled
        defaultValue={selected ? selected : "Manager"}
        $type={type}
        name="position"
        onChange={(e) => onSelect(e.target.value)}
      >
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </DropdownMenuStyled>
      <svg
        style={{ position: "absolute", top: "15%", right: "5%" }}
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        width="25"
        viewBox="0 0 48 48"
        fill="#135846"
      >
        <path d="M24 31.9 10.8 18.7l3.35-3.35 9.85 9.9 9.85-9.85 3.35 3.35Z" />
      </svg>
    </div>
  );
};

export { DropdownMenu, DropdownMenuProps };
