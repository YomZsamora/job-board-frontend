
import React, { useState }from 'react';
import { Helmet } from 'react-helmet';
// Import NavBar from '../navbar/Navbar.js'

function Cohorts() {
    return (
        <div>
            <Helmet>
                <title>Cohorts | Moringa Job-Board </title>
            </Helmet>

            <div id="top-right-modal" data-modal-placement="top-right" tabindex="-1" class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-end items-start flex">
                <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 p-6">
                        
                        <div class="flex justify-between items-center mb-6">
                            <h3 className="text-xl leading-6 text-nunito-bold text-secondary" id="modal-title">Add New Employer</h3>
                            <button type="button" class="text-primary hover:text-alert-danger-dark rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" >
                                {/* <FontAwesomeIcon icon="fa-solid fa-xmark" /> */}
                            </button>
                        </div>
                        
                        <div className="mb-4">
                            <label className="block text-sm mb-1">Company Name</label>
                            <input 
                                className="w-96 text-xs text-primary ring-2 ring-primary-light py-2 px-2 text-nunito-light focus:outline-none focus:ring-2 focus:ring-secondary" 
                                type="text" 
                                autoComplete="off" 
                                placeholder="Enter company's name" 
                                id="password"  
                                name="password" />
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Cohorts;