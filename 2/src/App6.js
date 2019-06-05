import React from 'react';

export default class App6 extends React.Component {

    componentWillMount() {
        console.log("componentWillMount:",arguments);
    }


    render() {
        console.log("render:", arguments);
        return (
            <div>
                <button onClick={() => this.setState({
                    name: 123123
                })}>修改state</button>
            </div>
        );
    }



    componentDidMount() {
        console.log("componentDidMount:",arguments);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("componentWillUpdate:",arguments);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate:",arguments);
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log("shouldComponentUpdate:",arguments);
    // }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps:",arguments);

    }


    componentDidCatch(error, errorInfo) {
        console.log("componentDidCatch:",arguments);
        return true
    }


    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

};