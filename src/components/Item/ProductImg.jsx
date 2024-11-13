import Img from "./ProductImg.style";
import defaultImg from "../../assets/codeit.svg";

const ProductImg = ({ item }) => {
  const handleImgError = (e) => {
    e.target.src = defaultImg;
  };

  const imageSrc = item.images[0] || defaultImg;

  return (
    <Img>
      <img src={imageSrc} alt="상품 이미지" onError={handleImgError} />
    </Img>
  );
};

export default ProductImg;
