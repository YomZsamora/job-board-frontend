
import React from 'react';
import { Helmet } from 'react-helmet';
import CohortsList from './CohortsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Cohorts() {
    console.log("HERE!!!")

    return (
        <div>
            <Helmet>
                <title>Cohorts | Moringa Job-Board </title>
            </Helmet>

            <div>
                <div className="flex flex-wrap">
                    <div className="md:w-4/12 p-4">
                        <CohortsList />
                    </div>
                    <div className="md:w-4/12 p-4"></div>
                    <div className="md:flex-grow shrink p-4">
                        <hr className="border-primary/10 mb-10"></hr>
                        <button type="button" className="text-primary/70 hover:text-secondary hover:border-secondary border border-dashed border-primary/20 w-full focus:ring-0 focus:outline-none text-nunito-semiBold rounded-sm text-[10px] px-5 py-2 text-center mb-2 uppercase">
                            <FontAwesomeIcon className="text-xs" icon="fa-solid fa-plus" /> Add Another Cohort
                        </button>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Cohorts;