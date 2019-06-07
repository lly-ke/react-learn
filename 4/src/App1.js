import React, {Component} from "react";
import * as actions from './redux-two/actions'

export default class App1 extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            count: 0
        }

        this.props.store.subscribe(() => {
            this.setState({
                count: this.props.store.getState()
            })
        })
    }



    increment = () => {
        this.props.store.dispatch(actions.incrementCreator(2))
    }

    decrement = () => {
        this.props.store.dispatch(actions.decrementCreator(2))
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        );
    }

}