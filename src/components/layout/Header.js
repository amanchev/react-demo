import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './../../logo.png';
import Languages from './../Languages';

class Header extends Component {
    render() {
        return (
            <header style={{display: 'flex', flexDirection: 'row'}}>
                <div><Languages /></div>
                <img src={logo} alt="" style={{margin: '60px auto 0', height: '200px'}}/>
                <nav>
                    <Link to="/task1">Task 1</Link> | <Link to="/task2">Task 2</Link>
                </nav>

            </header>
        )
    }
}

export default Header
