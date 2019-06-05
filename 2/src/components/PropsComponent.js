import React from 'react';

export default class PropsComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(props){
        return (
            <div>
                props:{JSON.stringify(this.props)}
                <br/>

                props.children:{this.props.children}
                <br/>

                <button onClick={this.props.updateUser("张三")}>修改state值</button>
            </div>
        );
    }

}