import React from "react";

class Apple extends React.Component
{
         render(){
            const {appleinfo} = this.props;
            const {type, color} = appleinfo;
             return(
                 <h1>im a {color} {type} apple </h1>
             );
         }
}

export default Apple;