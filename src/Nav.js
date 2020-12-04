//Nav.js
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return(
            <nav className="wrapper myNav">
                <ul>
                    <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                    <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;