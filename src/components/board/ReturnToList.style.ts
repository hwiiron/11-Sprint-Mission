import styled from "styled-components";
import ReturnToList from "./ReturnToList";

const StyledReturnToList = styled(ReturnToList)`
  display: flex;
  justify-content: center;

  a {
    border-radius: 40px;
    background: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 240px;
    height: 48px;
    color: #f3f4f6;
  }

  a div {
    width: 24px;
    height: 24px;
    margin-left: 8px;
  }

  @media (max-width: 1200px) {
    a {
      font-size: 18px;
    }
  }
`;

export default StyledReturnToList;
