import React, {Component} from 'react';
import './../app.css';

const ColorChange = (WrappedComponent) => {
    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                color: "dark",
        
            }
        }

        handleChangeColor (backColor){
            this.setState({color:backColor === "dark" ? "light" : "dark"});
        }

        render() {
            return (
                <WrappedComponent {...this.props} color={this.state} onClick = {() => this.setState(this.state.color)} changeColor={() => this.handleChangeColor(this.state.color !== this.setState)}/>
            );
        }

    }
};

export default ColorChange;