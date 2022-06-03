
import React from 'react';
import { Helmet } from 'react-helmet';
import CohortsList from './CohortsList';
import ProgressBarDanger from '../../UIElements/progressBars/ProgressBarDanger';
import * as Unicons from '@iconscout/react-unicons';


function Cohorts() {

    return (
        <div>
            <Helmet>
                <title>Cohorts | Moringa Job-Board </title>
            </Helmet>

            <div className="flex flex-col">
                {/* General Cohort Stats */}
                <div className="flex flex-wrap px-8 mt-6">
                    <div class="flex flex-col w-full">
                        <div class="flex flex-wrap sm:flex-row py-2 mb-4 justify-between">
                            <div className="flex flex-col sm:w-1/2 mb-2 sm:mb-0">
                                <h1 class="text-primary text-nunito-semiBold uppercase text-sm">Job Placement : 88%</h1>
                                <p class="leading-snug text-sm text-nunito-light">19 Cohorts with a total of 568 graduates. Most recent graduation was on April 2022.</p>
                            </div>
                            <button type="button" class="text-secondary bg-secondary/10 uppercase font-medium rounded-sm text-xs px-6 py-1.5 h-fit text-center inline-flex items-center ">
                                <Unicons.UilPlus size="18" />
                                <span className="pl-2">Add New Cohort</span>
                            </button>
                            
                        </div>
                    </div>
                </div>

                {/* List of Cohorts and their assocaiated Graduates */}
                <div className="flex flex-wrap">
                    <div className="md:w-5/12">
                        <CohortsList />
                    </div>
                    <div className="md:w-7/12">
                        {/* Cohort Graduates List */}
                        <div className="h-screen bg-primary/5 px-8 py-4">
                            <ProgressBarDanger />
                            <div className="flex justify-between mb-1 items-end">
                                <span className="text-[10px] text-nunito-light text-primary/70">61 Graduates</span>
                                <span className="text-primary text-[11px]">45%</span>
                            </div>
                        </div>

                    </div>
                    
                </div>  
            </div>
            
           
            
            
        </div>
    )
}

export default Cohorts;