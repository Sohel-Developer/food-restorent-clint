import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashbord from "../Layout/Dashbord";
import AddItem from "../Pages/Dashbord/Admin/AddItem";
import ManageItems from "../Pages/Dashbord/Admin/ManageItems";
import UpdateItem from "../Pages/Dashbord/Admin/UpdateItem";
import AllUsers from "../Pages/Dashbord/Admin/AllUsers";
import ManageBokings from "../Pages/Dashbord/Admin/ManageBokings";
import UserHome from "../Pages/Dashbord/Users/UserHome";
import Reservation from "../Pages/Dashbord/Users/Reservation";
import PaymentHistory from "../Pages/Dashbord/Users/PaymentHistory";
import MyCart from "../Pages/Dashbord/Users/MyCart";
import Review from "../Pages/Dashbord/Users/Review";
import MyBokings from "../Pages/Dashbord/Users/MyBokings";
import Payment from "../Pages/Dashbord/Users/Payment";
import CheckOut from "../Pages/Dashbord/Users/CheckOut";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <OurMenu />
            },
            {
                path: '/shop',
                element: <OurShop />
            },
            {
                path: '/contact',
                element: <Contact />
            },

        ]
    },
    {
        path: '/dashbord',
        element: <Dashbord />,
        children: [
            {
                path: 'additem',
                element: <AddItem />
            },
            {
                path: 'manageitems',
                element: <ManageItems />
            },
            {
                path: 'updateitem',
                element: <UpdateItem />
            },
            {
                path: "allusers",
                element: <AllUsers />
            },
            {
                path: "bookings",
                element: <ManageBokings />
            },
            /* Users Link */

            {
                path: 'user',
                element: <UserHome />
            },
            {
                path: 'reservation',
                element: <Reservation />
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'checkout',
                element: <CheckOut />
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory />
            },
            {
                path: 'cart',
                element: <MyCart />
            },
            {
                path: 'review',
                element: <Review />
            },
            {
                path: 'booking',
                element: <MyBokings />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    }
]);