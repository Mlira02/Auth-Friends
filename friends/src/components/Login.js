import React from 'react';
import axios from 'axios';
// import { axiosWithAuth } from '../utilities/axiosWithAuth';

class Login extends React.Component {
        state = {
            creds: {
                username: '', 
                password: '',
            }
        };

        handleChange = e => {
            console.log(e.target)
            this.setState({
                creds: {
                    ...this.state.creds,
                    [e.target.name]: e.target.value
                }
            });
        };

        login = e => {
            e.preventDefault();
            axios.post('http://localhost:5000/api/login', this.state.creds)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/protected');

            })
            .catch(err => {
                console.error(err.response)
            })
        }

    
    render() { 
        return (
            <div>
                <h2>Please Login to access friends.</h2>
                <form onSubmit={this.login}>
                    <input 
                    type="text"
                    placeholder="Enter Username" 
                    name="username" 
                    value={this.state.creds.username}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="password"
                    placeholder="password" 
                    name="password" 
                    value={this.state.creds.password}
                    onChange={this.handleChange}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
};
 
export default Login;