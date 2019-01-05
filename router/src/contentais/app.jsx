import React, { Component } from 'react';

import { BrowserRouter as Router } from "react-router-dom"
import RouteView from './../router/RouteView';
class App extends Component {
    render() {
        return <div className="wrapper">
            <Router>
                <RouteView>

                </RouteView>
            </Router>
            aaa
        </div>
    }
}
export default App;