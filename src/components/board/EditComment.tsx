import { ChangeEvent, RefObject, useState } from "react";
import Profile from "./Profile";

type EditCommentProps = {
  id: number;
  comment: {
    id: number;
    content: string;
    writer: {
      nickname: string;
    };
    updatedAt: string;
  };
  textareaRef: RefObject<HTMLTextAreaElement>;
  handleCancelClick: () => void;
  handleEditSubmit: (id: number, content: string) => void;
};

const EditComment = ({
  comment,
  textareaRef,
  handleCancelClick,
  handleEditSubmit,
}: EditCommentProps) => {
  const [editComment, setEditComment] = useState(comment.content);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEditComment(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleEditSubmit(comment.id, editComment);
      }}
    >
      <li key={comment.id} className="edit">
        <div className="comment">
          <textarea value={editComment} onChange={onChange} ref={textareaRef}>
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
              disabled={!editComment || editComment === comment.content}
            >
              수정 완료
            </button>
          </div>
        </div>
      </li>
    </form>
  );
};

export default EditComment;
