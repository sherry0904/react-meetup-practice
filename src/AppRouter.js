import { useRoutes } from "react-router-dom";
import AllMeetUps from "./page/AllMeetUps";
import Favorites from "./page/Favorites";
import NewMeetUp from "./page/NewMeetUp";

const publicPath = '/creative/sherry/2022-reactPractice';

function AppRouter(){
    let routes = useRoutes([
        {
            path: publicPath+'/',
            element: <AllMeetUps/>
        },
        {
            path: publicPath+'/new-meetup',
            element: <NewMeetUp/>
        },
        {
            path: publicPath+'/favorites',
            element: <Favorites/>
        }
    ]);
    return routes;
}

export default AppRouter;