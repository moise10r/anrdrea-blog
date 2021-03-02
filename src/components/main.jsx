import React, { Component } from 'react';
import Middle from './middle';
import Aside from './navbar';
class Main extends Component {
    // state = {  }
    render() { 
        return ( <div className="main">
            <Aside/>
            <Middle/>
        </div> );
    }
}
 
export default Main;