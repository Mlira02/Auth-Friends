import React from 'react';

class Login extends React.Component {
        state = {
            
        }
    
    render() { 
        return (
            <div>
                <h2>Please Login to access friends.</h2>
                <form>
                    <input 
                    placeholder="Enter Username" 
                    name="username" 
                    />
                    <input 
                    placeholder="password" 
                    name="password" 
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}
 
export default Login;