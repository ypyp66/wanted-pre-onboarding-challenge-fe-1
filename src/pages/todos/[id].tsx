//@ts-nocheck
import { Suspense } from "react";
import { useParams } from "react-router-dom";
import useTodoQuery from "~/components/Todo/hooks/useTodoQuery";

function TodoDetail() {
  const params = useParams();
  const { id } = params;
  const { getTodoDeatil } = useTodoQuery(id!);
  const { data } = getTodoDeatil;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>TodoDetail</div>
      <div>
        <div>
          {id}, {data?.title}, {data?.content}
        </div>
        <div>createdAt: {new Date(data?.createdAt).toLocaleString()}</div>
        <div>updatedAt: {new Date(data?.updatedAt).toLocaleString()}</div>
      </div>
    </Suspense>
  );
}

export default TodoDetail;
