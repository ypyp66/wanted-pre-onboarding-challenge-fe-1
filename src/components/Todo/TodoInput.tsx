import React from "react";
import useTodoInput from "./hooks/useTodoInput";
import useTodoMutation from "./hooks/useTodoMutation";

function TodoInput() {
  const { createMutation } = useTodoMutation();

  const {
    currentTitle: title,
    currentContent: content,
    setCurrentContent: setContent,
    setCurrentTitle: setTitle,
  } = useTodoInput();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setContent("");
    setTitle("");
    createMutation.mutate({ title, content });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    switch (name) {
      case "title":
        setTitle(value);
        return;
      case "content":
        setContent(value);
        return;
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="title"
          value={title}
          onChange={handleChange}
        />
        <input
          name="content"
          placeholder="content"
          value={content}
          onChange={handleChange}
        />
        <button>제출</button>
      </form>
    </div>
  );
}

export default TodoInput;
