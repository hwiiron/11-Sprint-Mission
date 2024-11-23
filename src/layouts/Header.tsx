import { StyledHeader, StyledHeaderInner } from "./Header.style";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Button from "./Button";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <StyledHeader>
      <StyledHeaderInner>
        <Logo />

        {router.pathname !== "/" ? <Navigation /> : ""}

        <Button type={"LOGIN"} text={"로그인"} to={"/login"} />
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default Header;
