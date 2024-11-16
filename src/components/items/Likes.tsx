import StyledLikes from "./Likes.style";

type LikesProps = {
  product: {
    favoriteCount: number;
  };
};

const Likes = ({ product }: LikesProps) => {
  return <StyledLikes>{product.favoriteCount}</StyledLikes>;
};

export default Likes;
