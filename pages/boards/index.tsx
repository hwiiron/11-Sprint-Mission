import AllArticle from "@/src/components/boards/AllArticles";
import BestArticles from "@/src/components/boards/BestArticles";
import StyledInner from "@/src/layouts/StyledInner.style";

export default function Boards({}) {
  return (
    <StyledInner>
      <BestArticles />
      <AllArticle />
    </StyledInner>
  );
}
