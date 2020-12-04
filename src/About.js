import { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import Employees from './Employees.js';

class About extends Component{
    render() {
        return (
            <Fragment>
            <h2>This is us!</h2>
                <Link to="/about/employees" className='employeeButton'>Click here to see our employees.</Link>

                <Route path="/about/employees" component={Employees} />
            </Fragment>
        )
    }
}

export default About;