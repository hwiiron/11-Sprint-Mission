import Tag from "./ProductTag.style";

type ProductTagProps = {
  item: {
    id: number;
    tags: string[];
  };
};

const ProductTag = ({ item }: ProductTagProps) => {
  return (
    <Tag>
      <h3>상품 태그</h3>

      <ul>
        {item.tags.map((tag: any) => {
          return <li key={item.id}>#{tag}</li>;
        })}
      </ul>
    </Tag>
  );
};

export default ProductTag;
