import Info from "./ProductInfo.style";

type ProductInfoProps = {
  product: {
    name: string;
    price: number;
  };
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <Info>
      <dt>{product.name}</dt>
      <dd>{product.price.toLocaleString()}원</dd>
    </Info>
  );
};

export default ProductInfo;
