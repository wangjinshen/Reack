import React, { Component } from 'react';
import "./index.css"
class Header extends Component {
    render() {
        return <header className="mod_header">
            <i className="music_logo">QQ音乐</i>
            <span href="javascript:;" className="btn_download">下载APP</span>
        </header>
    }
}
export default Header;