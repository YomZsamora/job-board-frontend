import React, { useState } from 'react'
import Login from './auth/Login'
import PasswordReset from './auth/PasswordReset'
import Outcomes from './outcomes/Outcomes'
import Dashboard from './outcomes/dashboard/Dashboard'
import Cohorts from './outcomes/cohorts/Cohorts'
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    const [user, setUser] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("sessionKey"));
    // console.log("IS LOGGED IN: " + isLoggedIn);

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
                            element={ isLoggedIn ? <Navigate to="/outcomes/dashboard" /> : <Login login={login}/>} />
                        <Route path='/reset_password' 
                            element={<PasswordReset/>} />
                        <Route
                            path='/outcomes' 
                            element={ isLoggedIn ? <Outcomes user={user} logout={logout} /> : <Navigate to="/login" />  } >
                                <Route 
                                    path='/outcomes/dashboard' 
                                    element={<Dashboard />} />
                                <Route 
                                    path='/outcomes/cohorts' 
                                    element={<Cohorts />} />
                        </Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
