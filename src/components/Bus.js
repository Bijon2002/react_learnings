import React from "react";

class bus extends React.Component{

      constructor(){
            super();
            this.state={
                color:"red"
            };
        }
    render(){
      
        return(
            <>
            <h1>This is bus color is  {this.state.color}</h1>
            <button onClick={()=> this.setState({color:"blue"})}>change color </button>
            </>
        );
    }
} 
    
    export default bus;
