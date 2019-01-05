import React, { Component } from 'react';
// class DlList extends Component{

// }
import "./index.css"

const DlList = (props) => {
    const { Dlitem } = props
    
    return <li>
        <dl>
            <dt>
                <img src={Dlitem.picUrl} alt="" />
            </dt>
            <dd>
                <h3>
                    {Dlitem.topTitle}
                </h3>
                <div>
                    {
                        Dlitem.songList.map((item, index) => {
                            return <p key={index}>
                                        <b> {index + 1} </b>
                                        <span className="text_name">   {item.songname}  &nbsp;</span>
                                        -{item.singername}
                                    </p>
                        })
                    }
                </div>
            </dd>
           
        </dl>
    </li>
}

export default DlList;