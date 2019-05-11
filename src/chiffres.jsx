import React, {Component} from "react";

class Chiffre extends Component{
    render(){
        return(
            <div className="number">
            <p>{this.props.number}</p>  
            <h6>{this.props.des}</h6>
            </div>
        );
    }
}
export default Chiffre;  