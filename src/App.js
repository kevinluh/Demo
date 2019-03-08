import React, {Component} from 'react';
import {Container} from 'reactstrap';
import logo from './logo.svg';
import NavBar from './components/NavBar'
import Map from './components/Map'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trafficLength: null
        }
        this.handleTrafficLength = this.handleTrafficLength.bind(this);
    }
    handleTrafficLength(len) {
        this.setState({trafficLength: len})
    }
    render() {
        let {trafficLength} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <NavBar trafficLength={trafficLength}/>
                </header>
                <Container>
                    <Map trafficLength={this.handleTrafficLength}/>
                </Container>
            </div>
        );
    }
}

export default App;
