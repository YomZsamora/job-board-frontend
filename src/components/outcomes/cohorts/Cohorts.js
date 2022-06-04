
import React from 'react';
import { Helmet } from 'react-helmet';
import CohortsList from './CohortsList';
import CohortGraduates from './CohortGraduates';
import * as Unicons from '@iconscout/react-unicons';



function Cohorts() {

    return (
        <div>
            <Helmet>
                <title>Cohorts | Moringa Job-Board </title>
            </Helmet>

            <div className="flex flex-col">
                {/* General Cohort Stats */}
                <div className="flex flex-wrap px-8 mt-4">
                    <div class="flex flex-col w-full">
                        <div class="flex flex-wrap sm:flex-row py-2 mb-4 justify-between">
                            <div className="flex flex-col sm:w-1/2 mb-2 sm:mb-0">
                                <h1 class="text-primary text-nunito-semiBold uppercase text-2xl">Cohorts</h1>
                                <p class="leading-snug text-sm text-nunito-light">19 Cohorts with a total of 568 graduates. Most recent graduation was on April 2022.</p>
                            </div>
                            <button type="button" class="text-secondary bg-secondary/10 uppercase text-nunito-light rounded-sm text-xs px-4 py-1.5 h-fit text-center inline-flex items-center ">
                                <Unicons.UilPlus size="18" />
                                <span className="pl-2">Add New Cohort</span>
                            </button>
                            
                        </div>
                    </div>
                </div>

                {/* List of Cohorts and their assocaiated Graduates */}
                <div className="flex flex-wrap">
                    <div className="md:w-3/12">
                        {/* List of Cohorts */}
                        <CohortsList />
                    </div>
                    <div className="md:w-5/12">
                        {/* Cohort Graduates List */}
                        <CohortGraduates />
                    </div>
                    
                </div>  
            </div>
            
           
            
            
        </div>
    )
}

export default Cohorts;