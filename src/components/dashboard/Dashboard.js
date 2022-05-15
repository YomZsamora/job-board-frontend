
import React, { useState }from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../navbar/Navbar';
import BulkUploadModal from '../UIElements/modals/BulkUploadModal';

function Dashboard({user, logout}) {
    const [show, setShow] = useState(false);
    let showBulkUpload = () => setShow(!show);

    return (
        <div>
            <Helmet>
                <title>Home | Moringa Job-Board </title>
            </Helmet>
            <Navbar user={user} logout={logout} showBulkUpload={showBulkUpload} />
            { show ? <BulkUploadModal showBulkUpload={showBulkUpload} /> : null}
        </div>
    )
 }

 export default Dashboard;