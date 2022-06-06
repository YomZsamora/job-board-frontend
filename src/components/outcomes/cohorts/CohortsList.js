import React, { useState, useEffect } from 'react';
import apiClient from '../../../services/api';
import CohortDetails from './CohortDetails';
import * as Unicons from '@iconscout/react-unicons';
import { Switch } from '@headlessui/react'



function CohortsList() {

    const [cohorts, setCohorts] = useState([]);
    const [enabled, setEnabled] = useState(false)
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
                    <div>
                        <button onClick={toggleSortDropdown} class="text-primary text-nunito-semiBold border-1 border-secondary text-xs px-4 py-1.5 text-center inline-flex items-center" type="button">
                            Sort By:  
                            <span className="text-secondary inline-flex items-center ml-2">    
                                <Unicons.UilSortAmountDown size="18" />
                                <p className="text-nunito-light pl-1">Graduation Date</p>
                            </span>
                        </button>
                        <div id="dropdown" 
                        class={`${
                            !showSortDropdown ? 'hidden' : ''
                        } z-20 absolute bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700`} >
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                <li>
                                    <a href="#" class="block px-2 py-2 hover:bg-gray-light text-xs">No. of Graduates</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-2 py-2 hover:bg-gray-light text-xs">Graduation Date</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${
                        enabled ? 'bg-badge-flatiron-light' : 'bg-badge-legacy-light'
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                        <span className="sr-only">Enable notifications</span>
                        <span
                            className={`${
                            enabled ? 'translate-x-6' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-badge-legacy-dark`}
                        />
                    </Switch>
                    <button type="button" class="text-secondary bg-secondary/10 uppercase text-nunito-light rounded-sm text-xs px-4 py-1.5 h-fit text-center inline-flex items-center ">
                        <Unicons.UilPlus size="18" />
                        <span className="pl-2">Add New Cohort</span>
                    </button>
                </div>
            </div>
            
             <div class="flex flex-row relative border-b border-gray-light w-full overflow-x-auto items-center">
                <button type="button" class="flex sticky top-0 left-0 z-10 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex justify-center items-center w-6 h-6 rounded-full sm:w-10 sm:h-10 bg-gray-light group-hover:text-secondary ">
                        <Unicons.UilArrowLeft size="24" />
                    </span>
                </button>
                <ul class="flex flex-none -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    {cohorts.map( cohort => (
                        <li class="mr-2" role="presentation">
                            <CohortDetails key={cohort.id} cohort={cohort}  />
                        </li>        
                        ))
                    }
                </ul>
                <button type="button" class="flex sticky top-0 right-0 z-10 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex justify-center items-center w-6 h-6 rounded-full sm:w-10 sm:h-10 bg-gray-light group-hover:text-secondary ">
                        <Unicons.UilArrowRight size="24" />
                    </span>
                </button>
                
            </div>
        </div>
        
    )
}

export default CohortsList;