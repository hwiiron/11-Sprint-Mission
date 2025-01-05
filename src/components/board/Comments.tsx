import { useEffect, useRef, useState } from "react";
import { Inner, CommentList } from "./Comments.style";
import EditComment from "./EditComment";
import Comment from "./Comment";
import StyledReturnToList from "./ReturnToList.style";
import NoInquiries from "./NoInquiries";
import { patchComment } from "@/api/api";

type CommentProps = {
  id: number;
  content: string;
  writer: {
    nickname: string;
    image?: string;
  };
  createdAt: string;
  updatedAt: string;
};

type CommentsProps = {
  commentList: CommentProps[];
  handleDeleteClick: (id: number) => void;
};

const Comments = ({ commentList, handleDeleteClick }: CommentsProps) => {
  const [toggledCommentId, setToggledCommentId] = useState<number | null>(null);
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (editingCommentId && textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.focus();

      // 커서를 텍스트 맨 뒤로 이동
      textarea.selectionStart = textarea.value.length;
      textarea.selectionEnd = textarea.value.length;
    }
  }, [editingCommentId]);

  const handleToggleClick = (commentId: number) => {
    setToggledCommentId(toggledCommentId === commentId ? null : commentId);
  };

  const handleEditClick = (commentId: number) => {
    setEditingCommentId(commentId);
  };

  const handleCancelClick = () => {
    setEditingCommentId(null);
    setToggledCommentId(null);
  };

  const handleEditSubmit = (id: number, content: string) => {
    patchComment(id, content);
    setEditingCommentId(null);
    setToggledCommentId(null);
  };

  return (
    <Inner>
      {commentList.length !== 0 ? (
        <CommentList>
          {commentList.map((comment) => {
            if (comment.id === editingCommentId) {
              return (
                <EditComment
                  id={comment.id}
                  key={comment.id}
                  comment={comment}
                  textareaRef={textareaRef}
                  handleCancelClick={handleCancelClick}
                  handleEditSubmit={handleEditSubmit}
                />
              );
            }
            return (
              <Comment
                key={comment.id}
                comment={comment}
                toggledCommentId={toggledCommentId}
                handleToggleClick={handleToggleClick}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
              />
            );
          })}
        </CommentList>
      ) : (
        <NoInquiries />
      )}

      <StyledReturnToList />
    </Inner>
  );
};

export default Comments;
