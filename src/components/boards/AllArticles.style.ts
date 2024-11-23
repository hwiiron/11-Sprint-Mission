import styled from "styled-components";

const StyledHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0 24px;

  h2 {
    margin-bottom: 0;
  }

  @media (max-width: 744px) {
    align-items: flex-start;
    flex-direction: column;
    position: relative;

    h2 {
      height: 42px;
      line-height: 42px;
    }
  }
`;

const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--gray900);
  margin-bottom: 16px;
`;

const StyledArticleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledArticle = styled.div`
  border-bottom: 1px solid #e5e7eb;
  background-color: #fcfcfc;
  width: 100%;
  height: 138px;
  padding: 0 0 24px;
  overflow: hidden;
  position: relative;
`;

const StyleBadge = styled.div`
  position: absolute;
  top: 0;
  left: 24px;
`;

const StyledArticleTop = styled.div`
  display: flex;

  > p {
    flex: 1;
    /* width: 1120px; */
    font-size: 20px;
    font-weight: 600;
    color: #1f2937;
  }

  > div {
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    height: 72px;
    margin-left: 8px;
  }

  > div > div {
    width: 48px;
    height: 48px;
    position: relative;
  }

  > div img {
    object-fit: cover;
  }
`;

const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  > ul {
    display: flex;
    gap: 8px;
  }

  > ul li {
    font-size: 14px;
    font-weight: 400;
    color: #4b5563;
  }

  > ul li + li {
    display: flex;
    align-items: center;
  }

  > ul li + li img {
    margin-right: 4px;
  }

  > span {
    font-size: 14px;
    font-weight: 400;
    color: #9ca3af;
  }
`;

export {
  StyledHead,
  StyledTitle,
  StyledArticleList,
  StyleBadge,
  StyledArticle,
  StyledArticleTop,
  StyledBottom,
};
