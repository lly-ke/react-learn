import React from 'react';
import './Like.css'

export default class Like extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isLikeMe: true
        }

        this.updateMsg = this.updateMsg.bind(this)
    }


    updateMsg() {
        this.setState((a) => {
            return a.isLikeMe = !a.isLikeMe
        })
    }

    render() {
        return (
            <div className="Like" onClick={this.updateMsg}>
                {
                    this.state.isLikeMe ? "你喜欢我" : "我喜欢你"
                }
            </div>
        )
    }

}