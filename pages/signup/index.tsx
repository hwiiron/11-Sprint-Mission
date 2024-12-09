import Link from "next/link";
import Logo from "@/src/assets/login/logo.svg";
import Image from "next/image";
import GoogleLogin from "@/src/assets/login/easyLogin_google.svg";
import KakaoLogin from "@/src/assets/login/easyLogin_kakao.svg";
import EyeIcon from "@/src/assets/login/eye_icon.svg";
import EyeShowIcon from "@/src/assets/login/eye_show_icon.svg";
import { ChangeEvent, FocusEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

type ValuesProps = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
};

export default function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState<ValuesProps>({
    email: "",
    nickname: "",
    password: "",
    passwordConfirmation: "",
  });
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);
  const [isPasswordConfirmHidden, setIsPasswordConfirmHidden] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [nickNameErrorMessage, setNickNameErrorMessage] = useState("");
  const [confirmErrorMessage, setConfirmErrorMessage] = useState("");
  const router = useRouter();

  const pattern = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/;

  const signUpValid =
    pattern.test(signUpInfo.email.trim()) &&
    signUpInfo.password.length >= 8 &&
    signUpInfo.nickname &&
    signUpInfo.password === signUpInfo.passwordConfirmation;

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      router.push("/");
    }
  }, []);

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

    setSignUpInfo((prevLoginInfo) => ({
      ...prevLoginInfo,
      [name]: value,
    }));

    if (name === "password") {
      if (signUpInfo.password.length < 7) {
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

  const handlePasswordToggleClick = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const handlePasswordConfirmToggleClick = () => {
    setIsPasswordConfirmHidden(!isPasswordConfirmHidden);
  };

  const handleNickNameBlur = () => {
    if (signUpInfo.nickname.trim() === "") {
      setNickNameErrorMessage("닉네임을 입력해 주세요.");
    } else {
      setNickNameErrorMessage("");
    }
  };

  const handleConfirmBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (signUpInfo.password !== signUpInfo.passwordConfirmation) {
      setConfirmErrorMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmErrorMessage("");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("https://panda-market-api.vercel.app/auth/signUp", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(signUpInfo),
    });

    if (res.ok) {
      router.push("/login");
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
                value={signUpInfo.email}
                onChange={handleChange}
                onBlur={handleInputBlur}
              />

              <span className="errorMessage">{emailErrorMessage}</span>
            </div>

            <div className="input">
              <label htmlFor="nickname-input">닉네임</label>
              <input
                name="nickname"
                id="nickname-input"
                type="text"
                placeholder="닉네임을 입력해주세요."
                autoComplete="username"
                value={signUpInfo.nickname}
                onChange={handleChange}
                onBlur={handleNickNameBlur}
              />

              <span className="errorMessage">{nickNameErrorMessage}</span>
            </div>

            <div className="input">
              <label htmlFor="password-input">비밀번호</label>

              <div className="password">
                <input
                  name="password"
                  id="password-input"
                  type={isPasswordHidden ? "text" : "password"}
                  placeholder="비밀번호를 입력해주세요"
                  autoComplete="new-password"
                  value={signUpInfo.password}
                  onChange={handleChange}
                  onBlur={handlePasswordBlur}
                />
                <button
                  className="passwordToggleBtn"
                  type="button"
                  onClick={handlePasswordToggleClick}
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

            <div className="input">
              <label htmlFor="passwordCheck-input">비밀번호 확인</label>

              <div className="password">
                <input
                  name="passwordConfirmation"
                  id="passwordCheck-input"
                  type={isPasswordConfirmHidden ? "text" : "password"}
                  placeholder="비밀번호를 다시 한 번 입력해주세요"
                  autoComplete="new-password"
                  value={signUpInfo.passwordConfirmation}
                  onChange={handleChange}
                  onBlur={handleConfirmBlur}
                />
                <button
                  className="passwordToggleBtn"
                  type="button"
                  onClick={handlePasswordConfirmToggleClick}
                >
                  {isPasswordHidden ? (
                    <Image src={EyeShowIcon} alt="" />
                  ) : (
                    <Image src={EyeIcon} alt="" />
                  )}
                </button>
              </div>

              <span className="errorMessage">{confirmErrorMessage}</span>
            </div>

            <button className="signupBtn" type="submit" disabled={!signUpValid}>
              회원가입
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
          이미 회원이신가요? <Link href={"/login"}>로그인</Link>
        </p>
      </div>
    </div>
  );
}
