import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Layout/ErrorPage/ErrorPage";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
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
            }
        ]
    }
])