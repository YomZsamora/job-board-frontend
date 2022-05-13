
import apiClient from '../../services/api';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import AlertDanger from '../UIElements/Alerts/AlertDanger'
import { useForm } from "react-hook-form";


function Login({login}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = formData => authenticateUser(formData);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userDoesntExists, setUserDoesntExists] = useState();
    const [error, setError] = useState({title: "", message: "" });

    const authenticateUser = (formData) => {

        apiClient.get('http://localhost/sanctum/csrf-cookie')
        .then(response => {
            apiClient.post('http://localhost/api/login', {
                email: formData.email,
                password: formData.password
            })
            .then(response => {
                console.log(response);
                if(response.data.status === 422){
                    setUserDoesntExists(true);
                    const data = {
                        title: response.data.errorTitle,
                        message: response.data.errorMessage
                    }
                    setError(data);
                } else {
                    setUserDoesntExists(false);
                    login()
                }
            })
        });
    }

    return (
        <div>
            <img className="w-20 h-20 ml-4 mt-4" src="images/logo.png" alt="logo" />
            <div className="w-1/4 mx-auto h-fit">
                <Helmet>
                    <title>Login | Moringa Job-Board </title>
                </Helmet>
                <div className="py-24">
                    { userDoesntExists ?  <AlertDanger title={error.title} message={error.message} /> : <p></p> }
                    <div className="login-title text-center mb-6">
                        <h3 className="text-nunito-bold text-4xl mb-2">Member Sign In</h3>
                        <p className="text-nunito-regular text-xs"><span>Sign in with your email</span></p>
                    </div>
                    <form className="px-7" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-sm mb-1">Email Address</label>
                            <input 
                                {...register("email", { required: 'We need to know your email address!' })} 
                                className="inline-block w-full text-xs text-primary ring-2 ring-primary-light rounded py-2 px-2 text-nunito-light focus:outline-none focus:ring-2 focus:ring-secondary" 
                                type="text" 
                                autoComplete="off" 
                                placeholder="Enter your email" 
                                id="email"  
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                                {errors.email && <p className="text-alert-danger-dark text-xs mt-2">We need to know your email address!</p>}
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-1 text-sm">
                                <p>Password</p>
                                <a className="text-secondary" href="/reset_password">Forgot Password?</a>
                            </div>
                            <input 
                                {...register("password", { required: 'You need to enter the password to log in!' })}
                                className="w-full text-xs text-primary ring-2 ring-primary-light rounded py-2 px-2 text-nunito-light focus:outline-none focus:ring-2 focus:ring-secondary" 
                                type="password" 
                                autoComplete="off" 
                                placeholder="Enter your password" 
                                id="password"  
                                name="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)} />
                                {errors.email && <p className="text-alert-danger-dark text-xs mt-2">You need to enter the password to log in!</p>}
                        </div>
                        <button className="w-full bg-secondary transition duration-150 ease-in-out hover:bg-secondary/50 rounded text-white px-6 py-2 text-xs">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Login;
