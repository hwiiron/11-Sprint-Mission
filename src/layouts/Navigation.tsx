import StyledNavigation from "./Navigation.style";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const { pathname } = useRouter();

  return (
    <StyledNavigation>
      {linkList.map((link) => {
        const isActive = pathname === link.path;

        return (
          <li key={link.id}>
            <Link
              href={link.path}
              style={{ color: isActive ? "#3692ff" : undefined }}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </StyledNavigation>
  );
};

export default Navigation;
