import { isAuthenticated as isAuth , getUserType} from '../../features/authSlice';
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment } from "react";

interface Props {
  children: React.ReactNode;
}

const LoginRequiredRoutes = ({ children }: Props): JSX.Element | null => {
  const isAuthenticated = useSelector(isAuth);
  const userType = useSelector(getUserType)

  if (!isAuthenticated) return <Navigate to="/login" />;
  if (userType !== "student") return <Navigate to="/login" />

  

  return <Fragment>{children}</Fragment>;
};

export default LoginRequiredRoutes;
