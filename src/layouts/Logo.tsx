import Link from "next/link";
import StyledLogo from "./Logo.style";
import Image from "next/image";
import LogoImg from "../assets/logo.svg";

const Logo = () => {
  return (
    <StyledLogo>
      <Link href="/" className="logo">
        <Image fill src={LogoImg} alt="logo"></Image>
      </Link>
    </StyledLogo>
  );
};

export default Logo;
