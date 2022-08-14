import { Navigate } from "react-router-dom";
import { useLocalStorage } from "~/hooks/useLocalStorage";

type Props = {
  onlyAuth?: boolean;
  onlyNoAuth?: boolean;
  children: JSX.Element;
};

const AuthRoute = ({
  children,
  onlyAuth = false,
  onlyNoAuth = false,
}: Props) => {
  const hasToken = !!useLocalStorage.get("jwt");

  console.log(hasToken);

  if (onlyAuth) {
    if (hasToken) {
      return children;
    }
    return <Navigate to="/auth" replace />;
  }
  if (onlyNoAuth) {
    // /auth, /register
    if (hasToken) {
      return <Navigate to="/" replace />;
    }
    return children;
  }

  return children;
};

export default AuthRoute;
