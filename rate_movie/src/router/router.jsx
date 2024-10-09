import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../modules/Home";
import routerList from "./routerlist";
import LatestReleases from "../modules/LatestRelease";
import TopRatedMovies from "../modules/TopRatedMovies";


const route = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:routerList.home,
                element:<Home/>,
            },
            {
                path:routerList.lasterRelease,
                element:<LatestReleases/>
            },
            {
                path:routerList.topRatedMovies,
                element:<TopRatedMovies/>
            },
        ],
    }
])

export default route