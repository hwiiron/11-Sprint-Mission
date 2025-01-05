import { Inner, Label, Textarea, Button } from "./ContactUs.style";

type ContactUsProps = {
  textareaValue: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const ContactUs = ({
  textareaValue,
  handleSubmit,
  onChange,
}: ContactUsProps) => {
  return (
    <Inner>
      <Label htmlFor="contactUs">댓글달기</Label>

      <form onSubmit={handleSubmit}>
        <Textarea
          id="contactUs"
          placeholder="댓글을 입력해주세요."
          value={textareaValue}
          onChange={onChange}
        ></Textarea>

        <Button disabled={textareaValue === ""}>등록</Button>
      </form>
    </Inner>
  );
};

export default ContactUs;
