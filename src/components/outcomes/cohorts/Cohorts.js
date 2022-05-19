
import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Import NavBar from '../navbar/Navbar.js'

function Cohorts() {
    return (
        <div>
            <Helmet>
                <title>Cohorts | Moringa Job-Board </title>
            </Helmet>

            <div>
                <div className="flex flex-wrap -m-4">
                    <div className="sm:w-1/4 md:w-1/3 p-4"></div>
                    <div className="sm:w-1/4 md:w-1/3 p-4">
                        {/* CohortList Component Here */}
                        <div>
                            <div className="">
                                <div className="hover:bg-primary/5 px-4 py-2 cursor-pointer">
                                    <div className="flex justify-between items-center">
                                        <p className="text-primary text-nunito-semiBold text-sm">MC47/48 <span class="bg-badge-legacy-light text-badge-legacy-dark text-[10px] text-nunito-semiBold mr-2 px-1.5 py-0.5 rounded">Legacy</span></p>
                                        <span className="text-[10px] text-nunito-light text-primary/70">23rd Mar 2022 (4 Months Ago)</span>
                                    </div>
                                    <div className="flex justify-between mb-1 items-end">
                                        <span className="text-primary text-xs">46 Graduates</span>
                                        <span className="text-secondary  text-[10px]">45%</span>
                                    </div>
                                    <div className="w-full bg-secondary/50 rounded-full h-1 dark:bg-gray-700">
                                        <div className="bg-secondary h-1 rounded-full" style={{width: 45 + '%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/4 md:w-1/3 p-4"></div>
                    <div className="sm:w-1/4 md:w-1/3 p-4"></div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Cohorts;