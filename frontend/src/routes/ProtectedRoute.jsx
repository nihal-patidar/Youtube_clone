import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }) {
  const user = useSelector((store) => store.auth.user);
  const loading = useSelector((store) => store.auth.loading);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
