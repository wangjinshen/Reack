import Suning from './../contents/Suning/index';
import Particulars from './../contents/Suning/user/particulars';
import List from './../contents/Suning/list/indexList';
import Shopping from './../contents/Suning/shopping/index';
import Vehicle from './../contents/vehicle/index';
import VehicleUser from '../contents/vehicle/user';
import VehicleProfessional from './../contents/vehicle/professional/index';
import VehicleCompile from './../contents/vehicle/compile/index';

export default [
    {
        path: "/Suning",
        component: Suning,
        children: [
            {
                name: "商品",
                path: "/Suning/list",
                component: List
            }, {
                name: "购物车",
                path: "/Suning/shopping",
                component: Shopping
            }, {
                name: "详情",
                path: "/Suning/particulars",
                component: Particulars
            }
        ]
    },
    {
        path: "/Vehicle",
        component: Vehicle,
        children: [
            {
                name: "我的",
                path: "/Vehicle/user",
                component: VehicleUser
            }, {
                name: "业务",
                path: "/Vehicle/Professional",
                component: VehicleProfessional
            }, {
                name: "编辑",
                path: "/Vehicle/Compile",
                component: VehicleCompile
            }
        ]
    }
]