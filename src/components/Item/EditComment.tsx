import { ChangeEvent, RefObject } from "react";
import Profile from "./Profile";

type EditCommentProps = {
  comment: {
    id: number;
    content: string;
    writer: {
      nickname: string;
    };
    updatedAt: string;
  };
  EditTextarea: string | undefined;
  onTextareaChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  textareaRef: RefObject<HTMLTextAreaElement>;
  handleCancelClick: () => void;
};

const EditComment = ({
  comment,
  EditTextarea,
  onTextareaChange,
  textareaRef,
  handleCancelClick,
}: EditCommentProps) => {
  return (
    <li key={comment.id} className="edit">
      <div className="comment">
        <textarea
          value={EditTextarea}
          onChange={onTextareaChange}
          ref={textareaRef}
        >
          {comment.content}
        </textarea>
      </div>

      <div>
        <Profile
          nickname={comment.writer.nickname}
          updatedAt={comment.updatedAt}
        />

        <div className="btnWrapper">
          <button className="cancelBtn" onClick={handleCancelClick}>
            취소
          </button>
          <button
            className="editBtn"
            disabled={!EditTextarea || EditTextarea === comment.content}
          >
            수정 완료
          </button>
        </div>
      </div>
    </li>
  );
};

export default EditComment;
