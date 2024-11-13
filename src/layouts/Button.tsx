import React from "react";
import { Link } from "react-router-dom";
import StyledButton from "./Button.style";

interface Props {
  type?: string;
  text: string;
  to: string;
  disabled?: boolean;
}

const Button = ({ type, text, to, disabled }: Props) => {
  return (
    <Link to={to}>
      <StyledButton type={type} disabled={disabled}>
        {text}
      </StyledButton>
    </Link>
  );
};

export default Button;
