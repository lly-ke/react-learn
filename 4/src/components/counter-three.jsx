import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    }


    increment = () => {
        this.props.increment(2)
    }

    render() {
        return (
            <>
                <h1>count: {this.props.count}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={() => this.props.decrement(2)}>decrement</button>
            </>
        );
    }

};