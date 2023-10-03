import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { getUserType } from "../../features/authSlice";

const TeacherRoutes = ({children}: {children: React.ReactNode}): JSX.Element | null  => {
   const userType  = useSelector(getUserType); 
   if (userType!=="teacher") return <Navigate to="/" />; 

   return <>{children}</>; 
}

export default TeacherRoutes;