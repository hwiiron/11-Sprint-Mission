import styled from "styled-components";

const Inner = styled.div`
  width: 1200px;
  margin: 24px auto 222px auto;

  @media (max-width: 1200px) {
    width: 100%;
    margin: 16px 0 243px;
  }

  @media (max-width: 744px) {
    margin: 24px 0 65px;
  }
`;

const CommentList = styled.ul`
  margin-bottom: 64px;

  > li {
    border-bottom: 1px solid #e5e7eb;
    padding: 24px 0 12px;
  }

  .comment {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .comment p {
    font-size: 14px;
    color: #1f2937;
  }

  .comment textarea {
    border: none;
    border-radius: 12px;
    background: #f3f4f6;
    width: 100%;
    height: 80px;
    font-size: 14px;
    font-weight: 400;
    color: #1f2937;
    padding: 16px 24px;
    resize: none;

    &:focus {
      outline-color: var(--blue);
    }
  }

  .comment {
    position: relative;
  }

  .comment li + li {
    border-top: 1px solid #e5e7eb;
  }

  .comment > button {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    position: relative;
  }

  .EditDelete__toggle {
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background: #fff;
    width: 139px;
    display: none;
    position: absolute;
    top: 34px;
    right: 0;
    z-index: 1;
  }

  .EditDelete__toggle.active {
    display: block;
  }

  .EditDelete__toggle li {
    height: 46px;
    padding: 0;
  }

  .EditDelete__toggle li button {
    width: 100%;
    height: 100%;
    color: #6b7280;
  }

  li.edit {
    padding: 24px 0 27px !important;
  }

  li.edit > div:not(.comment) {
    display: flex;
    justify-content: space-between;
  }

  li.edit button {
    height: 42px;
    padding: 0 23px;
  }

  .btnWrapper .editBtn {
    border-radius: 8px;
    background: var(--blue);
    color: #fff;
    transition: 0.3s;
  }

  .btnWrapper .editBtn:disabled {
    background: #9ca3af;
    cursor: auto;
  }

  @media (max-width: 1200px) {
    margin-bottom: 47px;
  }

  @media (max-width: 744px) {
    margin-bottom: 40px;

    li {
      padding: 16px 0 8px;
    }

    .EditDelete__toggle {
      width: 102px;
      top: 35px;
    }

    .EditDelete__toggle li button {
      font-size: 14px;
    }
  }
`;

export { Inner, CommentList };
