import StyledAddProductHead from "./AddArticleHead.style";

type AddProductHeadProps = {
  disabled: boolean;
};

const AddArticleHead = ({ disabled }: AddProductHeadProps) => {
  return (
    <StyledAddProductHead>
      <h2>게시글 쓰기</h2>

      <button disabled={disabled}>등록</button>
    </StyledAddProductHead>
  );
};

export default AddArticleHead;
