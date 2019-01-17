import React, { Component } from 'react'
import { connect } from 'react-redux';

class Dl extends Component {
    constructor() {
        super()
        this.pricesSum = this.pricesSum.bind(this)
    }
    add = (item, ind) => {
        const { addItem, reduceArr, data } = this.props;
        let condition = reduceArr.filter((obj) => {
            return obj.promotionId === item.promotionId
        })

        let sum = Number.parseInt(item.sugType);
        if (condition.length <= 0) {
            item.sugType = sum += 1
            reduceArr.push(item)
        } else {
            item.sugType = sum += 1
        }
        addItem(reduceArr)
        this.pricesSum()
    }
    remove = (item, ind) => {
        const { addItem, reduceArr, data } = this.props;

        let sum = Number.parseInt(item.sugType);

        item.sugType = sum -= 1
        console.log(item)
        reduceArr.forEach(val => {


            if (item.promotionId === val.promotionId && val.sugType <= 0) {
                let sub = reduceArr.indexOf(item)
                reduceArr.splice(sub, 1)
            }
        });
        addItem(reduceArr)
        this.pricesSum()
    }

    pricesSum() {
        const prices = {
            sum: 0,
            pricess: 0
        }

        const { reduceArr, updataSum } = this.props
        reduceArr.forEach(obj => {
            prices.sum += obj.sugType;
            prices.pricess += obj.sugType * obj.price;
        });
        updataSum(prices)
    }
    render() {
        const { item, ind } = this.props
        return (
            <dl>
                <dt>
                    <img src={item.pictureUrl} alt="" />
                </dt>
                <dd>
                    <h3>
                        {
                            item.sugGoodsName
                        }
                    </h3>
                    <p>
                        {
                            item.price
                        }
                    </p>
                    <p className="add">
                        {
                            item.sugType > 0 ? <strong><span onClick={
                                () => {
                                    this.remove(item, ind)
                                }
                            }>减</span> <b>{item.sugType}</b></strong> : null
                        }
                        <span onClick={
                            (e) => {

                                this.add(item, ind)
                            }
                        }>加</span>
                    </p>
                </dd>
            </dl>
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
        },
        updataSum(payload) {
            dispatch({
                type: "UPDATASUM",
                payload
            })
        }
    }
})(Dl)
