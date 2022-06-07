
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import CohortsList from './CohortsList';
import CohortGraduates from './CohortGraduates';




function Cohorts() {

    const [activeCohort, setActiveCohort] = useState([]);
    const [activeCohortNoOfGraduates, setActiveCohortNoOfGraduates] = useState(0);
    
    let selectedCohort = (cohortId) => setActiveCohort(cohortId);
    let getActiveCohortNoOfGraduates = noOfGraduates => setActiveCohortNoOfGraduates(noOfGraduates)

    return (
        <div className="h-full overflow-y-hidden">
            <Helmet>
                <title>Cohorts | Moringa Job-Board </title>
            </Helmet>

            {/* List of Cohorts */}
            <CohortsList selectedCohort={selectedCohort} getActiveCohortNoOfGraduates={getActiveCohortNoOfGraduates} />

            <div className="flex flex-col h-full">
                 <div className="flex flex-wrap">
                    <div className="md:w-5/12">
                        {/* Cohort Graduates Details and Information */}
                        <CohortGraduates activeCohort={activeCohort} activeCohortNoOfGraduates={activeCohortNoOfGraduates} />
                    </div>
                    <div className="md:flex-1">
                        {/* General Cohort Stats */}                        
                    </div>     
                </div>  
            </div>
        </div>
    )
}

export default Cohorts;