import React from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent.js';
import PropsComponent from './components/PropsComponent.js'
import $ from 'jquery';

class ClassComponent extends React.Component{

    render(){
        return (
            <div>
                es6类组件
            </div>
        )
    }

}

export default class App extends React.Component {

    defaultProps = {
        age:12
    }

    constructor(props){
        super(props)

        this.state = {
            value: 1
        }
    }


    updateState(val){
        this.setState({
                    value: this.state.value + 1
        })
        this.setState({
            value: this.state.value + 1
        })
    }

    jqueryJsonp(){
        $.ajax({
            url: 'http://jsfiddle.net/echo/jsonp/',
            dataType:'jsonp',
            success: function(data){
                console.log('ajax', data);
            }
        })
    }


    MyComponent(){
        return (
            <div>工厂函数组件</div>
        )
    }

    render() {
        console.log(this);

        return (
            <div>

                {this.MyComponent()}
                <ClassComponent/>

                <FirstComponent/>
                <hr/>

                {/*<PropsComponent updateUser={this.updateState} children={"默认children内容"}/>*/}
                <hr/>

                <button  onClick={event => this.jqueryJsonp()}>jsonp</button>
                <hr/>


            </div>

        )
    }

}