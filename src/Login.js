import { Component } from 'react';

class Login extends Component{
    render() {
        // console.log(this.props);
        return (
            <h3>Login here, user #{this.props.visitorNumber}.</h3>
        )
    }
}

export default Login;