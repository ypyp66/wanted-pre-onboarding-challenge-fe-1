import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

import useLogin from "~components/Login/hooks/useLogin";
import * as AuthApi from "~/api/auth";
import { useLocalStorage } from "~/hooks/useLocalStorage";

function Auth() {
  const navigate = useNavigate();
  const {
    email,
    password,
    emailError,
    passwordError,
    handleChange,
    handleBlur,
  } = useLogin();
  const isDisabled = emailError !== "" || passwordError !== "";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isDisabled) {
      const params = {
        email,
        password,
      };
      try {
        const res = await AuthApi.userLogin(params);
        console.log(res);
        useLocalStorage.set("jwt", res.token);
        navigate("/");
      } catch (err) {
        if (err instanceof AxiosError) {
          alert("Login Error");
        }
      }
    }
  }

  useEffect(() => {
    const hasToken = !!useLocalStorage.get("jwt");

    if (hasToken) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            required
            type="text"
            placeholder="이메일"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {emailError && <div>{emailError}</div>}
        </div>
        <div>
          <input
            required
            type="password"
            placeholder="비밀번호"
            name="password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {passwordError && <div>{passwordError}</div>}
        </div>
        <button disabled={isDisabled}>로그인</button>
      </form>
      <a href="/register">회원가입 하러 가기</a>
    </div>
  );
}

export default Auth;
