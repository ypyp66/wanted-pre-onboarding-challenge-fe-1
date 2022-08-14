import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo, deleteTodo, updateTodo } from "~/api/todo";
import { TODO_LIST } from "~/constant/todo/queryKey";

function useTodoMutation() {
  const queryClient = useQueryClient();
  const createMutation = useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries([TODO_LIST]);
    },
  });

  const updateMutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries([TODO_LIST]);
    },
  });

  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries([TODO_LIST]);
    },
  });

  return {
    createMutation,
    updateMutation,
    deleteMutation,
  };
}

export default useTodoMutation;
