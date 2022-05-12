
import apiClient from '../../services/api';
import React, { useState } from 'react';
import AlertPrimary from '../UIElements/Alerts/AlertPrimary'


function Login({login}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        apiClient.get('http://localhost/sanctum/csrf-cookie')
        .then(response => {
            apiClient.post('http://localhost/api/login', {
                email: email,
                password: password
            })
            .then(response => {
                console.log(response.data.error);
                if(response.status === 200){
                    login()
                } 
            })
        });
    }

    return (
        <div className="w-1/4 mx-auto h-screen">
            <div className="py-36">
                <AlertPrimary />
                <div className="login-title text-center mb-6">
                    <h3 className="text-nunito-bold text-4xl mb-2">Member Sign In</h3>
                    <p className="text-nunito-regular text-xs"><span>Sign in with your email</span></p>
                </div>
                <form className="px-7" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm mb-1">Email Address</label>
                        <input 
                            className="inline-block w-full text-xs text-primary ring-2 ring-primary-light rounded py-2 px-2 text-nunito-light focus:outline-none focus:ring-2 focus:ring-secondary" 
                            type="text" 
                            autoComplete="off" 
                            placeholder="Enter your email" 
                            id="email"  
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <div className="flex justify-between mb-1 text-sm">
                            <p>Password</p>
                            <p className="text-secondary">Forgot Password?</p>
                        </div>
                        <input 
                            className="w-full text-xs text-primary ring-2 ring-primary-light rounded py-2 px-2 text-nunito-light focus:outline-none focus:ring-2 focus:ring-secondary" 
                            type="password" 
                            autoComplete="off" 
                            placeholder="Enter your password" 
                            id="password"  
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}  />
                    </div>
                    <button className="w-full bg-secondary transition duration-150 ease-in-out hover:bg-secondary/50 rounded text-white px-6 py-2 text-xs">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
