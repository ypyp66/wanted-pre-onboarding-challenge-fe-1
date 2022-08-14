import client from "~/lib/axios";

type LoginParmas = {
  email: string;
  password: string;
};

type LoginResponse = {
  message: string;
  token: string;
};
export async function userLogin(params: LoginParmas) {
  const { data } = await client.post<LoginResponse>("/users/login", params);
  return data;
}

export async function userRegister(params: LoginParmas) {
  const { data } = await client.post<LoginResponse>("/users/create", params);
  return data;
}
