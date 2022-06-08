import React, { useState, useEffect } from 'react'
import apiClient from '../../../services/api';
import calcDateDifference from '../../../services/dateDifference'

function CohortDetails({cohort, selectedCohort, getActiveCohortNoOfGraduates, getActiveCohortGraduates}) {
    
    const end_date = new Date(cohort.end_date);
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const cohort_end_date = end_date.getDate() + ' ' + month[end_date.getMonth()] + ' ' + end_date.getFullYear();
    const timeSinceGraduation = calcDateDifference(cohort.end_date);

    const [noOfGraduates, setNoOfGraduates] = useState("");
    const [cohortGraduates, setCohortGraduates] = useState([]);

    let showCohortDetails = () => {
        selectedCohort(cohort);
        getActiveCohortNoOfGraduates(noOfGraduates);
        getActiveCohortGraduates(cohortGraduates);
    }

    useEffect(() => {
        apiClient.get('http://localhost/sanctum/csrf-cookie')
        .then(response => {
            apiClient.get(`http://localhost/api/get_cohort_graduates/${cohort.id}`)
            .then(response => {
                setNoOfGraduates(response.data.noOfGraduates);
                setCohortGraduates(response.data.graduates)
            })
        })
        .catch(e => {
            console.error('Failure', e);
        });
    }, []);
    

    return (
        <div>
            <div onClick={showCohortDetails} className={`${
                                false ? 'bg-primary/5 border-t-2 border-secondary' : ''
                                } hover:bg-primary/5 px-4 py-2 cursor-pointer w-52`} >
                <div className="flex items-center justify-between">
                    <p className="text-primary text-nunito-bold text-sm">
                        <span className="mr-1">{cohort.cohort}</span> 
                        { cohort.curriculum === 'Legacy' ?
                            <span className="bg-badge-legacy-light text-badge-legacy-dark text-[10px] text-nunito-semiBold px-1.5 py-0.5 rounded">Legacy</span> :
                            <span className="bg-badge-flatiron-light text-badge-flatiron-dark text-[10px] text-nunito-semiBold px-1.5 py-0.5 rounded">Flatiron</span>
                        }
                    </p>
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-primary text-[11px]">{noOfGraduates + ' Graduates'} </span>
                    <span className="text-[10px] text-nunito-light text-primary/70">{cohort_end_date} ({timeSinceGraduation})</span>
                </div>
            </div>
        </div>
    )
}

export default CohortDetails;