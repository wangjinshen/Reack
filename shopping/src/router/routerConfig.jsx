import Suning from './../contents/Suning/index';
import Particulars from './../contents/Suning/user/particulars';
import List from './../contents/Suning/list/indexList';
import Shopping from './../contents/Suning/shopping/index';

export default [
    {
        path: "/Suning",
        component: Suning,
        children: [
            {
                name: "商品",
                path: "/Suning/list",
                component: List
            },{
                name: "购物车",
                path: "/Suning/shopping",
                component: Shopping
            }, {
                name:"详情",
                path: "/Suning/particulars",
                component: Particulars
            }
        ]
    }
]