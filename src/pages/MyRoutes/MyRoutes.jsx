import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home";
import RootLayout from "../RootLayout/RootLayout";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";


const MyRoutes = createBrowserRouter([
   
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
                
            },
           
        ]

    },

])

export default MyRoutes;