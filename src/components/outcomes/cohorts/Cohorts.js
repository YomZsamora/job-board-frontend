
import React, { useState, useEffect } from 'react';
import apiClient from '../../../services/api';
import { Helmet } from 'react-helmet';
import CohortsList from './CohortsList';
import CohortGraduates from './CohortGraduates';



function Cohorts({showAddCohort}) {

    const [activeCohort, setActiveCohort] = useState([]);
    const [cohorts, setCohorts] = useState([]);
    
    let selectedCohort = cohort => setActiveCohort(cohort);
    
    // Fetch All Cohorts
    useEffect(() => {
        apiClient.get('http://localhost/sanctum/csrf-cookie')
        .then(response => {
            apiClient.get('http://localhost/api/get_cohorts')
            .then(response => {
                setCohorts(response.data.cohorts);
                selectedCohort(response.data.cohorts[0]);
            })
        })
    }, []);

    return (
        <div className="h-full overflow-y-hidden">
            <Helmet>
                <title>Cohorts | Moringa Job-Board </title>
            </Helmet>

            {/* List of Cohorts */}
            <CohortsList cohorts={cohorts} showAddCohort={showAddCohort} activeCohort={activeCohort} selectedCohort={selectedCohort}  />

            <div className="flex flex-col h-full">
                 <div className="flex flex-wrap">
                    <div className="md:w-5/12">
                        {/* Cohort Graduates Details and Information */}
                        <CohortGraduates activeCohort={activeCohort}  />
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