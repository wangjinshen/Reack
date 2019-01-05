import React, { Component } from 'react';
import Axios from 'axios';
import "./index.css"
import Swiper from 'react-id-swiper';
class RecommendedSwiper extends Component {
    constructor() {
        super()
        this.state = {
            swiper: []
        }
    }

    componentDidMount() {
        Axios.get("/music/renks").then((res) => {
            this.setState({
                swiper: res.data.slider
            })
        })
    }
    render() {
        const params = {
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
        }
        const slider = this.state.swiper
        console.log(slider)
        return (
            <div>
                {

                    slider.length && <Swiper {...params}>
                        {
                            slider.map((item, index) => {
                                return <div key={item.id}><img src={item.picUrl} alt="" /></div>
                            })
                        }
                    </Swiper>
                }

            </div>

        )
    }
}
export default RecommendedSwiper;