import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Proptypes from 'prop-types'


class Add extends Component{

    constructor(props) {
        super(props)
        this.add = this.add.bind(this);
    }

    add(){
        const todo = this.todoInput.value.trim();
        if (todo) {
            this.props.add(todo);
            this.todoInput.value = "";
        }
    }


    render() {
        return (
            <div>
                <input type="text" ref={input => {this.todoInput = input}}/>
                <button onClick={this.add}>add #{this.props.count}</button>
            </div>
        );
    }

    static propTypes = {
        count: Proptypes.number.isRequired,
        add: Proptypes.func.isRequired
    }

}

class List extends Component{

    // static propTypes = {
    //     todos: Proptypes.array.isRequired,
    // }

    render() {
        return (
            <ul>
                {
                    this.props.todos.map((name, index) => <li key={index}>{name}</li>)
                }
            </ul>
        );
    }
}

export class App2 extends Component{



    constructor(props){
        super(props);

        this.add = this.add.bind(this);

        this.state = {
            todos: ["阿达瓦", "爱的", "12312大"]
        }
    }

    add(todo){
        const {todos} = this.state;
        todos.unshift(todo);
        this.setState({
            todos: todos
        })
    }

    render() {
        const {todos} = this.state;

        return (
            <div>
                <h1>Simple TODO List</h1>
                <Add add={this.add} count={todos.length}/>
                <List todos={todos}/>
            </div>
        );
    }
}

export default App2;