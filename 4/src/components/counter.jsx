import React, {Component} from 'react';
import PropTypes from "prop-types";
import {decrementCreator, incrementCreator} from "../redux-two/actions";

export default class counter extends Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        incrementCreator: PropTypes.func.isRequired,
        decrementCreator: PropTypes.func.isRequired
    }

    increment = () => {
        this.props.incrementCreator(2)
    }


    decrement = () => {
        this.props.decrementCreator(2)
    }


    render() {
        return (
            <>
                <h1>{this.props.count}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </>
        );
    }


}
