import React from "react";
import RouterView from "router";

class Music extends React.Component {

    render() {
    	const {routes} = this.props;
        return <div>
        this is music page
        	<RouterView routes={routes}/>
        </div>
    }
}
export default Music;