import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dl from './../list/dl/index';

class Shopping extends Component {
    render() {
        const { reduceArr } = this.props;
        return (
            
            <div className="sectionlist">
                {
                    reduceArr.map((item,index)=>{
                        return <Dl item = {item} ind={index} key={index}></Dl>
                    })
                }

            </div>
        )
    }
}
export default  connect((state)=>{
    return state
})(Shopping)
