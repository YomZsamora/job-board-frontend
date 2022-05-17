
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
                <div className="flex items-center">
                    <FontAwesomeIcon className="h-4 w-4 ml-4" icon="magnifying-glass" />
                </div>

                <div className="flex-1 flex items-center justify-center px-2 py-2 text-[10px] uppercase text-nunito-semiBold ">
                    <NavLink
                        className={({ isActive }) => "hover:text-secondary transition-colors duration-200 mx-1.5 sm:mx-2.5" + (isActive ? " selected" : "")}
                        to="/outcomes/dashboard"
                        >Dashboard</NavLink>
                    <NavLink
                        className={({ isActive }) => "hover:text-secondary transition-colors duration-200 mx-1.5 sm:mx-2.5" + (isActive ? " selected" : "")}
                        to="/outcomes/applicants"
                        >Applicants</NavLink>
                    <img className="w-8 h-8 mx-1.5 sm:mx-2.5" src="/images/logo.png" alt="logo" />
                    <NavLink
                        className={({ isActive }) => "hover:text-secondary transition-colors duration-200 mx-1.5 sm:mx-2.5" + (isActive ? " selected" : "")}
                        to="/outcomes/employers"
                        >Employers</NavLink>
                    <NavLink
                        className={({ isActive }) => "hover:text-secondary transition-colors duration-200 mx-1.5 sm:mx-2.5" + (isActive ? " selected" : "")}
                        to="/outcomes/cohorts"
                        >Cohorts</NavLink>
                </div>


                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto">
                    <button type="button" className="p-1 hover:text-secondary">
                        <span className="sr-only">Add Employer</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                    </button>

                    <button onClick={bulkUpload} type="button" className="ml-2 p-1 hover:text-secondary focus:text-secondary">
                        <span className="sr-only">Bulk Upload</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </button>
                    
                    <div className="ml-3 relative">
                        <div>
                            <button onClick={toggleProfileDropdown} type="button" className="flex text-sm rounded-full items-center">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src="/images/avatar.jpeg" alt="logo" />
                            <span className="flex-grow flex flex-col pl-2 text-left leading-none">
                                <span className="text-xs text-nunito-semiBold">Samora Yommie</span>
                                <span className="text-[11px] text-nunito-light">samora.yommie@moringaschool.com</span>
                            </span>
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