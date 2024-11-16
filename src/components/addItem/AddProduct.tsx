import React, { ChangeEvent } from "react";
import { useState } from "react";
import StyledAddProduct from "./AddProduct.style";
import AddProductHead from "./AddProductHead";
import Label from "./Label";
import FileInput from "./FileInput";
import InputField from "./InputField";
import Textarea from "./Textarea";
import TagList from "./TagList";

type ValuesProps = {
  imgFile: null;
  name: string;
  description: string;
  price: string;
  tags: string[];
};

const AddProduct = () => {
  const [values, setValues] = useState<ValuesProps>({
    imgFile: null,
    name: "",
    description: "",
    price: "",
    tags: [],
  });

  const [tagInputValue, setTagInputValue] = useState(""); // tag input의 value를 저장할 state

  const isSubmitDisabled =
    values.name.trim() !== "" &&
    values.description.trim() !== "" &&
    values.price.trim() !== "" &&
    values.tags.length > 0;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    handleFileChange(name, value);
  };

  const handleFileChange = (name: string, value: File | string | null) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // 상품 가격 3자리마다 콤마 추가, 모바일에서 text 입력되는 경우도 해결
  const onInput = (
    e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const onlyDigits = target.value.replace(/[^0-9]/g, "");
    const formattedValue = onlyDigits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    target.value = formattedValue;
  };

  // tag input에 value 값 저장
  const onChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setTagInputValue(target.value);
  };

  // 빈 값으로 엔터키 입력 시, return
  // tag input의 value 값을 tags 배열에 추가
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (e.keyCode === 13) {
      if (target.value.trim() === "") {
        return;
      }

      setValues((prevValues) => ({
        ...prevValues,
        tags: [...prevValues.tags, tagInputValue],
      }));
      setTagInputValue("");
    }
  };

  // tag 삭제
  const handleDeleteClick = (tagIdx: number) => {
    setValues((prevValues) => ({
      ...prevValues,
      tags: prevValues.tags.filter((_, idx) => idx !== tagIdx), // tag 삭제
    }));
  };

  return (
    <StyledAddProduct>
      <AddProductHead disabled={!isSubmitDisabled} />

      <Label htmlFor="productImg">상품 이미지</Label>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleFileChange}
      />

      <Label htmlFor="name">상품명</Label>
      <InputField
        name="name"
        id="name"
        type="text"
        value={values.name}
        placeholder="상품명을 입력해주세요"
        onChange={handleChange}
      />

      <Label htmlFor="description">상품 소개</Label>
      <Textarea
        name="description"
        id="description"
        value={values.description}
        placeholder="상품 소개를 입력해주세요"
        onChange={handleChange}
      />

      <Label htmlFor="price">판매가격</Label>
      <InputField
        name="price"
        id="price"
        type="text"
        value={values.price}
        placeholder="판매 가격을 입력해주세요"
        onChange={handleChange}
        onInput={onInput}
      />

      <Label htmlFor="tags">태그</Label>
      <InputField
        name="tags"
        id="tags"
        type="text"
        value={tagInputValue}
        placeholder="태그를 입력해주세요"
        onKeyDown={onKeyDown}
        onChange={onChange}
      />

      <TagList
        tagsLength={values.tags.length}
        tags={values.tags}
        onClick={handleDeleteClick}
      />
    </StyledAddProduct>
  );
};

export default AddProduct;
