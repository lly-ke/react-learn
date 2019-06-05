import React from 'react';
import ReactDom from 'react-dom';
import Like from "./components/Like";
import Dog from './components/Dog.js'
import Cat from './components/Cat.js'
import FlavorForm from './components/FlavorForm.js'
import PropsComponent from "./components/PropsComponent";
import PropTypesComponent from "./components/PropTypesComponent";


class Person extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.props)}
            </div>
        );
    }

}

class MyComponent extends React.Component{
    handlerBlur(){
        alert(arguments[0].target.value);
    };

    constructor(props){
        super(props)
        this.showInput = this.showInput.bind(this)
        this.handlerBlur = this.handlerBlur.bind(this)
    }


    _input

    get input(){
        return this._input
    }

    set input(value){
        alert('set:' + value);
        this._input = value
    }


    showInput(){
        const input = this.refs.content
        alert(this.input.value);
    }

    render(){
        return (
            <div>
                <input type="text" ref="content"/>
                <input type="text" ref={input => this.input = input}/>
                <button onClick={this.showInput}>提示输入</button>
                <input type="text" placeholder="失去焦点提示内容" onBlur={this.handlerBlur}/>
            </div>
        )
    }
}

export default class App1 extends React.Component {


    static self = this;

    constructor(props){
        super(props);

        this.state.person = {
            name: 1,
            age:2,
            a: 'a'
        }
    }


    state = {
        person: {}
    }


    remoteReact(){
        console.log(ReactDom.unmountComponentAtNode(document.querySelector('#root')));;
    }

    static staticFunctionCall(){
        alert('static方法')
    }

    classValueGet(){
        var a = new class A{
            static a(){
                alert(123123)
            }
        }


        // eslint-disable-next-line no-unused-expressions
        console.log(a.constructor);
    }

    render() {
        Person.defaultProps = {
            person: {
                age: 100
            },
            age: 123
        }

        return (
            <div>
                <Like/>
                <hr/>

                <Person person={this.state.person}/>
                <Person/>
                <hr/>

                <Dog name="小周周"/>
                <Dog/>
                <hr/>

                <Cat/>
                <hr/>

                <FlavorForm/>

                <button onClick={this.remoteReact}>告辞</button>
                <hr/>

                <PropTypesComponent a="1" {...this.state.person}/>
                <hr/>

                <button onClick={this.classValueGet.bind()}>{JSON.stringify(this.state.person)}</button>

                <hr/>
                <MyComponent/>
            </div>
        );
    }
}