import Image from "next/image";
import Link from "next/link";
import returnImg from "@/src/assets/board/backButton_icon.svg";

type Props = {
  className?: string;
};

const ReturnToList = ({ className }: Props) => {
  return (
    <div className={className}>
      <Link href={"/items"}>
        목록으로 돌아가기
        <div>
          <Image src={returnImg} alt="목록으로 돌아가기" />
        </div>
      </Link>
    </div>
  );
};

export default ReturnToList;
