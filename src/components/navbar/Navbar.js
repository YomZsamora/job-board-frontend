
import apiClient from '../../services/api';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavbarDropdown from './NavbarDropdown';
import { NavLink } from 'react-router-dom';


function Navbar({user, logout, showBulkUpload}) {

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
            <nav className="flex items-center justify-between shadow text-primary relative px-4">
                <div className="flex items-center absolute inset-y-0 left-0">
                    <FontAwesomeIcon className="h-4 w-4 ml-4" icon="magnifying-glass" />
                </div>

                <div className="flex-1 flex items-center justify-center px-2 py-2 text-[10px] uppercase ">
                    <NavLink
                        className={({ isActive }) => "hover:text-secondary transition-colors duration-200 mx-1.5 sm:mx-2.5" + (isActive ? " selected" : "")}
                        to="/dashboard"
                        >Dashboard</NavLink>
                    <NavLink
                        className={({ isActive }) => "hover:text-secondary transition-colors duration-200 mx-1.5 sm:mx-2.5" + (isActive ? " selected" : "")}
                        to="/applicants"
                        >Applicants</NavLink>
                    <img className="w-8 h-8 mx-1.5 sm:mx-2.5" src="images/logo.png" alt="logo" />
                    <NavLink
                        className={({ isActive }) => "hover:text-secondary transition-colors duration-200 mx-1.5 sm:mx-2.5" + (isActive ? " selected" : "")}
                        to="/employers"
                        >Employers</NavLink>
                    <NavLink
                        className={({ isActive }) => "hover:text-secondary transition-colors duration-200 mx-1.5 sm:mx-2.5" + (isActive ? " selected" : "")}
                        to="/cohorts"
                        >Cohorts</NavLink>
                </div>


                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto">
                    <button type="button" className="p-1 rounded-full text-gray-400 hover:text-secondary">
                        <span className="sr-only">Add Employer</span>
                        <FontAwesomeIcon className="h-4 w-4" icon="fa-regular fa-square-plus" />
                    </button>

                    <button onClick={bulkUpload} type="button" className="ml-2 p-1 rounded-full text-gray-400 hover:text-secondary focus:text-secondary">
                        <span className="sr-only">Bulk Upload</span>
                        <FontAwesomeIcon className="h-4 w-4" icon="upload" />
                    </button>
                    
                    <div className="ml-3 relative">
                        <div>
                            <button onClick={toggleProfileDropdown} type="button" className="flex text-sm rounded-full">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src="images/avatar.jpeg" alt="logo" />
                            </button>
                        </div>
                        { toggleDropdown ? <NavbarDropdown user={user} signOut={signOut} /> : "" }          
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;