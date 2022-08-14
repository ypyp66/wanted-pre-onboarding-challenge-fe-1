import React from "react";
import useLogin from "~components/Login/hooks/useLogin";
import * as AuthApi from "~/api/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const {
    email,
    password,
    emailError,
    passwordError,
    handleChange,
    handleBlur,
  } = useLogin();
  const isDisabled = emailError !== "" || passwordError !== "";
  const navigate = useNavigate();

  console.log(emailError, passwordError);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isDisabled) {
      const params = {
        email,
        password,
      };
      await AuthApi.userRegister(params);
      navigate("/");
    }
  }

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
        <button disabled={isDisabled}>회원가입</button>
      </form>
      <a href="/auth">로그인 하러 가기</a>
    </div>
  );
}

export default Register;
