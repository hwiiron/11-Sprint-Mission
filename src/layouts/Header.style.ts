import styled from "styled-components";

const StyledHeader = styled.header`
  border-bottom: 1px solid #dfdfdf;
  width: 100%;
  height: 70px;
`;

const StyledHeaderInner = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;

  button,
  a,
  > div {
    margin-left: auto;
  }

  @media (max-width: 1200px) {
    width: 93.5%;
  }
`;

export { StyledHeader, StyledHeaderInner };
