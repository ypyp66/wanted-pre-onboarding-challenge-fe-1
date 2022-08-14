export const validation = {
  email: (emailValue: string) => {
    const emailRegex = /(@.)/;
    const result = emailRegex.test(emailValue);

    if (result) {
      return {
        message: "",
      };
    }
    return {
      message: "email 정규식에 맞지 않습니다",
    };
  },
  password: (passwordValue: string) => {
    const passwordRegex = /^\w{8,}/;
    const result = passwordRegex.test(passwordValue);

    if (result) {
      return {
        message: "",
      };
    }
    return {
      message: "password 정규식에 맞지 않습니다",
    };
  },
};
