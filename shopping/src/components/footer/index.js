import React, { Component } from 'react';
import { connect } from 'react-redux';
class Footer extends Component {

    render() {

        const { sum, pricess } = this.props.prices
        return (
            <footer>
                <span>
                    数量:{sum}
                </span>
                <b>
                    价格:{pricess}
                </b>


            </footer>
        )
    }
}

export default
    connect((state) => {
        return state
    })(Footer)