import React, {Component} from 'react';
import {Route, BrowserRouter as Router, NavLink as Link,Switch, Redirect} from 'react-router-dom';
import './App5.css'


class UserMenu extends Component {

    render() {
        return (
            <>
                <Router history="hash">
                    <div className="row">
                        <div className="col-3 list-group">
                            <Link exact="true" className="list-group-item list-group-item-action" to="/home">
                                <div>Home</div>
                            </Link>
                            <Link exact="true" activeClassName="active" className="list-group-item list-group-item-action" to="/about">
                                <div >About</div>
                            </Link>
                        </div>
                        <div className="col-5">
                            <Switch>
                                <Route path="/home" component={Home} exact/>
                                <Route path="/about" component={About} exact/>
                                <Redirect push="true" from="" to="/home"/>
                            </Switch>
                        </div>


                    </div>
                </Router>
            </>
        )
    }

}

class Home extends Component {

    render() {
        return (
            <div>
                Home
            </div>
        );
    }

}

class About extends Component {

    render() {
        return (
            <div>
                About
            </div>
        );
    }

}

export default class App5 extends React.Component {

    render() {
        return (
            <>
                <div className="container">
                    <UserMenu/>
                </div>
            </>
        );
    }

}