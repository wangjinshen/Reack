
import Music from './../components/music/music';
import TopList from './../components/music/toplist/toplist';
import Recommended from './../components/music/renk/index';
import Seach from './../components/music/search/index';

const RouteConfig = [
    {
        path: "/music",
        component: Music,
        children: [
            {
                path: "/music/renk",
                component: Recommended
            },
            {
                path: "/music/toplist",
                component: TopList

            },
            {
                path: "/music/search",
                component: Seach
            }
        ]
    }
]
export default RouteConfig;