import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import useAuth from "../hooks/useAuth";
import Loading from "../Routes/Loading";

const MainLayout = () => {
    const location = useLocation();
    const { loading } = useAuth();

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div className="">
            {
                noHeaderFooter || <NavBar />
            }
        <div className="min-h-screen">
                {
                    loading ? <Loading /> : <Outlet />
                }
            </div>
          
            {
                noHeaderFooter || <Footer />
            }
        </div>
    );
};

export default MainLayout;