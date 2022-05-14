import React, { useState } from 'react'
import Login from './auth/Login'
import PasswordReset from './auth/PasswordReset'
import Dashboard from './dashboard/Dashboard'
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("sessionKey"));
    console.log("IS LOGGED IN: " + isLoggedIn);

    let login = sessionKey => {
        sessionStorage.setItem("sessionKey", sessionKey);
        setIsLoggedIn(sessionKey)
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
                            element={ isLoggedIn ? <Dashboard logout={logout} /> : <Navigate to="/login" />  } />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
