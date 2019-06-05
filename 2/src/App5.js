import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class App5 extends Component {

    msg = 12313

    constructor(props){
        super(props);

        this.destroy = this.destroy.bind(this);
    }

    state = {
        opacity: 1
    }

    render() {
        return (
            <div id="content">
                <h2 style={{opacity: this.state.opacity}}>{this.msg}</h2>
                <button onClick={this.destroy}>关闭</button>
            </div>
        );
    }

    destroy(){
        ReactDOM.unmountComponentAtNode(document.querySelector("div"))
    }

    componentWillMount() {
        let self = this;

        this.intervalId = setInterval(function () {
            console.log("定时器还在启动");
            let {opacity} = self.state;
            if (opacity < 0) {
                opacity = 1;
            } else {
                opacity -= 0.1
            }

            self.setState({
                opacity: opacity
            })

        }, 200)
    }


    componentWillUnmount() {
        clearInterval(this.intervalId)
    }
};
