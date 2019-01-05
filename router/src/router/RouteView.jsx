
import RouteConfig from './RouteConfig';
import React, { Component } from 'react';
import MapRouter from './mapRouter';

class RouteView extends Component {
    render() {
        const { routers } = this.props
        return <MapRouter routers={routers === undefined ? RouteConfig : routers} ></MapRouter>
    }
}
export default RouteView;