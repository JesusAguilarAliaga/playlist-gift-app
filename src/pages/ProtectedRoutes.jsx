import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedRoutes = () => {
  const tokenUser = useSelector((store) => store.tokenUser.tokenUser.token);

  if (tokenUser) {
    return <Outlet  />;
  }else{
    return <Navigate to="/" />
  }
}
export default ProtectedRoutes