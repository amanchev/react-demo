import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/layout/Header';
import Task1 from './components/task1/Task1';
import Task2 from './components/task2/Task2';
import './App.css';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Route exact path="/task1" render={props => (
                        <Task1 />
                    )}/>
                    <Route exact path="/task2" render={props => (
                        <Task2 />
                    )}/>
                </div>
            </Router>
        );
    }
}

export default App;
