import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Todo } from "~/model/auth";
import EditableItem from "./EditableItem";
import useTodoInput from "./hooks/useTodoInput";
import useTodoMutation from "./hooks/useTodoMutation";

type Props = {
  todo: Todo;
};

type Mode = "read" | "update";

function TodoItem({ todo }: Props) {
  const { title, content } = todo;
  const [mode, setMode] = useState<Mode>("read");
  const navigate = useNavigate();
  const { currentTitle, currentContent, setCurrentContent, setCurrentTitle } =
    useTodoInput(title, content);
  const { updateMutation, deleteMutation } = useTodoMutation();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    switch (name) {
      case "title":
        setCurrentTitle(value);
        return;
      case "content":
        setCurrentContent(value);
        return;
    }
  }

  function handleEdit() {
    setMode("update");
  }

  function handleSubmit() {
    setMode("read");
    updateMutation.mutate({
      id: todo.id,
      title: currentTitle,
      content: currentContent,
    });
  }

  function handleClickTodo() {
    if (mode !== "read") {
      return;
    }
    navigate(`/todos/${todo.id}`);
  }

  function handleDelete() {
    deleteMutation.mutate({ id: todo.id });
  }

  return (
    <li>
      <span
        style={{
          marginRight: "10px",
        }}
        onClick={handleClickTodo}
      >
        <EditableItem
          mode={mode}
          name="title"
          value={currentTitle}
          handleChange={handleChange}
        />
        <span
          style={{
            margin: "0 10px",
          }}
        >
          /
        </span>
        <EditableItem
          mode={mode}
          name="content"
          value={currentContent}
          handleChange={handleChange}
        />
      </span>
      {mode === "read" && <button onClick={handleEdit}>✏️</button>}
      {mode === "update" && <button onClick={handleSubmit}>✅</button>}
      <button onClick={handleDelete}>❌</button>
    </li>
  );
}

export default TodoItem;
