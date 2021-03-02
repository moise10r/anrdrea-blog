import React, { Component } from 'react';
import {IconContext} from "react-icons"
import{RiSendPlaneFill} from "react-icons/ri"
import{AiFillHeart} from "react-icons/ai"

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
                    <a className="logo" href="#2">
                        Andrea <span>Moore</span>
                    </a>
                    <h3>Subscribe for newsletter</h3>
                    <form action="">
                        <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter your email"/>
                                <span>
                                <IconContext.Provider value={{ className: "send-email" }}>
                                  <RiSendPlaneFill />
                                </IconContext.Provider>
                                </span>
                        </div>
                    </form>
                    <footer>
                        
                        <p class="pfooter">
Copyright ©2021 All rights reserved | This template is made with  by   <IconContext.Provider value={{ className: "send-email" }}>
                                  <AiFillHeart />
                                </IconContext.Provider><a href="#2" target="_blank">Moise Design</a>
                        </p>
                        
                    </footer>
            </div>
        </div>  );
    }
}
 
export default Aside;