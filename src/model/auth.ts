export type Todo = {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateTodoResponse = {
  data: Todo;
};

export type GetTodoResponse = {
  data: Todo[];
};

export type DeleteTodoResponse = {
  data: null;
};
