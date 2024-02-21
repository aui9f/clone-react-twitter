import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Layout from "@/components/layout"
import About from "./routes/About";
import ProtectedRoute from "@/components/protected-route";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedRoute><Layout/></ProtectedRoute>,
        children: [
            {
                path:'',
                element: <Home/>
            }, {
                path: '/about',
                element: <About/>
            }
        ]
        
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <SignUp/>
    }
])

export default router;