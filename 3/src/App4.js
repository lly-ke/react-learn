import React from 'react';
import ReactDOM from 'react-dom';

export default class App4 extends React.Component{


    render() {
        let domNode = document.querySelector('div')

        console.log(domNode);

        return ReactDOM.createPortal(
            <a>123</a>,
            domNode
        );
    }

}