import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';

class Routes extends Component {
  render() {
    const { routes } = this.props;
    const defaultsRouter = <Route path="/" component={() => {
      return <Redirect to="/Suning/list"></Redirect>
    }} key={"defaultsRouter"} exact></Route>
    return (
      <Switch>
        {
          routes.length && routes.map((item, index) => {
            const Comp = item.component
            return <Route key={index} path={item.path} component={() => {
              return <Comp routes={item.children} ></Comp>
            }}></Route>
          }).concat(defaultsRouter)
        }
      </Switch>
    )
  }
}
export default Routes