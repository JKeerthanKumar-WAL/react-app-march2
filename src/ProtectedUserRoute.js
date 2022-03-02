import { Navigate, Outlet } from "react-router-dom";
const ProtectedUserRoute= () => {
    let loggedIn = parseInt(localStorage.getItem("loggedIn"));
    if(loggedIn){
        return <Outlet />
    }
    return <Navigate to="/login" />
};
export default ProtectedUserRoute;
