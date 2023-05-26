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

export { SidebarContainer };
