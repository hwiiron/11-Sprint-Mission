import styled from "styled-components";

const StyledFileInput = styled.div`
  p {
    color: #f74747;
    margin-top: 16px;
  }
`;

const StyledFileArea = styled.div`
  display: flex;
  gap: 24px;

  input {
    display: none;
  }

  label {
    border-radius: 12px;
    background-color: #f3f4f6;
    display: block;
    width: 282px;
    height: 282px;
    margin: 0;
    cursor: pointer;
    position: relative;
  }

  label > div {
    width: 48px;
    height: 48px;
    position: absolute;
    top: 98px;
    left: 50%;
    transform: translateX(-50%);
  }

  label > div img {
    width: 100%;
    height: 100%;
  }

  label span {
    color: #9ca3af;
    position: absolute;
    bottom: 98px;
    left: 50%;
    transform: translateX(-50%);
  }

  > div {
    border-radius: 12px;
    width: 282px;
    height: 282px;
    overflow: hidden;
    position: relative;
  }

  > div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > div button {
    width: 22px;
    height: 24px;
    position: absolute;
    top: 12px;
    right: 12px;
  }

  > div button img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1200px) {
    gap: 12px;

    label {
      background-position: 50% 41px;
      width: 168px;
      height: 168px;
    }

    label > div {
      top: 41px;
    }

    label span {
      bottom: 41px;
    }

    > div {
      width: 168px;
      height: 168px;
    }
  }
`;

export { StyledFileInput, StyledFileArea };
