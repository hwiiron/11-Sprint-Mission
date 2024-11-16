import React from "react";
import StyledControl from "./ProductControl.style";
import SearchInput from "./SearchInput";
import Button from "../../layouts/Button";
import CustomSelect from "./CustomSelect";

type ProductControlProps = {
  value: string;
  searchInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  orderBy: string;
  recentClick: () => void;
  favoriteClick: () => void;
  setCurrentPage: (page: number) => void;
};

const ProductControl = ({
  value,
  searchInputChange,
  onSubmit,
  orderBy,
  recentClick,
  favoriteClick,
  setCurrentPage,
}: ProductControlProps) => {
  return (
    <StyledControl>
      <SearchInput
        value={value}
        searchInputChange={searchInputChange}
        onSubmit={onSubmit}
      />

      <Button text={"상품 등록하기"} to={"/additem"} />

      <CustomSelect
        orderBy={orderBy}
        recentClick={recentClick}
        favoriteClick={favoriteClick}
        setCurrentPage={setCurrentPage}
      />
    </StyledControl>
  );
};

export default ProductControl;
