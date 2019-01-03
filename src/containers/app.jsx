import React from "react";
import Header from "comp/header";
import Layout from "comp/layout";
import { BrowserRouter as Router} from "react-router-dom";
import RouterView from "router";

class App extends React.Component {
    render() {
        return <div className="wraper">
            <Header></Header>
            <Layout>
                <Router>
                    <RouterView/>
                </Router>
            </Layout>
        </div>
    }
}
export default App;