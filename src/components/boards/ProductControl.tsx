import React from "react";
import StyledControl from "@/src/components/boards/ProductControl.style";
import SearchInput from "@/src/components/boards/SearchInput";
import CustomSelect from "@/src/components/boards/CustomSelect";
import Button from "@/src/layouts/Button";

type ProductControlProps = {
  value: string;
  searchInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  orderBy: string;
  recentClick: () => void;
  favoriteClick: () => void;
};

const ProductControl = ({
  value,
  searchInputChange,
  onSubmit,
  orderBy,
  recentClick,
  favoriteClick,
}: ProductControlProps) => {
  return (
    <StyledControl>
      <SearchInput
        value={value}
        searchInputChange={searchInputChange}
        onSubmit={onSubmit}
      />

      <Button text={"글쓰기"} to={"/addboard"} />

      <CustomSelect
        orderBy={orderBy}
        recentClick={recentClick}
        favoriteClick={favoriteClick}
      />
    </StyledControl>
  );
};

export default ProductControl;
