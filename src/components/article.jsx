import React, { Component } from 'react';
import{BiCalendar} from "react-icons/bi";
import {AiOutlineFolder} from "react-icons/ai"
import{IconContext} from "react-icons"
import{BiComment} from "react-icons/bi"
import {RiArrowDropRightLine} from "react-icons/ri"
import image1 from "../assets/images/image_1.jpg"


class Article extends Component {
    // state = {  }
    render() { 
        return (      
        <div className="single-article">
        <div className="article-img">
            <img src={image1} alt=""/>
        </div>
        <div className="article-container">
            <h2>A Loving Heart is the Truest Wisdom</h2>
            <p className="availability">
                <span>
                     <IconContext.Provider value={{className:"calendar"}}>
                        <BiCalendar/>
                     </IconContext.Provider>
                     june 28,2019
                </span>
                <span>
                     <IconContext.Provider value={{className:"calendar"}}>
                        <AiOutlineFolder/>
                     </IconContext.Provider>
                     june 28,2019
                </span>
                 <span>
                     <IconContext.Provider value={{className:"calendar"}}>
                        <BiComment/>
                     </IconContext.Provider>
                     june 28,2019
                </span>

            </p>
            <p className="content">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <a className="readmore" href="#2">
               <span>Read more</span> 
            <IconContext.Provider value={{className:"left-arrow"}}>
                <RiArrowDropRightLine/>
            </IconContext.Provider>
            </a>
        </div>
            </div>);
    }
}
 
export default Article;