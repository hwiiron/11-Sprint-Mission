import { ChangeEvent } from "react";
import StyledTextarea from "./Textarea.style";

type TextareaProps = {
  name: string;
  id: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = ({
  name,
  id,
  value,
  placeholder,
  onChange,
}: TextareaProps) => {
  return (
    <StyledTextarea
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Textarea;
