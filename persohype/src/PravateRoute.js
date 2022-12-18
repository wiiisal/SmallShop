import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {
    let isAuth ={'token':false}
   return (
       isAuth.token ? <Outlet/> : <Navigate to='/login' />
   )
}

export default PrivateRoute