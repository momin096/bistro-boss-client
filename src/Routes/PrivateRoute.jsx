import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../Pages/Shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loading />;
    }
    if (user && !loading) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />

};

export default PrivateRoute;