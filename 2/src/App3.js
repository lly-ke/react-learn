import React from 'react';

export default class App3 extends React.Component{

    constructor(props){
        super(props);

        const textarea = document.querySelector('textarea');
        const button = document.querySelector("button");
        let msgPage = null;

        window.addEventListener("message", function(e){
            console.log(arguments);
            msgPage = e.source
        })

        let i = 1;

        window.setInterval(function(){
            document.title = i++;
            console.log(document.title);
        }, 1000)
    }


    render(){
        return (
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <a href="http://localhost:3000/on" target="_blank">打开新页面</a>
                <button >发送</button>
            </div>
        )
    }

}