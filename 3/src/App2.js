import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink as Link, Switch} from 'react-router-dom';

class A extends Component {

    render() {
        return (
            <div>
                A
            </div>
        );
    }
}

class B extends Component{

    render() {
        return (
            <div>
                B
            </div>
        );
    }
}


class C extends Component{

    render() {
        return (
            <div>
                C
            </div>
        );
    }
}

export default class App2 extends Component {




    render() {
        return (
            <>
                <Router children={<hr/>}>
                    <div>
                        <ul>
                            <li>
                                <Link  to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/about/1">About</Link>
                            </li>
                            <li>
                                <Link to="/route/children">Route children</Link>
                            </li>
                            <li>
                                <Link to="/ROUTE/SENSITIVE">Route sensitive</Link>
                            </li>
                        </ul>
                    </div>
                    <hr/>
                    <Route exact  path="/" component={A}/>
                    <Route exact path="/about"  component={B}/>
                    <Route path="/about/1"  component={C}/>
                    <Route path="/ROUTE/SENSITIVE"  sensitive  component={(...a) => {console.log(a);return <a>1231</a>}}/>
                    <Route path="/route/children" children={"一直显示"}/>
                </Router>
            </>
        );
    }


}