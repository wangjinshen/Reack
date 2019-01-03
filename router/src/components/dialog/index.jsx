import React from "react";

class Dialog extends React.Component {
    render() {
        return <div className="dialog-wraper bd1">
        	<div className="dialog-header bdb1 p10">
                <span className="float-right" onClick={()=>{
                    this.props.close(false);
                }}>x</span>
        		标题
        	</div>
        	<div className="dialog-body p10">
        	内容
        	</div>
        </div>
    }
}
export default Dialog;