import React, { Component } from 'react'
import Header from './../../components/header/index';
import routerConfig from "../../router/routerConfig";
import RouteView from './../../router/mapRouter';
import Footer from './../../components/footer/index';

class Suning extends Component {
    render() {
        const { routes } = this.props
        return (
            <div className="app">
                <Header routerConfig={routerConfig[0].children}></Header>
                <RouteView routes={routes}></RouteView>
                <Footer></Footer>
            </div>
        )
    }
}
export default Suning;