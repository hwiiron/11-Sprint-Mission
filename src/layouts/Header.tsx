import React from "react";
import { StyledHeader, StyledHeaderInner } from "./Header.style";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ProfileImg from "./ProfileImg";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <StyledHeaderInner>
        <Logo />

        {location.pathname !== "/" ? <Navigation /> : ""}

        <Button type={"LOGIN"} text={"로그인"} to={"/login"} />
        {/* <ProfileImg /> */}
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default Header;
