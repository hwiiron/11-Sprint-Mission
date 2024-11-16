import Head from "./ProductHead.style";

type ProductHeadProps = {
  item: {
    name: string;
    price: number;
  };
};

const ProductHead = ({ item }: ProductHeadProps) => {
  return (
    <Head>
      <h2>{item.name}</h2>
      <p>{item.price.toLocaleString()}원</p>
    </Head>
  );
};

export default ProductHead;
