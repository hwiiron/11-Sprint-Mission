import styled from "styled-components";
import searchIcon from "../../assets/boards/searchInput_icon.svg";

const StyledInput = styled.input`
  border: 0;
  border-radius: 12px;
  background-image: url(${() => searchIcon.src});
  background-color: #f3f4f6;
  background-size: 24px;
  background-position: 16px 50%;
  background-repeat: no-repeat;
  width: 325px;
  height: 42px;
  padding: 0 16px 0 44px;

  @media (max-width: 744px) {
    width: 100%;
  }
`;

export default StyledInput;
