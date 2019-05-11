import React, {Component} from "react";
    
    class Lieu extends Component{
        render(){
            return(
                <div className="lieu">
                <img src={this.props.pic}></img>
                <h3>{this.props.detail}</h3>
                </div>
            );
        }
    }
 export default Lieu; 