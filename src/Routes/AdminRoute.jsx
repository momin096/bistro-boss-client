import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Loading from "../Pages/Shared/Loading/Loading";

const AdminRoute = ({ children }) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading />;
    }
    if (user && isAdmin && !loading && !isAdminLoading) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />
};

export default AdminRoute;