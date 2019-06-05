import React from 'react';


class FlavorForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sites: [
                {name: "Google", value: 1},
                {name: "Bing", value: 2},
                {name: "Yahoo", value: 3},
                {name: "百度药厂", value: 4},
                {name: "ask", value: 5},
                {name: "DuckDuckGo", value: 6},
            ],
            // flavor: null
        }

        this.updateFlavor = this.updateFlavor.bind(this)
    }

    updateFlavor(event){
        const value = event.target.value
        this.setState((previous) =>{
            return previous.flavor = value;
            return previous
        })
    }

    render() {
        return (
            <div>
                请选择您最喜欢的网站:
                <select value={this.state.flavor} onChange={this.updateFlavor}>
                    {
                        this.state.sites.map((data) =>
                            (
                                <option key={data.value} value={data.value}>{data.name}</option>
                            )
                        )
                    }
                </select>
                <br/>
                喜欢的是:{this.state.flavor}
            </div>
        );
    }

}


export default FlavorForm;
