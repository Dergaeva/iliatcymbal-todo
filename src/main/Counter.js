import React, { Component } from 'react';

export class Counter extends Component {
    constructor() {
        super();
        this.counter = 0;
    }

    clickHandler = () => {
        this.counter = this.counter + 1;
        console.log(this.counter);
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