import React, { useEffect, useState } from "react";
import {
  StyledArticleInfo,
  StyledContent,
  StyledLike,
  StyledProfile,
  StyledTitle,
} from "./Board.style";
import Image from "next/image";
import heartIcon from "@/src/assets/boards/heart_icon.svg";
import ProfileImg from "@/src/layouts/ProfileImg";

type IdProps = {
  id: number | undefined;
};

type ArticleDataProps = {
  content: string;
  createdAt: string;
  id: number;
  image: string;
  isLiked: boolean;
  likeCount: number;
  title: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
};

const Board = ({ id }: IdProps) => {
  const [articleData, setArticleData] = useState<ArticleDataProps>();

  const articleLoad = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`
    );
    const data = await res.json();
    setArticleData(data);
  };

  useEffect(() => {
    articleLoad();
  }, []);

  if (!articleData) return;

  return (
    <>
      <StyledTitle>{articleData.title}</StyledTitle>

      <StyledArticleInfo>
        <StyledProfile>
          <ProfileImg />

          <ul>
            <li>{articleData.writer.nickname}</li>
            <li>{new Date(articleData.updatedAt).toLocaleDateString()}</li>
          </ul>
        </StyledProfile>

        <StyledLike>
          <div>
            <Image src={heartIcon} alt="좋아요" />
          </div>

          <span>{articleData.likeCount}</span>
        </StyledLike>
      </StyledArticleInfo>

      <StyledContent>
        <p>{articleData.content}</p>
      </StyledContent>
    </>
  );
};

export default Board;
