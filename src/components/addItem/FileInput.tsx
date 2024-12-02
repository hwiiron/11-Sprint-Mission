import { ChangeEvent } from "react";
import { useEffect, useRef, useState } from "react";

import { StyledFileInput, StyledFileArea } from "./FileInput.style";
import Image from "next/image";
import addFileIcon from "../../assets/addboard/addFile_icon.svg";
import deleteIcon from "../../assets/addboard/delete_icon.svg";

type FileInputProps = {
  name: string;
  value: File | null;
  onChange: (name: string, nextValue: File | null) => void;
  // onChange?: ChangeEventHandler<HTMLInputElement>;
};

const FileInput = ({ name, value, onChange }: FileInputProps) => {
  const [preview, setPreview] = useState<string>();
  const [imageUploadStatus, setImageUploadStatus] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.files ? e.target.files[0] : null;
    onChange(name, nextValue);

    // 이미지 파일이 등록되어 있는데 또 파일 선택 클릭 시
    if (preview) {
      setImageUploadStatus(true);
    }
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = ""; // 화면에 보여지는 파일명
    onChange(name, null);

    setImageUploadStatus(false); // 미리보기 삭제 시 하단 문구도 제거
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value); // 임시로 이미지 url 생성
    setPreview(nextPreview);

    return () => {
      setPreview(undefined);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]); // value 값이 변경될 때마다 미리보기 이미지 변경

  return (
    <StyledFileInput>
      <StyledFileArea>
        <label htmlFor="productImg">
          <input
            id="productImg"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleChange}
            ref={inputRef}
          />

          <div>
            <Image src={addFileIcon} alt="이미지 등록" />
          </div>

          <span>이미지 등록</span>
        </label>

        {value && (
          <div>
            <img src={preview} alt="이미지 미리보기" />
            <button onClick={handleClearClick}>
              <Image src={deleteIcon} alt="삭제" />
            </button>
          </div>
        )}
      </StyledFileArea>

      {imageUploadStatus && <p>*이미지 등록은 최대 1개까지 가능합니다.</p>}
    </StyledFileInput>
  );
};

export default FileInput;
