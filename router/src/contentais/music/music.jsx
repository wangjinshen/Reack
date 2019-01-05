import React, { Component } from 'react';
import RouteView from './../../router/RouteView';
import { NavLink } from "react-router-dom"
import "./index.css"



import Header from './../../components/herder/index';
class Music extends Component {
    render() {
        const { routers } = this.props
        return <div className="wrapper">
            <Header></Header>
            <nav className="mod_nav">
                <NavLink to="/music/renk" >推荐</NavLink>
                <NavLink to="/music/toplist">排行榜</NavLink>
                <NavLink to="/music/search">搜索</NavLink>
            </nav>
            <RouteView routers={routers}></RouteView>
        </div>
    }
}
export default Music;