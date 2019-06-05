import React, {Component} from 'react';

import './App4.css'

export default class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.handlerSubmit = this.handlerSubmit.bind(this);
    }

    state = {
        pwd: ""
    }

    handlerSubmit(event) {

        event.preventDefault();
    }

    render() {
        return (
            <div className="loginForm">
                <form align="center">
                    用户名:<input type="text" ref={input => this.nameInput = input}/> <br/>
                    密码:<input type="text" ref={input => this.passwordInput = input} onChange={
                    event => {
                        this.setState({
                            pwd: event.target.value
                        })
                    }}/> <br/>
                    <input type="submit" onClick={this.handlerSubmit} value="登陆"/>
                </form>
            </div>
        )
    }

}

