import React from "react";
import Chance from "chance"

class Detail extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: chance.first(),
            country: chance.country({full:true})  
        };
    }
    
    buttonClicked() {
        const newState = {
            name: chance.first()  
        };
        
        this.setState(newState);
    }
    
    shouldUpdateComponent() {
        return false;
    }
    
    render() {
        return (
            <div>
                <p>Hello, {this.state.name}!</p>
                <p>You're from {this.state.country}.</p>
                <button onClick={this.buttonClicked.bind(this)}>Meet someone new</button>
            </div>
        )
    }
}

export default Detail;