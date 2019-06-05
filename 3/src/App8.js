import React, {Component} from 'react';

import {Button, Toast} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';


import ReactDOM from 'react-dom';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'antd/dist/antd.css';
import './index.css';


export default class App8 extends Component {

    constructor(props, context) {
        super(props, context);
        console.log(arguments);
        this.handleClick = this.handleClick.bind();
    }


    handleClick = () => {
        Toast.offline('成功', 1, null, true)
    }

    render() {
        return (
            <>
                    <Button type="primary" onClick={this.handleClick}>Start</Button>
                    <Button type="ghost">Start</Button>
                    <Button type="warning">Start</Button>
            </>
        );
    }

};