import React,{Component} from 'react';
import {Provider} from "react-redux";
import store from './redux-three/store';
import App from './containers/app-three'

export default class App3 extends Component {

    render() {
        return (
            <>
                <Provider store={store}>
                    <App/>
                </Provider>
            </>
        );
    }

};