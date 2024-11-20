import LikeIcon from "../../assets/item/likes_icon.svg";
import Like from "./Likes.style";

type LikesProps = {
  item: {
    favoriteCount: number;
  };
};

const Likes = ({ item }: LikesProps) => {
  return (
    <Like>
      <i>
        <img src={LikeIcon} alt="좋아요" />
      </i>
      {item.favoriteCount}
    </Like>
  );
};

export default Likes;
