import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageNotFound from "../components/PageNotFound/PageNotFound";

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
                element: <p>Aqui va el form de login</p>
            }
        ],
    },
    {
        path: "*",
        element: <PageNotFound/>
    }
]);