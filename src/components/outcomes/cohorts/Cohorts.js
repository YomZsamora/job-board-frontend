
import React from 'react';
import { Helmet } from 'react-helmet';
import CohortsList from './CohortsList';
import CohortGraduates from './CohortGraduates';




function Cohorts() {

    return (
        <div className="h-full overflow-y-hidden">
            <Helmet>
                <title>Cohorts | Moringa Job-Board </title>
            </Helmet>

            {/* List of Cohorts */}
            <CohortsList />

            <div className="flex flex-col h-full">
                 <div className="flex flex-wrap">
                    {/* <div className="md:w-20">
                        <div class="bg-gray-light h-full py-8">
                            <div className="flex flex-col items-center h-full border-r border-gray-dark/10">
                                <div className="flex flex-col items-center py-2 transition duration-300 hover:scale-[1.4]">
                                    <Unicons.UilTrashAlt size="16" className="text-alert-danger-dark " />
                                    <span className="text-xs text-alert-danger-dark">Delete Cohort</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    
                    <div className="md:w-5/12">
                        {/* Cohort Graduates Details and Information */}
                        <CohortGraduates />
                    </div>
                    <div className="md:flex-1">
                        {/* General Cohort Stats */}
                        <div className="flex flex-wrap px-8 mt-4">
                            <div class="flex flex-col w-full">
                                <div class="flex flex-wrap sm:flex-row py-2 mb-4 justify-between">
                                    <div className="flex flex-col sm:w-1/2 mb-2 sm:mb-0">
                                        <h1 class="text-primary text-nunito-light uppercase text-xl">Cohorts</h1>
                                        <p class="leading-snug text-xs text-nunito-light">19 Cohorts with a total of 568 graduates. Most recent graduation was on April 2022.</p>
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