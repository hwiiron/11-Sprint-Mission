import React from "react";

import StyledSkeletonProducts from "./SkeletonProducts.style";

const typeList = {
  BEST: {
    number: 4,
  },
  ALL: {
    number: 10,
  },
};

const SkeletonProducts = ({ type = "BEST" }) => {
  const { number } = typeList[type];

  // 어떤 타입으로 설정해야 할지 모르겠음..
  const skeleton: any = [];

  for (let i = 1; i <= number; i++) {
    skeleton.push(
      <li key={i}>
        <div className="skeleton-img"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-price"></div>
        <div className="skeleton-likes"></div>
      </li>
    );
  }

  return (
    <StyledSkeletonProducts type={type}>{skeleton}</StyledSkeletonProducts>
  );
};

export default SkeletonProducts;
