
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../navbar/Navbar';


function Dashboard({logout}) {
    return (
        <div>
            <Helmet>
                <title>Home | Moringa Job-Board </title>
            </Helmet>
            <Navbar logout={logout} />
        </div>
    )
 }

 export default Dashboard;