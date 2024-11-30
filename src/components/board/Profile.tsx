import Image from "next/image";
import profileImg from "@/src/assets/profileImg.svg";

import { ProfileWrapper, Img, Info } from "./Profile.style";

type ProfileProps = {
  nickname: string;
  updatedAt: string;
};

const Profile = ({ nickname, updatedAt }: ProfileProps) => {
  const formattedDate = new Date(updatedAt).toLocaleDateString();

  return (
    <ProfileWrapper>
      <Img>
        <Image src={profileImg} alt="프로필 이미지" />
      </Img>
      <Info>
        <p>{nickname}</p>
        <span>{formattedDate}</span>
      </Info>
    </ProfileWrapper>
  );
};

export default Profile;