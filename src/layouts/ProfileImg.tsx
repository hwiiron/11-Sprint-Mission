import Image from "next/image";
import StyledProfileImg from "./ProfileImg.style";
import img from "@/src/assets/profileImg.svg";

const ProfileImg = () => {
  return (
    <StyledProfileImg>
      <Image src={img} alt="프로필 이미지" />
    </StyledProfileImg>
  );
};

export default ProfileImg;
