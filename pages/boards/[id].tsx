import StyledInner from "@/src/layouts/StyledInner.style";
import { useRouter } from "next/router";

export default function Article() {
  const router = useRouter();
  const id = router.query.id;

  return (
    <StyledInner>
      <div>{id}번 게시글입니다.</div>
    </StyledInner>
  );
}
