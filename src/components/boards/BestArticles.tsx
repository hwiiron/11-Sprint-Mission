import { ArticleProps } from "@/src/types";
import {
  StyleBadge,
  StyledArticle,
  StyledArticleList,
  StyledArticleTop,
  StyledBottom,
  StyledTitle,
} from "./BestArticles.style";
import Image from "next/image";
import heart from "../../assets/boards/heart_icon.svg";
import badge from "../../assets/boards/best_badge.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BestArticles() {
  const [articles, setArticles] = useState([]);
  const [pageSize, setPageSize] = useState(3);

  useEffect(() => {
    const articleLoad = async (pageSize: number) => {
      const res = await fetch(
        `https://panda-market-api.vercel.app/articles?page=1&pageSize=${pageSize}&orderBy=like`
      );
      const data = await res.json();
      setArticles(data.list);
    };

    articleLoad(pageSize);
  }, [pageSize]);

  // 해상도에 따라 pageSize 변경
  useEffect(() => {
    const updatePageSize = () => {
      if (window.innerWidth >= 1200) {
        setPageSize(3); // 데스크탑
      } else if (window.innerWidth >= 744) {
        setPageSize(2); // 태블릿
      } else {
        setPageSize(1); // 모바일
      }
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);

    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  return (
    <>
      <StyledTitle>베스트 게시물</StyledTitle>

      <StyledArticleList>
        {articles.map((article: ArticleProps) => (
          <Link href={`boards/${article.id}`} key={article.id}>
            <StyledArticle>
              <StyleBadge>
                <Image src={badge} alt="Best" width={102} height={30}></Image>
              </StyleBadge>

              <StyledArticleTop>
                <p>{article.content}</p>

                <div>
                  <div>
                    <Image fill src={article.image} alt={article.title}></Image>
                  </div>
                </div>
              </StyledArticleTop>

              <StyledBottom>
                <ul>
                  <li>{article.writer.nickname}</li>
                  <li>
                    <Image
                      src={heart}
                      alt="하트"
                      width={16}
                      height={16}
                    ></Image>
                    {article.likeCount}
                  </li>
                </ul>

                <span>{new Date(article.createdAt).toLocaleDateString()}</span>
              </StyledBottom>
            </StyledArticle>
          </Link>
        ))}
      </StyledArticleList>
    </>
  );
}
