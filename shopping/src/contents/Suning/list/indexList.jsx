import React, { Component } from 'react'
import { connect } from 'react-redux';
import Dl from './dl/index';
class List extends Component {
  
  render() {
    const { data } = this.props
    
    return (
      <div className="section">
        <div className="sectionlist">
          {
            data.length && data.map((item, index) => {
              return <Dl item = {item} ind={index} key={index}></Dl>
            })
          }
        </div>

      </div>
    )
  }
}

export default connect((state) => {
  return state
}, (dispatch) => {
  return {
    addItem(payload) {
      dispatch({
        type: "ADDITEM",
        payload
      })
    }
  }
})(List)
