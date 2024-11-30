import Board from "@/src/components/board/Board";
import Comments from "@/src/components/board/Comments";
import ContactUs from "@/src/components/board/ContactUs";
import StyledInner from "@/src/layouts/StyledInner.style";
import { useRouter } from "next/router";

export default function Article() {
  const router = useRouter();
  const { id } = router.query;

  // id를 number로 변환
  const parsedId = typeof id === "string" ? parseInt(id, 10) : undefined;

  if (!id) return;

  return (
    <StyledInner>
      <Board id={parsedId} />
      <ContactUs />
      <Comments id={parsedId} />
    </StyledInner>
  );
}
