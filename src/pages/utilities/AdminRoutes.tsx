import { useSelector } from "react-redux";
import { getUserType } from "../../features/authSlice";
import { Navigate } from "react-router-dom";

interface AdminRouteProps {
  children: React.ReactNode; 
}
const AdminRoutes = ({children}: AdminRouteProps): JSX.Element  => {
  const userType = useSelector(getUserType)
  if (userType !== "admin"){
    return <Navigate to="/"/>
  }
  return <>
     {children}
  </>; 
}

export default AdminRoutes