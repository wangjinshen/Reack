import React, { Component } from 'react';
import Axios from 'axios';
import "./index.css"
import DlList from './dlList/index';

class RankingList extends Component {
    constructor(){
        super()
        this.state={
            toplist:[]
        }
    }
    componentDidMount(){
        Axios.get("/music/toplists").then((res) => {
           
            this.setState({
                toplist: res.data.data
            })
        })
    }
    render() {
        
         const List = this.state.toplist
         
        return <ul className="loaded current_page">
                {
                    List.topList&&List.topList.map((item,index)=>{
                        return <DlList key={item.id} Dlitem = {item}></DlList>
                    })
                    
                }
            排行榜
        </ul>
    }
}
export default RankingList;