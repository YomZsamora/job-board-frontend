
import React from 'react';
import { Helmet } from 'react-helmet';
import CohortsList from './CohortsList';


function Cohorts() {
    console.log("HERE!!!")

    return (
        <div>
            <Helmet>
                <title>Cohorts | Moringa Job-Board </title>
            </Helmet>

            <div>
                <div className="flex flex-wrap">
                    <div className="md:w-4/12">
                        <CohortsList />
                    </div>
                    <div className="md:w-4/12 p-4"></div>
                    <div className="md:flex-grow shrink p-4">
                        
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Cohorts;