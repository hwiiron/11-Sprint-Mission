import styled from "styled-components";

interface TypeProps {
  type?: string;
  disabled?: boolean;
}

const StyledButton = styled.div<TypeProps>`
  border-radius: 8px;
  background: var(--blue);
  height: 42px;
  display: flex;
  align-items: center;
  color: var(--white);
  padding: ${(props) => {
    switch (props.type) {
      case "LOGIN":
        return "0 43px";
      default:
        return "0 23px";
    }
  }};

  &:disabled {
    background: var(--gray400);
    cursor: auto;
  }
`;

export default StyledButton;
