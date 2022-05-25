
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../navbar/Navbar';
import BulkUploadModal from '../UIElements/modals/BulkUploadModal';
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Outcomes({user, logout}) {
    const [show, setShow] = useState(false);
    let showBulkUpload = () => setShow(!show);

    return (
        <div>
            <Helmet>
                <title>Outcomes | Moringa Job-Board </title>
            </Helmet>


            {/* <Navbar user={user} logout={logout} showBulkUpload={showBulkUpload} /> */}
            

            <aside class="w-40" aria-label="Sidebar">
                <div class="overflow-y-auto py-4 px-4 border-r border-primary/10 h-screen">
                    <a href="/outcomes/dashboard" class="flex items-center">
                        <img src="/images/logo.png" class="w-12 mr-3" alt="Moringa Logo" />
                    </a>
                    <ul class="border-b border-primary/10 py-6">
                        <li>
                            <a href="/outcomes/dashboard" class="flex items-center p-1 text-xs text-nunito-semiBold text-primary">
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <button type="button" class="flex items-center p-1 w-full text-xs text-nunito-semiBold text-primary" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <span class="flex-1 text-left whitespace-nowrap" sidebar-toggle-item>Jobs</span>
                            </button>
                            <ul id="dropdown-example" class="pt-1 pb-2">
                                <li>
                                    <a href="#" class="flex items-center p-1 pl-4 w-full text-xs text-nunito-regular text-primary">Applications</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-1 pl-4 w-full text-xs text-nunito-regular text-primary">Opening</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button type="button" class="flex items-center p-1 w-full text-xs text-nunito-semiBold text-primary" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <span class="flex-1 text-left whitespace-nowrap" sidebar-toggle-item>Cohorts</span>
                            </button>
                            <ul id="dropdown-example" class="pt-1 pb-2">
                                <li>
                                    <a href="#" class="flex items-center p-1 pl-4 w-full text-xs text-nunito-regular text-primary">Graduates</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="/outcomes/cohortts" class="flex items-center p-1 text-xs text-nunito-semiBold text-primary">
                            <span class="flex-1 whitespace-nowrap">Employers</span>
                            </a>
                        </li>
                    </ul>
                    {/* <div id="dropdown-cta" class="mt-6 rounded-lg" role="alert">
                        <div class="flex items-center mb-3">
                            <span class="bg-orange-100 text-orange-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
                            <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-collapse-toggle="dropdown-cta" aria-label="Close">
                                <span class="sr-only">Close</span>
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <p class="mb-3 text-xs text-blue-900 dark:text-blue-400">
                            Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
                        </p>
                        <a class="text-xs text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" href="#">Turn new navigation off</a>
                    </div> */}
                    <div className="flex justify-between items-end mt-6">
                        <span className="text-primary text-[11px]">Job Placement </span>
                        <span className="text-alert-success-dark  text-[10px]">81%</span>
                    </div>
                    <div className="w-full bg-alert-success-light/40 rounded-full h-1">
                        <div className="bg-alert-success-dark h-1 rounded-full" style={{width: 81 + '%'}}></div>
                    </div>
                </div>
             </aside>

             

            {/* Outcomes Main Components */}
            {/* <Outlet /> */}

            {/* Modals */}
            { show ? <BulkUploadModal showBulkUpload={showBulkUpload} /> : null}
        </div>
    )
}

export default Outcomes;