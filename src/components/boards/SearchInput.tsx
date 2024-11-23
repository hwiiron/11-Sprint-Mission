import { ChangeEvent } from "react";
import StyledInput from "./SearchInput.style";

type SearchInput = {
  value: string;
  searchInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SearchInput = ({ value, searchInputChange, onSubmit }: SearchInput) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    searchInputChange(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <StyledInput
        className="allProduct__searchInput"
        type="text"
        value={value}
        placeholder="검색할 키워드를 입력해 주세요"
        onChange={onChange}
      />
    </form>
  );
};

export default SearchInput;
