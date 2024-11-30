import Image from "next/image";
import StyledNoInquiries from "./NoInquiries.style";
import noInquiriesImg from "@/src/assets/board/NoInquiries.svg";

const NoInquiries = () => {
  return (
    <StyledNoInquiries>
      <div>
        <Image src={noInquiriesImg} alt="아직 댓글이 없어요," />
      </div>
      <p>
        아직 댓글이 없어요,
        <br />
        지금 댓글을 달아보세요!
      </p>
    </StyledNoInquiries>
  );
};

export default NoInquiries;
