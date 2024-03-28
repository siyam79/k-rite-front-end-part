import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home";
import RootLayout from "../RootLayout/RootLayout";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import MarketingTeam from "../../Components/MarketingTeam/MarketingTeam";


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
            {
                path: '/marketing_team',
                element: <MarketingTeam></MarketingTeam>
                
            },
           
        ]

    },

])

export default MyRoutes;