import React from 'react';
import PubSub from 'pubsub-js'


class A extends React.Component{



    render() {
        return (
            <div>
                A:{JSON.stringify(this.props.name)}
            </div>
        );
    }
}

class B extends React.Component{


    constructor(props) {
        super(props);
        this.publish = this.publish.bind(this);
    }

    publish(){
        PubSub.publish('demo', {
            name: 123123,
            age: 13
        });
    }

    render() {
        return (
            <div>
                B:{JSON.stringify(this.props.name)}
                <button onClick={this.publish}>发布消息</button>
            </div>
        );
    }
}

export  default class App1 extends React.Component {

    constructor(props) {
        super(props);
        PubSub.subscribe('demo', (msg,data) => {
            console.log(data);
            this.setState(data)
        })
    }


    state = {
        name: '张三'
    }

    render() {
        return (
            <div>
                <A name={this.state}/>
                <B name={this.state}/>
            </div>
        );
    }

}