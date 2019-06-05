import React, {Component, Fragment} from 'react';
import {Route, BrowserRouter as Router, NavLink as Link, Prompt, Switch, Redirect} from 'react-router-dom';

class NewsDetail extends Component {


    render() {
        return (
            <>
                <ul>
                    <li>id:</li>
                    <li>title:</li>
                    <li>content:</li>
                </ul>
            </>
        );
    }


}

class News extends Component {

    state = {
        newsArr: [
            {id: 1, title: '标题1', content: "人生若只如初见"},
            {id: 2, title: '标题2', content: "何事秋风悲画扇"},
            {id: 3, title: '标题3', content: "比翼连枝当日愿"},
            {id: 4, title: '标题4', content: "骊山语罢清宵半"}
        ]
    }


    render() {
        return (
            <>
                <ul>
                    {
                        this.state.newsArr.map((val, i, array) => <li
                            key={val.id}>
                            <a href={`/home/newsDetail/${val.id}`}>{val.title}</a>
                        </li>)
                    }
                </ul>
                <Route path="/home/newsDetail/:id"/>
            </>
        );
    }

}

class Message extends Component {

    state = {
        messages: []
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                messages: [
                    {id: 1, title: '标题1', content: "人生若只如初见"},
                    {id: 2, title: '标题2', content: "何事秋风悲画扇"},
                    {id: 3, title: '标题3', content: "比翼连枝当日愿"},
                    {id: 4, title: '标题4', content: "骊山语罢清宵半"}
                ]
            })
        }, 2000)
    }

    render() {
        return (
            <>
                <ul>
                    {
                        this.state.messages.map((val, i) =>
                            <li key={i}>
                                <a href="">{val.title}</a>
                            </li>)
                    }
                </ul>
            </>
        );
    }
}

function Home() {
    return (
        <>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link" to="/home/news">News</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/home/message">Message</Link>
                </li>
            </ul>
            <div>
                <Switch>
                    <Route path={`${arguments[0].match.path}/news`} component={News}></Route>
                    <Route path={`${arguments[0].match.path}/message`} component={Message}></Route>
                    <Redirect to={`${arguments[0].match.path}/news`}/>
                </Switch>
            </div>
        </>
    );
}

export default class App6 extends Component {

    constructor(props) {
        super(props);
        this.getUser = this.getUser.bind()
    }

    getUser(message, callback) {
        const allowTransition = window.confirm(message);
        callback(allowTransition);
    }


    render() {
        return (
            <div>
                <div className="row">

                    <Router hashType="hashbang" getUserConfirmation={this.getUser} basename="/a/b/c/d/e/c/">
                        <div className="col-2 list-group">
                            <Link exact to="/home/" className="list-group-item">Home</Link>
                            <Link exact to="/about/" className="list-group-item">About</Link>
                            <Link exact to={{
                                pathname: '/help',
                                search: '?sort=name',
                                hash: '#the-hash',
                                state: {
                                    fromDashboard: true
                                }
                            }} className="list-group-item">Help</Link>
                        </div>
                        <div className="col-5">
                            <Switch>
                                <Route path="/home" component={Home}></Route>
                                <Route path="/about">
                                    About
                                </Route>

                                <Route children={({match, ...rest}) => (
                                    <div>
                                        12313212
                                    </div>
                                )} path="/help">
                                    Help
                                </Route>
                                <Redirect to="/home"/>
                            </Switch>
                        </div>

                        <Prompt
                            message="你确定切换吗?"
                            when={false}
                        />

                    </Router>
                </div>
            </div>
        );
    }

}