import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dl from './../list/dl/index';

class Shopping extends Component {
    constructor(props){
        super(props)
        this.state={
            reduceArr:props.reduceArr
        }
    }
    render() {
        const { reduceArr } = this.state;
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
