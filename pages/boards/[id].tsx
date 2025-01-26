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

  const [cursor, setCursor] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const router = useRouter();
  const { id } = router.query;

  const parsedId = typeof id === "string" ? parseInt(id, 10) : undefined;

  // useEffect(() => {
  //   const commentLoad = async () => {
  //     if (parsedId) {
  //       const data = await getComments(parsedId);
  //       setCommentList(data.list);
  //     }
  //   };

  //   commentLoad();
  // }, [id]);

  const loadComments = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const data = await getComments(parsedId, cursor, 10); // cursor를 전달
      setCommentList((prev) => [...prev, ...data.list]);
      setCursor(data.nextCursor || null); // 다음 커서 설정
      setHasMore(!!data.nextCursor); // 다음 커서가 없으면 더 로드할 데이터 없음
    } catch (error) {
      console.error("댓글 로드 실패", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadComments();
        }
      },
      { threshold: 1.0 }
    );

    const target = document.getElementById("observer");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [parsedId, hasMore, isLoading, cursor]);

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
      <div id="observer"></div> {/* Intersection Observer가 감지할 요소 */}
    </StyledInner>
  );
}
