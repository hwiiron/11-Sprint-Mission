import {
  StyledArticle,
  StyledArticleList,
  StyledArticleTop,
  StyledBottom,
  StyledHead,
} from "./AllArticles.style";
import { StyledTitle } from "./BestArticles.style";
import ProductControl from "./ProductControl";
import { useEffect, useState } from "react";
import Image from "next/image";
import heart from "../../assets/boards/heart_icon.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import { ArticleProps } from "@/src/types";

export default function AllArticle() {
  const [articles, setArticles] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const articleLoad = async (orderBy: string) => {
      let url = `${process.env.NEXT_PUBLIC_API_URL}/articles?orderBy=${orderBy}`;

      if (search) {
        url += `&keyword=${search}`;
      }

      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.list);
    };

    articleLoad(orderBy);
  }, [orderBy, keyword]);

  // 최신순, 좋아요순
  const recentClick = () => {
    setOrderBy("recent");
  };

  const favoriteClick = () => {
    setOrderBy("like");
  };

  // 검색
  const searchInputChange = (value: string) => {
    setSearch(value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeyword(search);
    if (search) {
      router.push(`?q=${search}`);
    }
  };

  return (
    <>
      <StyledHead>
        <StyledTitle>게시글</StyledTitle>
        <ProductControl
          value={search}
          searchInputChange={searchInputChange}
          onSubmit={handleSearchSubmit}
          orderBy={orderBy}
          recentClick={recentClick}
          favoriteClick={favoriteClick}
        />
      </StyledHead>

      <StyledArticleList>
        {articles.length ? (
          articles.map((article: ArticleProps) => (
            <Link href={`/boards/${article.id}`} key={article.id}>
              <StyledArticle>
                <StyledArticleTop>
                  <p>{article.content}</p>

                  <div>
                    <div>
                      <Image
                        fill
                        src={article.image}
                        alt={article.title}
                      ></Image>
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

                  <span>
                    {new Date(article.createdAt).toLocaleDateString()}
                  </span>
                </StyledBottom>
              </StyledArticle>
            </Link>
          ))
        ) : (
          <div>검색 결과가 없습니다.</div>
        )}
      </StyledArticleList>
    </>
  );
}
