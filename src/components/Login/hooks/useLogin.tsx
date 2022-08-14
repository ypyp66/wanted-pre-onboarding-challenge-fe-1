import { validation } from "~lib/validation";
import React, { useState } from "react";

function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        return;
      case "password":
        setPassword(value);
        return;
    }
  }

  function handleBlur(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        const { message: emailErrorMsg } = validation.email(value);
        setEmailError(emailErrorMsg);
        return;
      case "password":
        const { message: passwordErrorMsg } = validation.password(value);
        setPasswordError(passwordErrorMsg);
        return;
    }
  }

  return {
    email,
    password,
    emailError,
    passwordError,
    handleChange,
    handleBlur,
  };
}

export default useLogin;
