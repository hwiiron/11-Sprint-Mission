import { ChangeEvent, useState } from "react";
import { Inner, Label, Textarea, Button } from "./ContactUs.style";

const ContactUs = () => {
  const [textarea, setTextarea] = useState("");

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.target.value);
  };

  return (
    <Inner>
      <Label htmlFor="contactUs">댓글달기</Label>

      <Textarea
        id="contactUs"
        placeholder="댓글을 입력해주세요."
        value={textarea}
        onChange={onChange}
      ></Textarea>

      <Button disabled={textarea === ""}>등록</Button>
    </Inner>
  );
};

export default ContactUs;
