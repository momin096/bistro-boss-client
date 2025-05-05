import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";











const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'menu',
                element: <Menu />,
            },
            {
                path: 'order/:category',
                element: <Order />
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path: 'secret',
                element: <PrivateRoute>
                    <Secret />
                </PrivateRoute>
            }

        ]
    },
    {
        path: '/dashboard',
        element:
            <PrivateRoute  >
                <Dashboard />
            </PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart />,
            },

            // ADMIN ROUTES
            {
                path: 'users', 
                element: <AllUsers />
            }
        ]
    }
]);


export default router;