import React, { Component } from 'react';
import RightNav from "./RightNav"


class Burger extends Component {
    state = {  
        burger:false
     }
     handleIsburger = () => {
        this.setState({ burger: !this.state.burger });
    }
    render() { 
        return ( 
            <div id= "Hmaburger"> 
            <div id="Burger"  >
               
            <div  onClick={this.handleIsburger} className={this.state.burger ? "DIV-1-X" : "DIV-MAIN"}/>
            <div onClick={this.handleIsburger} className={this.state.burger ? "DIV-2-X" : "DIV-MAIN"}/>
            <div onClick={this.handleIsburger}className={this.state.burger ? "DIV-3-X" : "DIV-MAIN"}/>
            
            
            
             </div> 
             <RightNav show={this.state.burger}/>
             </div> 
             
                   
         );
    }
}
 
export default Burger;
