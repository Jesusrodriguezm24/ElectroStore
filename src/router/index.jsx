import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Login from "../pages/Login/Login";
import Puchases from "../pages/Puchases/Puchases";
import ProtectedRoute from "../components/common/ProtectedRoute/ProtectedRoute";
import Profile from "../pages/Profile/Profile";

export const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: "/",
                element: <p>Lista de productos</p>
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
            }
            
        ],
    },
    {
        path: "*",
        element: <PageNotFound/>
    }
]);