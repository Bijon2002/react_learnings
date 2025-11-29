import React from 'react';


class Bar extends React.Component {

    constructor() {
        super();
        this.state = {color: 'blue' };
    }
    render() {
        return (
        <>
        
        <h1>my bar color is {this.state.color}</h1>
        <button onClick={() => this.setState({ color: 'red' })}>change color</button>

        </>
        );

}
}
export default Bar;
