import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nickList: ""
        }
    }


    componentWillMount() {
        axios.get('http://175.125.95.182:4000/users')
            .then((response) => {
                console.log(response.data[0].mb_nick);
                this.setState({
                    nickList: response.data[0].mb_nick
                });
            })
            .catch((Error) => {
                console.log(Error);
            })

    }

    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code >{this.state.nickList}</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
    }
}


export default App;
