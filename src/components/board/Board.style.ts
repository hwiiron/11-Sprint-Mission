import styled from "styled-components";

const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--gray800);
`;

const StyledArticleInfo = styled.div`
  border-bottom: 1px solid var(--gray200);
  display: flex;
  padding-bottom: 16px;
  margin-top: 16px;
`;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;

  > ul {
    display: flex;
    margin-left: 16px;
  }

  > ul li {
    font-size: 14px;
    font-weight: 500;
    color: var(--gray600);
  }

  > ul li + li {
    font-weight: 400;
    color: var(--gray400);
    margin-left: 8px;
  }
`;

const StyledLike = styled.div`
  border-radius: 35px;
  border: 1px solid var(--gray200);
  display: flex;
  align-items: center;
  padding: 4px 12px;
  margin-left: 64px;
  position: relative;

  &::before {
    content: "";
    width: 1px;
    height: 34px;
    background-color: var(--gray200);
    position: absolute;
    top: 50%;
    left: -32px;
    transform: translateY(-50%);
  }

  > div {
    width: 32px;
    height: 32px;
  }

  > div img {
    width: 100%;
    height: 100%;
  }

  > span {
    font-weight: 500;
    color: var(--gray500);
    margin-left: 4px;
  }
`;

const StyledContent = styled.div`
  margin-top: 24px;

  > p {
    font-size: 18px;
    color: var(--gray800);
  }
`;

export {
  StyledTitle,
  StyledArticleInfo,
  StyledProfile,
  StyledLike,
  StyledContent,
};
