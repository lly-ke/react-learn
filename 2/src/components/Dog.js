import React from 'react';

export default class Dog extends React.Component{

    constructor(props) {
        super(props);
        this.updateDogName = this.updateDogName.bind(this);
    }


    static defaultProps = {
        name: '小周'
    }

    updateDogName(){
        this.setState({})
    }

    render() {
        return (
            <div>
                dogName: {this.props.name} <button onClick={this.updateDogName}>修改</button>
            </div>
        );
    }


}
