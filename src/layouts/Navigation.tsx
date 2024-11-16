import { NavLink } from "react-router-dom";
import StyledNavigation from "./Navigation.style";

type IsActievProps = {
  isActive: boolean;
};

function getLinkStyle({ isActive }: IsActievProps) {
  return {
    color: isActive ? "#3692ff" : undefined,
  };
}

const linkList = [
  {
    id: 0,
    name: "자유게시판",
    path: "/boards",
  },
  {
    id: 1,
    name: "중고마켓",
    path: "/items",
  },
];

const Navigation = () => {
  return (
    <StyledNavigation>
      {linkList.map((link) => {
        return (
          <li key={link.id}>
            <NavLink to={link.path} style={getLinkStyle}>
              {link.name}
            </NavLink>
          </li>
        );
      })}
    </StyledNavigation>
  );
};

export default Navigation;
