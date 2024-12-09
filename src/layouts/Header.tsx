import { StyledHeader, StyledHeaderInner } from "./Header.style";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Button from "./Button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProfileImg from "./ProfileImg";

const Header = () => {
  const router = useRouter();
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setLogin(true);
    }
  }, []);

  return (
    <StyledHeader>
      <StyledHeaderInner>
        <Logo />

        {router.pathname !== "/" && <Navigation />}

        {!login ? (
          <Button type={"LOGIN"} text={"로그인"} to={"/login"} />
        ) : (
          <ProfileImg />
        )}
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default Header;
