import React, { Component } from 'react';

export class Counter extends Component {
    constructor() {
        super();
        this.counter = 0;
    }

    clickHandler = () => {
        console.log(this.counter);
        this.counter--;
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.clickHandler}>Inc</button>
                <span>{this.counter}</span>
            </div>
        );
    }
}