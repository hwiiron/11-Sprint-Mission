import StyleProduct from "./Product.style";
import Likes from "./Likes";
import ProductImg from "./ProductImg";
import ProductInfo from "./ProductInfo";

type Product = {
  product: {
    name: string;
    price: number;
    favoriteCount: number;
    images: string;
  };
  type: string;
};

const Product = ({ product, type }: Product) => {
  return (
    <StyleProduct type={type}>
      <article>
        <ProductImg product={product} type={type} />

        <ProductInfo product={product} />

        <Likes product={product} />
      </article>
    </StyleProduct>
  );
};

export default Product;
