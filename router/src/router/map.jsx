import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

class RouteMap extends React.Component {
    render() {
        const { routes } = this.props;
        const defaultRoute = <Route path="/" component={()=>{
            return <Redirect to="/home"/>
        }} key={1} exact/>
        return <Switch>
            {
                routes.map((item,index)=>{
                     const Comp = item.component;
                    return <Route path={item.path} component={(apiRouter)=>{
                        return <Comp routes={item.children} {...apiRouter}></Comp>
                    }} key={index}/>
                }).concat(defaultRoute)
            }
        </Switch>
    }
}
export default RouteMap;