import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
class Header extends Component {
   
    render() {
        const { routerConfig } = this.props
        return (
            <header>
                {
                    routerConfig.length && routerConfig.map((item, index) => {
                        return <NavLink to={item.path} key={index}>{item.name}</NavLink>
                    })
                }
            </header>
        )
    }
}

export default connect((state) => {
    return state
})(Header)