
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../navigation/Navbar';
import BulkUploadModal from '../UIElements/modals/BulkUploadModal';
import AddCohortModal from '../UIElements/modals/AddCohortModal';
import { Outlet } from "react-router-dom";
import SideBar from '../navigation/SideBar'

function Outcomes({logout}) {
    const [showBulkUploadModal, setShowBulkUploadModal] = useState(false);
    const [showAddCohortModal, setShowAddCohortModal] = useState(false);

    let showBulkUpload = () => setShowBulkUploadModal(!showBulkUploadModal);
    let showAddCohort = () => setShowAddCohortModal(!showAddCohortModal)

    return (
        <div>
            <Helmet>
                <title>Outcomes | Moringa Job-Board </title>
            </Helmet>
            
            <div className="flex flex-row h-screen">
                <SideBar />
                <div className="w-full h-screen overflow-y-auto">
                    <Navbar logout={logout} showBulkUpload={showBulkUpload} />
                    {/* Outcomes Main Components */}
                    <Outlet context={{ setShowAddCohortModal, setShowBulkUploadModal }}  />
                </div>
            </div>
            
            {/* Modals */}
            { showBulkUploadModal ? <BulkUploadModal showBulkUpload={showBulkUpload} /> : null }
            <AddCohortModal showAddCohort={showAddCohort} showAddCohortModal={showAddCohortModal} />
        </div>
    )
}

export default Outcomes;