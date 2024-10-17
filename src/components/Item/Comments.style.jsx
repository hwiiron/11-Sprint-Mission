import styled from "styled-components";
import backButtonIcon from "../../assets/backButton_icon.svg";
import optionIcon from "../../assets/comment_option_icon.svg";
import NoInquiriesImg from "../../assets/NoInquiries.svg";

const Inner = styled.div`
  width: 1200px;
  margin: 24px auto 222px auto;
`;

const CommentList = styled.ul`
  margin-bottom: 64px;

  li {
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
  }

  .comment {
    position: relative;
  }

  .comment > button {
    width: 24px;
    height: 24px;
    background: url(${optionIcon}) no-repeat;
    background-size: 100%;
    flex-shrink: 0;
    position: relative;
  }

  .EditDelete__toggle {
    display: none;
    position: absolute;
    top: 34px;
    right: 0;
  }

  .EditDelete__toggle.active {
    display: block;
  }
`;

const BackButton = styled.div`
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

  a::after {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url(${backButtonIcon}) no-repeat;
    background-size: 100%;
    margin-left: 8px;
  }
`;

const NoInquiries = styled.p`
  color: #9ca3af;
  text-align: center;
  padding-top: 204px;
  margin-bottom: 48px;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 196px;
    height: 196px;
    background: url(${NoInquiriesImg});
    background-size: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export { Inner, CommentList, BackButton, NoInquiries };
