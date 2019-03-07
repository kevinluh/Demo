import React, {Component} from 'react';
import {Container} from 'reactstrap';
import logo from './logo.svg';
import NavBar from './components/NavBar'
import Map from './components/Map'
require('dotenv').config()

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <NavBar/>
                </header>
                <Container>
                    <Map/>
                </Container>
            </div>
        );
    }
}

export default App;
