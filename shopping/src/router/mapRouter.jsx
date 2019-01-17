import configRouter from "./routerConfig";

import React, { Component } from 'react'
import Routes from './index';
class RouteView extends Component {
    render() {

        return (
            <Routes routes={this.props.routes === undefined ? configRouter : this.props.routes}></Routes>
        )
    }
}

export default RouteView