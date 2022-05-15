import React, { useState } from 'react'
import Login from './auth/Login'
import PasswordReset from './auth/PasswordReset'
import Dashboard from './dashboard/Dashboard'
import Cohorts from './cohorts/Cohorts'
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    const [user, setUser] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("sessionKey"));
    console.log("IS LOGGED IN: " + isLoggedIn);

    let login = user => {
        // console.log(user.user_data.email);
        sessionStorage.setItem("sessionKey", user.session_key);
        setIsLoggedIn(user.session_key);
        setUser(user.user_data);
    };
    let logout = () => {
        sessionStorage.setItem("sessionKey", "");
        setIsLoggedIn(false)
    };

    return (
        <div className="App">
            
            <Router>
                <div>
                    <Routes>
                        <Route 
                            path='/login' 
                            element={ isLoggedIn ? <Navigate to="/dashboard" /> : <Login login={login}/>} />
                        <Route path='/reset_password' 
                            element={<PasswordReset/>} />
                        <Route 
                            path='/dashboard' 
                            element={ isLoggedIn ? <Dashboard user={user} logout={logout} /> : <Navigate to="/login" />  } />
                        <Route 
                            path='/cohorts' 
                            element={ isLoggedIn ? <Cohorts /> : <Navigate to="/login" />  } />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
