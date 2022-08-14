import { useState } from "react";

function useTodoInput(title: string = "", content: string = "") {
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentContent, setCurrentContent] = useState(content);

  return {
    currentTitle,
    currentContent,
    setCurrentTitle,
    setCurrentContent,
  };
}

export default useTodoInput;
