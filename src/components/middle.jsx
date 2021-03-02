import React, { Component } from 'react';

import{IconContext} from "react-icons"

import {FiSearch} from "react-icons/fi"
import Article from './article';
class Middle extends Component {
    // state = {  }
    render() { 
        return (<div className="main-hear-middle">
                    <div className="article-container-left">
                    <Article/>
                    </div>
                    
                    
                    <div className="article-container-right">
                        <form action="" className="form-group">
                            <input type="text"laceholder="Type a Keyword and hit"/>
                            <IconContext.Provider value={{className:"left-icon"}}>
                                <FiSearch/>
                            </IconContext.Provider>
                        </form>
                        <h2>Categories</h2>
                        <ul>
                            <li>
                                <a href="#4">Fashion <span>(6)</span></a>
                            </li>
                            <li>
                                <a href="#4">Technology <span>(6)</span></a>
                            </li>   <li>
                                <a href="#4">Travel <span>(6)</span></a>
                            </li>   <li>
                                <a href="#4">Food<span>(6)</span></a>
                            </li>   <li>
                                <a href="#4">Photography <span>(6)</span></a>
                            </li>  
                        </ul>
                    </div>
                
        </div>  );
    }
}
 
export default Middle