import React, { ChangeEvent } from "react";
import { useState } from "react";
import StyledAddProduct from "./AddArticle.style";
import AddProductHead from "./AddArticleHead";
import Label from "./Label";
import FileInput from "./FileInput";
import InputField from "./InputField";
import Textarea from "./Textarea";

type ValuesProps = {
  imgFile: null;
  name: string;
  description: string;
};

const AddArticle = () => {
  const [values, setValues] = useState<ValuesProps>({
    imgFile: null,
    name: "",
    description: "",
  });

  const isSubmitDisabled =
    values.name.trim() !== "" && values.description.trim() !== "";

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

  return (
    <StyledAddProduct>
      <AddProductHead disabled={!isSubmitDisabled} />

      <Label htmlFor="name">*제목</Label>
      <InputField
        name="name"
        id="name"
        type="text"
        value={values.name}
        placeholder="제목을 입력해주세요"
        onChange={handleChange}
      />

      <Label htmlFor="description">*내용</Label>
      <Textarea
        name="description"
        id="description"
        value={values.description}
        placeholder="내용을 입력해주세요"
        onChange={handleChange}
      />

      <Label htmlFor="productImg">이미지</Label>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleFileChange}
      />
    </StyledAddProduct>
  );
};

export default AddArticle;
