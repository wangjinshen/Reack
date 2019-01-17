import React, { Component } from 'react';
import CehicleNav from './../../../components/cehicleNav/index';
import { connect } from 'react-redux';

class VehicleCompile extends Component {
    constructor() {
        super()
        this.addremove = this.addremove.bind(this)
    }
    addremove() {
        const { updataFlog,flog } = this.props;
        updataFlog(!flog)
    }
    render() {
        const { myapp, list } = this.props
        return (
            <div className="sectionlist" style={{ margin: "0" }}>
                <div className="title">
                    <span onClick={
                        (e) => {
                            console.log(8)
                            this.addremove()
                        }
                    }>编辑</span>
                </div>
                <CehicleNav myapps={myapp}></CehicleNav>
                <div className="title" style={{ justifyContent: "flex-start" }}>
                    <span>选择应用</span>
                </div>
                <CehicleNav myapps={list}></CehicleNav>
            </div>
        )
    }
}
export default connect((state) => {
    return state
}, (dispatch) => {
    return {
        updataFlog(payload) {
            dispatch({ type: "UPFLOG", payload })
        }
    }
})(VehicleCompile)