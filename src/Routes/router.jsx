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
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/DashboardHome/UserHome";
import AdminHome from "../Pages/Dashboard/DashboardHome/AdminHome";











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
                path: 'user-home',
                element: <PrivateRoute >
                    <UserHome />
                </PrivateRoute>,
            },
            {
                path: 'cart',
                element: <PrivateRoute >
                    <Cart />
                </PrivateRoute>,
            },
            {
                path: 'payment',
                element: <PrivateRoute >
                    <Payment />
                </PrivateRoute>,
            },
            {
                path: 'payment-history',
                element: <PrivateRoute >
                    <PaymentHistory />
                </PrivateRoute>,
            },

            // ADMIN ROUTES
            {
                path: 'admin-home',
                element:
                    <AdminRoute >
                        <AdminHome />
                    </AdminRoute>
            },
            {
                path: 'users',
                element: <AdminRoute >
                    <AllUsers />
                </AdminRoute>
            },
            {
                path: 'add-items',
                element: <AdminRoute >
                    <AddItems />
                </AdminRoute>
            },
            {
                path: 'manage-items',
                element: <AdminRoute >
                    <ManageItems />
                </AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute>
                    <UpdateItem />
                </AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
        ]
    }
]);


export default router;