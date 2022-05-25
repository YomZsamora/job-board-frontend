
import apiClient from '../../services/api';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                    <FontAwesomeIcon className="h-4 w-4 ml-4" icon="magnifying-glass" />
                </div>


                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto">
                    <button type="button" className="p-1 hover:text-secondary">
                        <span className="sr-only">Add Employer</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                    </button>

                    <button onClick={bulkUpload} type="button" className="ml-2 p-1 hover:text-secondary focus:text-secondary">
                        <span className="sr-only">Bulk Upload</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
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