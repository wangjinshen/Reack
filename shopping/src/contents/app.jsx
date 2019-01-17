import React, { Component } from 'react';
import { connect } from "react-redux"
import { axiosData } from './../api/index';
import { BrowserRouter as Router } from "react-router-dom"
import RouteView from './../router/mapRouter';

class App extends Component {
    componentDidMount() {
        this.props.updata()
    }
    render() {
        return <div className="app">
            <Router>
                <RouteView></RouteView>
            </Router>
        </div>
    }
}

export default connect((state) => {
    return state
}, (dispatch) => {
    return {
        updata() {
            dispatch(axiosData(dispatch))
        }
    }
})(App)