import StyledImg from "./ProductImg.style";
import defaultImg from "../../assets/codeit.svg";

type ProductImgProps = {
  product: {
    name: string;
    images: string;
  };
  type: string;
};

const ProductImg = ({ product, type }: ProductImgProps) => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultImg;
  };

  return (
    <StyledImg type={type}>
      <img src={product.images} alt={product.name} onError={handleImgError} />
    </StyledImg>
  );
};

export default ProductImg;
