
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
                <div className="flex flex-wrap -m-4">
                    <div className="sm:w-1/4 md:w-1/3 p-4"></div>
                    <div className="sm:w-1/4 md:w-1/3 p-4">
                        <CohortsList />
                    </div>
                    <div className="sm:w-1/4 md:w-1/3 p-4"></div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Cohorts;