import Image from "next/image";
import Link from "next/link";
import Logo from "@/src/assets/login/logo.svg";
import GoogleLogin from "@/src/assets/login/easyLogin_google.svg";
import KakaoLogin from "@/src/assets/login/easyLogin_kakao.svg";
import EyeIcon from "@/src/assets/login/eye_icon.svg";
import EyeShowIcon from "@/src/assets/login/eye_show_icon.svg";
import { ChangeEvent, FocusEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";

type ValuesProps = {
  email: string;
  password: string;
};

export default function Login() {
  const [loginInfo, setLoginInfo] = useState<ValuesProps>({
    email: "",
    password: "",
  });
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const router = useRouter();

  const pattern = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/;

  const loginValid =
    pattern.test(loginInfo.email.trim()) && loginInfo.password.length >= 8;

  const handleInputBlur = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.trim()) {
      setEmailErrorMessage("이메일을 입력해 주세요.");
    } else if (!pattern.test(e.target.value.trim())) {
      setEmailErrorMessage("잘못된 이메일 형식입니다.");
    } else {
      setEmailErrorMessage("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginInfo((prevLoginInfo) => ({
      ...prevLoginInfo,
      [name]: value,
    }));

    if (name === "password") {
      if (loginInfo.password.length < 7) {
        setPasswordErrorMessage("비밀번호를 8자 이상 입력해 주세요.");
      } else {
        setPasswordErrorMessage("");
      }
    }
  };

  const handlePasswordBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === "") {
      setPasswordErrorMessage("비밀번호를 입력해 주세요.");
    }
  };

  const handleClick = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("https://panda-market-api.vercel.app/auth/signIn", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("accessToken", data.accessToken);
      router.push("/");
    }
  };

  return (
    <div className="wrapper login">
      <div className="inner">
        <h1>
          <Link className="logo" href={"/"}>
            <Image src={Logo} alt="logo" />
          </Link>
        </h1>

        <div className="loginWrap">
          <form onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="email-input">이메일</label>
              <input
                name="email"
                id="email-input"
                type="text"
                placeholder="이메일을 입력해주세요."
                autoComplete="username"
                className={emailErrorMessage ? "error" : ""}
                value={loginInfo.email}
                onChange={handleChange}
                onBlur={handleInputBlur}
              />

              <span className="errorMessage">{emailErrorMessage}</span>
            </div>

            <div className="input">
              <label htmlFor="password-input">비밀번호</label>

              <div className="password">
                <input
                  name="password"
                  id="password-input"
                  type={isPasswordHidden ? "text" : "password"}
                  placeholder="비밀번호를 입력해주세요"
                  autoComplete="current-password"
                  value={loginInfo.password}
                  onChange={handleChange}
                  onBlur={handlePasswordBlur}
                />
                <button
                  className="passwordToggleBtn"
                  type="button"
                  onClick={handleClick}
                >
                  {isPasswordHidden ? (
                    <Image src={EyeShowIcon} alt="" />
                  ) : (
                    <Image src={EyeIcon} alt="" />
                  )}
                </button>
              </div>

              <span className="errorMessage">{passwordErrorMessage}</span>
            </div>

            <button className="loginBtn" type="submit" disabled={!loginValid}>
              로그인
            </button>
          </form>
        </div>

        <div className="easyLogin">
          <p>간편 로그인하기</p>

          <ul>
            <li>
              <Link
                className="google"
                href="https://google.com"
                target="_blank"
              >
                <Image src={GoogleLogin} alt="구글 로그인" />
              </Link>
            </li>

            <li>
              <Link
                className="kakao"
                href="https://www.kakaocorp.com/page/"
                target="_blank"
              >
                <Image src={KakaoLogin} alt="카카오 로그인" />
              </Link>
            </li>
          </ul>
        </div>

        <p className="signup">
          판다마켓이 처음이신가요? <Link href={"/signup"}>회원가입</Link>
        </p>
      </div>
    </div>
  );
}
