import React, { Component } from 'react'
import { connect } from 'react-redux';

class CehicleNav extends Component {
    constructor() {
        super()
        this.remove = this.remove.bind(this)
        this.add = this.add.bind(this)
    }
    remove(item) {
        const { myapp, list ,updataayapp,updatalist} = this.props
        let ind = myapp.indexOf(item);
        myapp.splice(ind, 1);
        item.checked = 1
        const com = list.filter((val) => {
            return val.ids === item.ids
        });
        if(com.length>=0){
            list.push(item)
        }
        updataayapp(myapp)
        updatalist(list)
    }
    add(item){
        const { myapp, list ,updataayapp,updatalist} = this.props;
        let ind = list.indexOf(item);
        list.splice(ind, 1);
        item.checked = 0
        const com = myapp.filter((val) => {
            return val.ids === item.ids
        });
        if(com.length>=0){
            myapp.push(item)
        }
        updataayapp(myapp)
        updatalist(list)

    }
    render() {
        const { myapps, flog } = this.props
        return (
            <div className="cheicleNav">
                {
                    myapps.map((item, index) => {
                        return (
                            <dl key={index} className={flog ? "jump" : null}>
                                <dt>
                                    <img src={item.src} alt="" />
                                </dt>
                                <dd>{
                                    item.name
                                }</dd>
                                {
                                    flog ? <div>{
                                        item.checked === 0 ? <span className="remove" onClick={
                                            () => {
                                                this.remove(item)
                                            }
                                        }>-</span> : <span className="remove" onClick={
                                            ()=>{
                                                this.add(item)
                                            }
                                        }>+</span>
                                    }</div> : null
                                }
                            </dl>
                        )
                    })
                }
            </div>
        )
    }
}

export default connect((state) => {
    return state
},(dispatch)=>{
    return{
        updataayapp(payload) {
            dispatch({ type: "MYAPP", payload })
        },
        updatalist(payload) {
            dispatch({ type: "UPLIST", payload })
        }
    }
})(CehicleNav)