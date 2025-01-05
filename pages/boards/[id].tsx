import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { deleteComment, getComments, postComment } from "@/api/api";
import Board from "@/src/components/board/Board";
import Comments from "@/src/components/board/Comments";
import ContactUs from "@/src/components/board/ContactUs";
import StyledInner from "@/src/layouts/StyledInner.style";

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

export default function Article() {
  const [commentList, setCommentList] = useState<CommentProps[]>([]);
  const [textareaValue, setTextareaValue] = useState("");

  const router = useRouter();
  const { id } = router.query;

  const parsedId = typeof id === "string" ? parseInt(id, 10) : undefined;

  useEffect(() => {
    const commentLoad = async () => {
      if (parsedId) {
        const data = await getComments(parsedId);
        setCommentList(data.list);
      }
    };

    commentLoad();
  }, [id]);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (parsedId) {
      const newComment = await postComment(parsedId, textareaValue);
      setCommentList((prev) => [newComment, ...prev]);
      setTextareaValue("");
    }
  };

  const handleDeleteClick = (id: number) => {
    if (confirm("댓글을 삭제하시겠습니까?")) {
      deleteComment(id);
      const filteredComments = commentList.filter(
        (comment) => comment.id !== id
      );
      setCommentList(filteredComments);
    }
  };

  if (!id || !commentList) return;

  return (
    <StyledInner>
      <Board id={parsedId} />
      <ContactUs
        textareaValue={textareaValue}
        handleSubmit={handleSubmit}
        onChange={onChange}
      />
      <Comments
        commentList={commentList}
        handleDeleteClick={handleDeleteClick}
      />
    </StyledInner>
  );
}
