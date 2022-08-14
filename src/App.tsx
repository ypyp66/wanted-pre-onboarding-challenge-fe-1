import { Navigate, Route, Routes } from "react-router-dom";

import AuthRoute from "~/components/AuthRoute";

import Auth from "./pages/auth";
import Register from "./pages/register";
import Todo from "./pages/todos";
import TodoDetail from "./pages/todos/[id]";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/todos" />} />
      <Route
        path="/todos"
        element={
          <AuthRoute onlyAuth>
            <Todo />
          </AuthRoute>
        }
      />
      <Route
        path="/todos/:id"
        element={
          <AuthRoute onlyAuth>
            <TodoDetail />
          </AuthRoute>
        }
      />
      <Route
        path="auth"
        element={
          <AuthRoute onlyNoAuth>
            <Auth />
          </AuthRoute>
        }
      ></Route>
      <Route path="register">
        <Route
          index
          element={
            <AuthRoute onlyNoAuth>
              <Register />
            </AuthRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
