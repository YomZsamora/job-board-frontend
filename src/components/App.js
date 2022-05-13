import React, { useState } from 'react'
import Login from './auth/Login'
import PasswordReset from './auth/PasswordReset'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  

  let login = () => {
    setLoggedIn(true)
    console.log("loggedIn");
  };

  return (
    <div className="App">
      {/* <Login login={login} /> */}
      {/* <PasswordReset /> */}


      <Router>
      <div>
        <Routes>
          <Route path='/login' element={<Login login={login}/>} />
          <Route path='/reset_password' element={<PasswordReset/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
