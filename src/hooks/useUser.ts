import { useQuery } from "@tanstack/react-query";
import { userLogin } from "~/api/auth";
import { USE_USER } from "~/constant/todo/queryKey";

type LoginParmas = {
  email: string;
  password: string;
};

export default function useUser(parmas: LoginParmas) {
  return useQuery([USE_USER], () => userLogin(parmas));
}
