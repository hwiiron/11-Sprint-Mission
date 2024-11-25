import Link from "next/link";
import StyledButton from "./Button.style";

type Props = {
  type?: string;
  text: string;
  to: string;
  disabled?: boolean;
};

const Button = ({ type, text, to, disabled }: Props) => {
  return (
    <Link href={to}>
      <StyledButton type={type} disabled={disabled}>
        {text}
      </StyledButton>
    </Link>
  );
};

export default Button;
