import Image from "next/image";
import Link from "next/link";
import Img01 from "@/src/assets/home/Img_home_01.svg";
import Img02 from "@/src/assets/home/Img_home_02.svg";
import Img03 from "@/src/assets/home/Img_home_03.svg";

export default function Home() {
  return (
    <>
      <main>
        <section id="visual">
          <div className="inner">
            <h2>
              일상의 모든 물건을
              <br className="pc" />
              거래해 보세요
            </h2>

            <Link href={"/items"}>구경하러 가기</Link>
          </div>
        </section>

        <section id="content">
          <ul className="itemList">
            <li>
              <div className="imgWrap">
                <Image fill src={Img01} alt="Hot item" />
              </div>

              <div className="text">
                <span>Hot item</span>

                <h3>
                  인기 상품을
                  <br className="pc" />
                  확인해 보세요
                </h3>

                <p>
                  가장 HOT한 중고거래 물품을
                  <br />
                  판다 마켓에서 확인해 보세요
                </p>
              </div>
            </li>

            <li className="right">
              <div className="text">
                <span>Search</span>

                <h3>
                  구매를 원하는
                  <br className="pc" />
                  상품을 검색하세요
                </h3>

                <p>
                  구매하고 싶은 물품은 검색해서
                  <br />
                  쉽게 찾아보세요
                </p>
              </div>

              <div className="imgWrap">
                <Image fill src={Img02} alt="Hot item" />
              </div>
            </li>

            <li>
              <div className="imgWrap">
                <Image fill src={Img03} alt="Hot item" />
              </div>

              <div className="text">
                <span>Register</span>

                <h3>
                  판매를 원하는
                  <br className="pc" />
                  상품을 등록하세요
                </h3>

                <p>
                  어떤 물건이든 판매하고 싶은
                  <br />
                  상품을 쉽게 등록하세요
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section id="pandaMarket">
          <div className="inner">
            <h4>
              믿을 수 있는
              <br />
              판다마켓 중고 거래
            </h4>
          </div>
        </section>
      </main>
    </>
  );
}