import styled from "styled-components";

const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--gray900);
  margin-bottom: 16px;
`;

const StyledArticleList = styled.div`
  display: flex;
  gap: 24px;

  > a {
    display: block;
    width: 100%;
  }

  @media (max-width: 1200px) {
    gap: 16px;
  }
`;

const StyledArticle = styled.div`
  border-radius: 8px;
  background-color: #f9fafb;
  width: 384px;
  height: 169px;
  padding: 46px 24px 16px;
  overflow: hidden;
  position: relative;

  @media (max-width: 1200px) {
    width: 100%;
    height: 198px;
  }
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
    height: 64px;
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

  @media (max-width: 1200px) {
    > p {
      height: 72px;
    }
  }
`;

const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;

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

  @media (max-width: 1200px) {
    margin-top: 40px;
  }
`;

export {
  StyledTitle,
  StyledArticleList,
  StyleBadge,
  StyledArticle,
  StyledArticleTop,
  StyledBottom,
};
