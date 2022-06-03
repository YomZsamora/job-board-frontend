
import apiClient from '../../services/api';
import React, { useState } from 'react';
import * as Unicons from '@iconscout/react-unicons';
import NavbarDropdown from './NavbarDropdown';



function Navbar({logout, showBulkUpload}) {

    const [toggleDropdown, setToggleDropdown] = useState(false);

    let toggleProfileDropdown = () => setToggleDropdown(!toggleDropdown);
    let bulkUpload = () => showBulkUpload()

    const signOut = () => {
        apiClient.get('http://localhost/sanctum/csrf-cookie')
        .then(response => {
            apiClient.get('http://localhost/api/signout')
            .then(response => {
                logout()
            })
        });
    }
    
    
    return (
        <div>        
            <nav className="flex items-center justify-between text-primary relative px-4 py-2 border-b border-primary/10">
                
                <div className="flex items-center">
                    <Unicons.UilSearch size="18" />
                </div>


                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto">
                    <button type="button" className="p-1 hover:text-secondary">
                        <span className="sr-only">Add Employer</span>
                        <Unicons.UilUserPlus size="18" />
                    </button>

                    <button onClick={bulkUpload} type="button" className="ml-2 p-1 hover:text-secondary focus:text-secondary">
                        <span className="sr-only">Bulk Upload</span>
                        <Unicons.UilFileUploadAlt size="18" />
                    </button>
                    <div className="ml-3 relative">
                        <div>
                            <button onClick={toggleProfileDropdown} type="button" className="flex text-sm rounded-full items-center">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src="/images/main_avatar.png" alt="logo" />
                            </button>
                        </div>
                        { toggleDropdown ? <NavbarDropdown signOut={signOut} /> : "" }          
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;