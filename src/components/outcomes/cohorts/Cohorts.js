
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import CohortsList from './CohortsList';
import CohortGraduates from './CohortGraduates';




function Cohorts({showAddCohort}) {

    const [activeCohort, setActiveCohort] = useState([]);
    const [activeCohortGraduates, setActiveCohortGraduates] = useState([]);
    const [activeCohortNoOfGraduates, setActiveCohortNoOfGraduates] = useState(0);
    
    let selectedCohort = cohort => setActiveCohort(cohort);
    let getActiveCohortNoOfGraduates = noOfGraduates => setActiveCohortNoOfGraduates(noOfGraduates);
    let getActiveCohortGraduates = graduates =>     setActiveCohortGraduates(graduates)

    return (
        <div className="h-full overflow-y-hidden">
            <Helmet>
                <title>Cohorts | Moringa Job-Board </title>
            </Helmet>

            {/* List of Cohorts */}
            <CohortsList showAddCohort={showAddCohort} selectedCohort={selectedCohort} getActiveCohortNoOfGraduates={getActiveCohortNoOfGraduates} getActiveCohortGraduates={getActiveCohortGraduates} />

            <div className="flex flex-col h-full">
                 <div className="flex flex-wrap">
                    <div className="md:w-5/12">
                        {/* Cohort Graduates Details and Information */}
                        <CohortGraduates activeCohort={activeCohort} activeCohortNoOfGraduates={activeCohortNoOfGraduates} activeCohortGraduates={activeCohortGraduates} />
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