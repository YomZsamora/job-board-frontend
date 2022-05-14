
import apiClient from '../../services/api';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from "react-hook-form";
import AlertDanger from '../UIElements/Alerts/AlertDanger';
import AlertSuccess from '../UIElements/Alerts/AlertSuccess';
import SecondaryPreloader from '../UIElements/preLoaders/SecondaryPreloader';

function PasswordReset() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = formData => resetPassord(formData);

    const [userDoesntExists, setUserDoesntExists] = useState();
    const [sendResetEmail, setSendResetEmail] = useState(); 
    const [error, setError] = useState({title: "", message: "" });
    const [resetPreloader, setResetPreloader] = useState(false);

    const [email, setEmail] = useState('');

    const resetPassord = (formData) => {
        setResetPreloader(true);
        apiClient.get('http://localhost/sanctum/csrf-cookie')
        .then(response => {
            apiClient.post('http://localhost/api/reset_password', {
                email: formData.email
            })
            .then(response => {
                // console.log(response.data)
                if(response.data.status === 422){
                    setUserDoesntExists(true);
                    setSendResetEmail(false);
                    const data = {
                        title: response.data.errorTitle,
                        message: response.data.errorMessage
                    }
                    setError(data);
                    setResetPreloader(false);
                } else {
                    setSendResetEmail(true);
                    setUserDoesntExists(false);
                    const data = {
                        title: response.data.errorTitle,
                        message: response.data.errorMessage
                    }
                    setError(data); 
                    setResetPreloader(false);
                }
                
            })
        });
    }


    return (
        <div>
            <div className="w-1/4 mx-auto h-fit">
                <Helmet>
                    <title>Password Reset | Moringa Job-Board </title>
                </Helmet>
                <div className="py-24">
                    <div class='flex items-center justify-center'>
                        <img className="w-20 h-20" src="images/logo.png" alt="logo" />
                    </div>
                    <div className="login-title text-center mb-6">
                        <h3 className="text-nunito-bold text-4xl mb-2">Password Reset</h3>
                        <p className="text-nunito-regular text-xs"><span>Forgot your Password</span></p>
                    </div>
                    <form className="px-7" onSubmit={handleSubmit(onSubmit)}>
                        <p className="text-xs text-center mb-6">Enter the email address you registered with and wait for recover details to be sent. </p>
                        <div className="mb-4">
                            <input 
                                {...register("email", { required: 'We need to know your email address!' })}
                                className="inline-block w-full text-xs text-primary ring-2 ring-primary-light rounded py-2 px-2 text-nunito-light focus:outline-none focus:ring-2 focus:ring-secondary" 
                                type="text" 
                                autoComplete="off" 
                                placeholder="Your Email Address" 
                                id="email"  
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                                {errors.email && <p className="text-alert-danger-dark text-xs mt-2">We need to know your email address!</p>}
                                { userDoesntExists ?  <AlertDanger title={error.title} message={error.message} /> : <p></p> }
                                { sendResetEmail ?  <AlertSuccess title={error.title} message={error.message} /> : <p></p> }
                        </div>
                        <button className="w-full bg-secondary transition duration-150 ease-in-out hover:bg-secondary/50 rounded text-white px-6 py-2 text-xs">
                            { resetPreloader ? <SecondaryPreloader width={15} height={15} /> : "Request a Reset Link" }
                            </button>
                    </form>
                    <div class='flex items-center justify-center'>
                        <a className="text-xs text-center mt-4" href="/login">Back to Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordReset;