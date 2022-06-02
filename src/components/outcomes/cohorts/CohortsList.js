import React, { useState, useEffect } from 'react';
import apiClient from '../../../services/api';
import CohortDetails from './CohortDetails';




function CohortsList() {

    const [cohorts, setCohorts] = useState([]);
    
    useEffect(() => {
        apiClient.get('http://localhost/sanctum/csrf-cookie')
        .then(response => {
            apiClient.get('http://localhost/api/get_cohorts')
            .then(response => {
                setCohorts(response.data.cohorts);
            })
        });
    }, []);

    return (
        <div >
            {cohorts.map( cohort => (
                    <CohortDetails key={cohort.id} cohort={cohort}  />
                ))
            }
                       
        </div>
        
    )
}

export default CohortsList;