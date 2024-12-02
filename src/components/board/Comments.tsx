import { useEffect, useRef, useState } from "react";
import { Inner, CommentList } from "./Comments.style";
import EditComment from "./EditComment";
import Comment from "./Comment";
import StyledReturnToList from "./ReturnToList.style";
import NoInquiries from "./NoInquiries";

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

type IdProps = {
  id: number | undefined;
};

const Comments = ({ id }: IdProps) => {
  const [commentList, setCommentList] = useState<CommentProps[] | null>(null);
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

  useEffect(() => {
    const commentLoad = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/comments?limit=10`
      );
      const data = await res.json();
      setCommentList(data.list || []);
    };

    commentLoad();
  }, [id]);

  if (!commentList) return;

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

  return (
    <Inner>
      {commentList.length !== 0 ? (
        <CommentList>
          {commentList.map((comment) => {
            if (comment.id === editingCommentId) {
              return (
                <EditComment
                  key={comment.id}
                  comment={comment}
                  textareaRef={textareaRef}
                  handleCancelClick={handleCancelClick}
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
