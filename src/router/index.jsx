import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Login from "../pages/Login/Login";

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
            
        ],
    },
    {
        path: "*",
        element: <PageNotFound/>
    }
]);