import Login from "view/login";
import Home from "view/home";
import Registry from "view/registry";

import Music from "view/music";
import Rank from "view/music/rank";
import Detail from "view/music/detail";


const Routes = [{
    path: "/home",
    component: Home
}, {
    path: "/login",
    component: Login

}, {
    path: "/registry",
    component: Registry
}, {
    path: "/music",
    component: Music,
    children: [{
        path: "/music/rank",
        component: Rank,
        children: [{
            path: "/music/rank/detail",
            component: Detail
        }]
    }]
}]

export default Routes;