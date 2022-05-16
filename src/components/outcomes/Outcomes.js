
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../navbar/Navbar';
import BulkUploadModal from '../UIElements/modals/BulkUploadModal';
import { Outlet } from "react-router-dom";

function Outcomes({user, logout}) {
    const [show, setShow] = useState(false);
    let showBulkUpload = () => setShow(!show);

    return (
        <div>
            <Helmet>
                <title>Outcomes | Moringa Job-Board </title>
            </Helmet>
            <Navbar user={user} logout={logout} showBulkUpload={showBulkUpload} />

            {/* Outcomes Main Components */}
            <Outlet />

            {/* Modals */}
            { show ? <BulkUploadModal showBulkUpload={showBulkUpload} /> : null}
        </div>
    )
}

export default Outcomes;