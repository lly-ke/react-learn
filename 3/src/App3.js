import React, {Component} from 'react';

class A extends Component {

    render() {
        return (
            <div>
                A
            </div>
        );
    }

}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log('Error::::', error);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>OOPS!. WE ARE LOOKING INTO IT.</h1>;
        }

        return this.props.children;
    }
}


class B extends Component {

    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        console.log(arguments);
        // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log('Error::::', error);
    }

    render() {
        if (this.hasError) {
            return (
                <div>
                    Error Page
                </div>
            )
        } else {
            return (
                <div>
                    {this.props.children}
                </div>
            );
        }
    }

}

export default class App3 extends Component {


    render() {
        return (
            <div>
                <ErrorBoundary>
                    <B/>
                </ErrorBoundary>
            </div>
        );
    }

}
