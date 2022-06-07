import React, { useState, useEffect } from 'react';
import apiClient from '../../../services/api';
import CohortDetails from './CohortDetails';
import * as Unicons from '@iconscout/react-unicons';



function CohortsList() {

    const [cohorts, setCohorts] = useState([]);
    const [showSortDropdown, setShowSortDropdown] = useState(false)

    // Toggle Sort Dropdown
    let toggleSortDropdown = () => setShowSortDropdown(!showSortDropdown)
    
    // Fetch All Cohorts
    useEffect(() => {
        apiClient.get('http://localhost/sanctum/csrf-cookie')
        .then(response => {
            apiClient.get('http://localhost/api/get_cohorts')
            .then(response => {
                setCohorts(response.data.cohorts);
            })
        });
    }, []);

    return (
        <div >
            <div>
                <div className="flex flex-wrap justify-between mb-2">
                    <div className="flex flex-wrap items-center">
                        {/* Sort List of Cohorts by No. of Grduates, Graduation Date etc */}
                        <div>
                            <button onClick={toggleSortDropdown} className="text-primary text-nunito-semiBold border-1 border-secondary text-xs px-4 py-1.5 text-center inline-flex items-center" type="button">
                                Sort By:  
                                <span className="text-secondary inline-flex items-center ml-2">    
                                    <Unicons.UilSortAmountDown size="18" />
                                    <p className="text-nunito-light pl-1">Graduation Date</p>
                                </span>
                            </button>
                            <div id="dropdown" 
                            className={`${
                                !showSortDropdown ? 'hidden' : ''
                                } z-20 absolute bg-white  shadow w-44 dark:bg-gray-700 ml-8`} >
                                <ul className="py-1 text-sm text-primary">
                                    <li  className="block px-2 py-2 hover:bg-gray-light text-xs cursor-pointer">
                                        No. Of Graduates
                                    </li>
                                    <li  className="block px-2 py-2 hover:bg-gray-light text-xs cursor-pointer">
                                        Graduation Date
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Sort by Software Development or Data Science  */}
                        <div>
                            <div className="flex py-1.5 items-center">
                                <div className="flex items-center mr-4">
                                    <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 bg-gray-100 rounded border-primary cursor-pointer accent-secondary" defaultChecked />
                                    <label className="ml-2 text-xs text-nunito-light text-primary">Software Development</label>
                                </div>
                                <div className="flex items-center mr-4">
                                    <input id="inline-2-checkbox" type="checkbox" value="" className="w-4 h-4 bg-gray-100 rounded border-primary cursor-pointer accent-secondary" defaultChecked />
                                    <label className="ml-2 text-xs text-nunito-light text-primary">Data Science</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="text-alert-success-dark bg-alert-success-light uppercase text-nunito-light rounded-sm text-xs px-4 py-1.5 h-fit text-center inline-flex items-center ">
                        <Unicons.UilPlus size="18" />
                        {/* <span className="pl-2">Add New Cohort</span> */}
                    </button>
                </div>
            </div>
            
            {/* Cohort List Scroll */}
            <div className="flex flex-row relative border-b border-gray-light w-full overflow-x-auto items-center">
                <button type="button" className="flex sticky top-0 left-0 z-10 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
                    <span className="inline-flex justify-center items-center w-6 h-6 rounded-full sm:w-10 sm:h-10 bg-gray-light group-hover:text-secondary ">
                        <Unicons.UilArrowLeft size="24" />
                    </span>
                </button>
                <ul className="flex flex-none -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    {cohorts.map( cohort => (
                        <li  key={cohort.id} className="mr-2" role="presentation">
                            <CohortDetails cohort={cohort}  />
                        </li>        
                        ))
                    }
                </ul>
                <button type="button" className="flex sticky top-0 right-0 z-10 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
                    <span className="inline-flex justify-center items-center w-6 h-6 rounded-full sm:w-10 sm:h-10 bg-gray-light group-hover:text-secondary ">
                        <Unicons.UilArrowRight size="24" />
                    </span>
                </button>
            </div>
        </div>
        
    )
}

export default CohortsList;