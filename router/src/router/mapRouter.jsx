import { Route, Switch,Redirect } from "react-router-dom"
import React, { Component } from 'react';
class MapRouter extends Component {

    render() {
        const {routers} = this.props
        console.log(routers);
        const defualtRouter = <Route path="/" key={"defualtRouter"} component={()=>{
            return <Redirect to="/music/renk"></Redirect>
        }}> </Route>
        return <Switch>
            {
                
                routers.map((item, index) => {
                    const Comp = item.component
                    return <Route path={item.path} component={
                        (api) => {
                           return <Comp routers={item.children} {...api}></Comp>
                        }
                    } key={index}></Route>
                }).concat(defualtRouter)
            }
        </Switch>
    }
}
export default MapRouter;