import React from 'react'
import PropTypes from 'prop-types';

export default class PropTypesComponent extends React.Component {

    constructor(props) {
        super(props);
    }


    static propTypes = {
        a: PropTypes.number,
    }

    style = {
        color: "red",
        fontSize: 30
    }

    render() {
        return (
            <div style={{color: "yellow", fontSize: 30}}>
                dangerouslySetInnerHTML:
                <div ref='myDiv' onClick={() => {
                    // this.refs.myDiv.getBoundingClientRect().

                    this.refs.myDiv.getBoundingClientRect().width = 1230
                }}
                     dangerouslySetInnerHTML={{__html: "<textarea/>"}}/>
                props:{JSON.stringify(this.props)} <br/>
            </div>
        );
    }

};