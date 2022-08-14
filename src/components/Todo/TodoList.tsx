import { Suspense } from "react";
import useTodoQuery from "./hooks/useTodoQuery";
import TodoItem from "./TodoItem";

function TodoList() {
  const { getTodoAll } = useTodoQuery();
  const { data: todoList } = getTodoAll;

  return (
    <Suspense fallback={<div>Data 로딩중</div>}>
      <ul>
        {todoList?.reverse().map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </Suspense>
  );
}

export default TodoList;
