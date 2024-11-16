import StyledAddProductHead from "./AddProductHead.style";

type AddProductHeadProps = {
  disabled: boolean;
};

const AddProductHead = ({ disabled }: AddProductHeadProps) => {
  return (
    <StyledAddProductHead>
      <h2>상품 등록하기</h2>

      <button disabled={disabled}>등록</button>
    </StyledAddProductHead>
  );
};

export default AddProductHead;
