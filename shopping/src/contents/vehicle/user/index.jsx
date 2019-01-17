import React, { Component } from 'react'
import { connect } from 'react-redux';
import CehicleNav from '../../../components/cehicleNav';

 class VehicleUser extends Component {
    render() {
        const {myapp}=this.props;
        return (
            <div className="sectionlist" style={{margin:"10px"}}> 
                <CehicleNav myapps={myapp}></CehicleNav>
            </div>
        )
    }
}

export default connect((state)=>{
    return state
 })(VehicleUser)