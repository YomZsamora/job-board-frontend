import React, { useState } from 'react'
import Login from './auth/Login'

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  let login = () => setLoggedIn(true);

  return (
    <div className="App">
      <Login login={login} />
    </div>
  );
}

export default App;
