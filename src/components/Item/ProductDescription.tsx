import Description from "./ProductDescription.style";

type ProductDescription = {
  item: {
    description: string;
  };
};

const ProductDescription = ({ item }: ProductDescription) => {
  return (
    <Description>
      <h3>상품 소개</h3>
      <p>{item.description}</p>
    </Description>
  );
};

export default ProductDescription;
