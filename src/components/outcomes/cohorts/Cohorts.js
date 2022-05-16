
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
                        
                        <div class="flex justify-between items-center">
                            <h3 className="text-xl leading-6 text-nunito-bold text-secondary" id="modal-title">Add New Employer</h3>
                            <button type="button" class="text-primary hover:text-alert-danger-dark rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" >
                                {/* <FontAwesomeIcon icon="fa-solid fa-xmark" /> */}
                            </button>
                        </div>
                        
                        <div className="text-center sm:mt-0 sm:text-left">
                        {/* <h3 className="text-xl leading-6 text-nunito-bold text-secondary" id="modal-title">Bulk Upload Students</h3> */}
                        <div className="mt-2 text-primary">
                            <h3 className="text-md leading-6 text-nunito-bold" id="modal-title">How to Upload</h3>
                            <ol className="list-decimal pl-4 mt-2 text-xs">
                                <li>Download a <a className="text-secondary" href="/">template here</a>.</li>
                                <li>Add your data to the template. <br></br> <span className="italic">Using excel make sure to export or save as .csv</span></li>
                                <li>Upload below for processing.</li>
                            </ol>
                            <div className="mt-4 flex justify-center px-6 pt-5 pb-6 border-2 border-primary-light border-dashed bg-gray w-full">
                                <div className="space-y-1 text-center">
                                    <div className="flex text-xs text-primary mb-8">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-secondary">
                                                <span className="text-secondary">Upload filled in template here.</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".csv" />
                                            </label>
                                            <p className="pl-2">csv format only.</p>
                                    </div>
                                    <p className="text-[10px]"></p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Cohorts;