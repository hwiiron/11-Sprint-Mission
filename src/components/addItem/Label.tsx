import { ReactNode } from "react";
import StyledLabel from "./Label.style";

type LabelProps = {
  children: ReactNode;
  htmlFor: string;
};

const Label = ({ children, htmlFor }: LabelProps) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;
