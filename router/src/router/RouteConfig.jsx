

// import TopList from './../components/music/toplist/toplist';

// RankingList
import Music from './../contentais/music/music';
import Recommended from './../contentais/music/renk/index';
import Seach from './../contentais/music/search/index';
import RankingList from './../contentais/music/toplist/toplist';

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
                component: RankingList

            },
            {
                path: "/music/search",
                component: Seach
            }
        ]
    }
]
export default RouteConfig;