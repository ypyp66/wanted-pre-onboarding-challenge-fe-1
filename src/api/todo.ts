import client from "~/lib/axios";
import {
  CreateTodoResponse,
  DeleteTodoResponse,
  GetTodoResponse,
} from "~/model/auth";

export type createTodoParams = {
  title: string;
  content: string;
};

export type updateTodoParams = createTodoParams & {
  id: string;
};

export type deleteTodoParams = Pick<updateTodoParams, "id">;

export const getTodoList = async () => {
  const {
    data: { data },
  } = await client.get<GetTodoResponse>("/todos");
  return data;
};

export const getTodoById = async (id: string) => {
  const {
    data: { data },
  } = await client.get<CreateTodoResponse>(`/todos/${id}`);
  return data;
};

export const createTodo = async (params: createTodoParams) => {
  const {
    data: { data },
  } = await client.post<CreateTodoResponse>("/todos", params);
  return data;
};

export const updateTodo = async ({ id, title, content }: updateTodoParams) => {
  const params = { title, content };
  const {
    data: { data },
  } = await client.put<CreateTodoResponse>(`/todos/${id}`, params);
  return data;
};

export const deleteTodo = async ({ id }: deleteTodoParams) => {
  const {
    data: { data },
  } = await client.delete<DeleteTodoResponse>(`/todos/${id}`);
  return data;
};
