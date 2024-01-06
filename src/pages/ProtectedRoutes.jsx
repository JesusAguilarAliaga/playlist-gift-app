import { Navigate, Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { fetchGetAll } from "../store/slices/fetchCrud";

const ProtectedRoutes = () => {
  const tokenUser = useSelector((store) => store.tokenUser.tokenUser.token);
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(tokenUser){
      dispatch(fetchGetAll())
    }
  }, [tokenUser])

  if (tokenUser) {
    return <Outlet  />;
  }else{
    return <Navigate to="/" />
  }
}
export default ProtectedRoutes