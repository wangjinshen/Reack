import React from "react";
import RouterView from "router";
class Rank extends React.Component {
    render() {
    	const {routes} = this.props;
        return <div>
        	this is Rank page
        	<RouterView routes={routes}></RouterView>
        </div>
    }
}
export default Rank;