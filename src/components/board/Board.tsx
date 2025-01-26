import React, { useEffect, useState } from "react";
import {
  StyledArticleInfo,
  StyledContent,
  StyledLike,
  StyledProfile,
  StyledHead,
  StyledTitle,
} from "./Board.style";
import Image from "next/image";
import heartIcon from "@/src/assets/boards/heart_icon.svg";
import ProfileImg from "@/src/layouts/ProfileImg";
import { deleteArticle, getArticle } from "@/api/api";
import Dropdown from "./Dropdown";
import { useRouter } from "next/router";

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
  const router = useRouter();

  useEffect(() => {
    const articleLoad = async () => {
      if (id) {
        const data = await getArticle(id);
        setArticleData(data);
      }
    };
    articleLoad();
  }, [id]);

  const handleDeleteClick = () => {
    deleteArticle(Number(router.query.id));
    router.push("/boards");
  };

  if (!articleData) return;

  return (
    <>
      <StyledHead>
        <StyledTitle>{articleData.title}</StyledTitle>
        <Dropdown handleDeleteClick={handleDeleteClick} />
      </StyledHead>

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
