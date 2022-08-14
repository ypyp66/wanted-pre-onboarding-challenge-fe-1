import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getTodoById, getTodoList } from "~/api/todo";
import { TODO_DETAIL, TODO_LIST } from "~/constant/todo/queryKey";
import { Todo } from "~/model/auth";

function useTodoQuery(id: string = "") {
  const getTodoAll = useQuery<Todo[], AxiosError>([TODO_LIST], () =>
    getTodoList()
  );

  const getTodoDeatil = useQuery<Todo, AxiosError>(
    [TODO_DETAIL],
    () => getTodoById(id),
    {
      enabled: !!id,
    }
  );

  return {
    getTodoAll,
    getTodoDeatil,
  };
}

export default useTodoQuery;
