import React from "react";
import StyledInputField from "./InputField.style";

type Props = {
  name: string;
  id: string;
  type: string;
  value: string;
  placeholder: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onInput?: React.FormEventHandler<HTMLInputElement>;
};

const InputField: React.FC<Props> = ({
  name,
  id,
  type,
  value,
  placeholder,
  onKeyDown,
  onChange,
  onInput,
}) => {
  return (
    <StyledInputField
      name={name}
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      onChange={onChange}
      onInput={onInput}
    />
  );
};

export default InputField;
