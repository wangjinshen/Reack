import React, { Component } from 'react';
import { connect } from "react-redux"
import { axiosData ,axiosList} from './../api/index';
import { BrowserRouter as Router } from "react-router-dom"
import RouteView from './../router/mapRouter';

class App extends Component {
    componentDidMount() {
        this.props.updata()
        this.props.uplist()
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
        },
        uplist(){
            dispatch(axiosList(dispatch))
        }
    }
})(App)