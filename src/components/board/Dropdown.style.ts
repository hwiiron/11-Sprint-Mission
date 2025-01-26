import styled from "styled-components";

const StyledDropdownWrap = styled.div`
  width: 24px;
  height: 24px;
  position: relative;

  > button {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
  }

  > ul {
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background: #fff;
    width: 139px;
    position: absolute;
    top: 28px;
    right: 0;
    z-index: 1;
  }

  > ul li {
    height: 46px;
    padding: 0;
  }

  > ul li button {
    width: 100%;
    height: 100%;
    color: #6b7280;
  }
`;

export { StyledDropdownWrap };
