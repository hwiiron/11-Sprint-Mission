import Image from "next/image";
import { useState } from "react";
import { StyledDropdownWrap } from "./Dropdown.style";
import dropdownImg from "@/src/assets/board/comment_option_icon.svg";

type DropdownProps = {
  handleEditClick?: () => void;
  handleDeleteClick: () => void;
};

const Dropdown = ({ handleEditClick, handleDeleteClick }: DropdownProps) => {
  const [dropdownToggle, setDropdownToggle] = useState(false);

  const handleDropdownClick = () => {
    setDropdownToggle(!dropdownToggle);
  };

  return (
    <StyledDropdownWrap>
      <button onClick={handleDropdownClick}>
        <Image src={dropdownImg} alt="dropdown" />
      </button>

      {dropdownToggle ? (
        <ul>
          <li>
            <button onClick={handleEditClick}>수정하기</button>
          </li>

          <li>
            <button onClick={handleDeleteClick}>삭제하기</button>
          </li>
        </ul>
      ) : null}
    </StyledDropdownWrap>
  );
};

export default Dropdown;
