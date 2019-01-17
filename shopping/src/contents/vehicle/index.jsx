import React, { Component } from 'react'
import RouteView from './../../router/mapRouter';
import Header from './../../components/header/index';
import routerConfig from '../../router/routerConfig';
class Vehicle extends Component {
    render() {
        const { routes } = this.props;
        return (
            <div className="app">
                <Header routerConfig={routerConfig[1].children}></Header>
                <RouteView routes={routes} ></RouteView>
            </div>

        )
    }
}
export default Vehicle;