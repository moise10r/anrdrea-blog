import React, { Component } from 'react';
import bg from "../assets/images/bg_1.jpg";
class Aside extends Component {
    // state = {  }
    render() { 
        return (<div className="aside-main-area">
            <div className="aside-main-container">
                <ul>
                    <li><a href="#2">Home</a></li>
                    <li><a href="#2">Fashion</a></li>
                    <li><a href="#2">Travel</a></li>
                    <li><a href="#2">About</a></li>
                    <li><a href="#2">Contact</a></li>
                </ul>
                    <a href="#2">
                        Andrea <span>Moore</span>
                    </a>
                <img src={bg} alt=""/>
            </div>
        </div>  );
    }
}
 
export default Aside;