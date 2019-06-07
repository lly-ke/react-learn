import React, {Component} from 'react';
import {Provider} from 'react-redux';
import App from './containers/app';
import store from './redux-two/store';

export default class App2 extends Component {

    render() {
        return (
            <>
                <Provider store={store}>
                    <App/>
                </Provider>
            </>
        );
    }


}
