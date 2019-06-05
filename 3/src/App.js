import React from 'react';
import './App.css';
import axios from 'axios';

class MostStartRepo extends React.Component {

    state = {
        repoName: '',
        repoUrl: ''
    }

    render() {

        const {repoName, repoUrl} = this.state;
        if (repoName) {
            return (
                <div>
                    Most star repo is<a href={repoUrl}>{repoName}</a><br/>
                </div>
            );
        } else {
            return (
                <div>
                    Loading....
                </div>
            )
        }

    }

    componentDidMount() {
        // axios.get("https://api.github.com/search/repositories?q=r&sort=stars").then(response => {
        //     const {html_url, name} = response.data.items[0]
        //
        //     this.setState({
        //         repoName: name,
        //         repoUrl: html_url
        //     })
        // })

        fetch("https://api.github.com/search/repositories?q=r&sort=stars").then(response => {
            if (response.ok) {
                response.json().then(data => {
                    const {html_url, name} = data.items[0];

                    this.setState({
                        repoName: name,
                        repoUrl: html_url
                    })

                });
            }
        }).catch(function(){
            console.log(arguments);
        });
    }


}

function App() {

    return (
        <div className="App">
            <MostStartRepo/>
        </div>
    );
}

export default App;
