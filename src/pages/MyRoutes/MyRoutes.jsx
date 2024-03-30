import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home";
import RootLayout from "../RootLayout/RootLayout";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import MarketingTeam from "../../Components/MarketingTeam/MarketingTeam";
import Development_Tem from "../../Components/Development_Tem/Development_Tem";
import Provlem_Solve_Team from "../../Components/Provlem_Solve_Team/Provlem_Solve_Team";
import Roadmap from "../../Components/Products/Roadmap/Roadmap";
import Feedback from "../../Components/Products/Feedback/Feedback";
import Team from "../../Components/Products/Team/Team";
import Analytics from "../../Components/Products/Analytics/Analytics";
import Performance from "../../Components/Products/Performance/Performance";
import Dashboard from "../../Components/Team/Dashboard/Dashboard";
import Realtime from "../../Components/Team/Realtime/Realtime";
import Events from "../../Components/Team/Events/Events";
import Office from "../../Components/Office/Office";
import Design from "../../Components/Design/Design";
import Settings from "../../Components/Settings/Settings";


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
            {
                path: '/development_team',
                element: <Development_Tem></Development_Tem>
                
            },
            {
                path: '/problem_solve_team',
                element:<Provlem_Solve_Team></Provlem_Solve_Team>
                
            },
            {
                path: "/Products/Roadmap",
                element:<Roadmap></Roadmap>
                
            },
            {
                path: "/Products/Feedback",
                element:<Feedback></Feedback>
                
            },
            {
                path: "/Products/Performance",
                element: <Performance></Performance>
                
            },
            {
                path: "/Products/Team",
                element:<Team></Team>
                
            },
            {
                path: "/Products/Analytics",
                element: <Analytics></Analytics>
                
            },
            {
                path: "/Team/Dashboard",
                element: <Dashboard></Dashboard>
                
            },
            {
                path: "/Team/Realtime",
                element: <Realtime></Realtime>
                
            },
            {
                path: "/Team/Events",
                element: <Events></Events>
                
            },
            {
                path: "/office",
                element: <Office></Office>
                
            },
            {
                path: "/design",
                element: <Design></Design>
                
            },
            {
                path: "/setting",
                element: <Settings></Settings>
                
            },
           
        ]

    },

])

export default MyRoutes;