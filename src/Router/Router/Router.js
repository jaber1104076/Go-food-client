import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Layout/ErrorPage/ErrorPage";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import AllService from "../../Pages/Home/Services/AllService";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import UpdateReview from "../../Pages/MyReview/UpdateReview";
import ServiceReview from "../../Pages/ServiceReview/ServiceReview";
import SignUp from "../../Pages/Signup/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/allservices',
                element: <AllService></AllService>
            },
            {
                path: '/services/:id',
                element: <ServiceReview></ServiceReview>
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>
            },
            {
                path: '/reviews/update/:id',
                element: <UpdateReview></UpdateReview>
            },
        ]
    }
])