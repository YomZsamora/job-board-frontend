
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../navigation/Navbar';
import BulkUploadModal from '../UIElements/modals/BulkUploadModal';
import { Outlet } from "react-router-dom";
import SideBar from '../navigation/SideBar'

function Outcomes({logout}) {
    const [show, setShow] = useState(false);
    let showBulkUpload = () => setShow(!show);

    return (
        <div>
            <Helmet>
                <title>Outcomes | Moringa Job-Board </title>
            </Helmet>
            
            <div className="flex flex-row h-screen">
                <SideBar />
                <div className="w-full overflow-y-hidden h-screen">
                    <Navbar logout={logout} showBulkUpload={showBulkUpload} />
                    {/* Outcomes Main Components */}
                    <Outlet />
                </div>
            </div>
            
            {/* Modals */}
            { show ? <BulkUploadModal showBulkUpload={showBulkUpload} /> : null}
        </div>
    )
}

export default Outcomes;