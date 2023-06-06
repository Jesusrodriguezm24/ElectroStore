import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Login from "../pages/Login/Login";
import Puchases from "../pages/Puchases/Puchases";
import ProtectedRoute from "../components/common/ProtectedRoute/ProtectedRoute";
import Profile from "../pages/Profile/Profile";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/purchases",
                element: 
                ( <ProtectedRoute>
                    <Puchases/>
                  </ProtectedRoute> 
                ),
            },
            {
                path: "/profile",
                element: (
                    <ProtectedRoute>
                        <Profile/>
                    </ProtectedRoute>
                ),
            },
            {
                path: "product/:productId",
                element: <p>Products</p>
            }
            
        ],
    },
    {
        path: "*",
        element: <PageNotFound/>
    }
]);