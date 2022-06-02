import React, { useState, useEffect } from 'react'
import apiClient from '../../../services/api';
import ProgressBarDanger from '../../UIElements/progressBars/ProgressBarDanger'
import calcDateDifference from '../../../services/dateDifference'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CohortDetails({cohort}) {
    
    const end_date = new Date(cohort.end_date);
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const cohort_end_date = end_date.getDate() + ' ' + month[end_date.getMonth()] + ' ' + end_date.getFullYear();
    const timeSinceGraduation = calcDateDifference(cohort.end_date);

    const [noOfGraduates, setNoOfGraduates] = useState("");

    useEffect(() => {
        apiClient.get('http://localhost/sanctum/csrf-cookie')
        .then(response => {
            apiClient.get(`http://localhost/api/get_cohort_graduates/${cohort.id}`)
            .then(response => {
                // console.log(response.data);
                setNoOfGraduates(response.data.noOfGraduates);
            })
        })
        .catch(e => {
            console.error('Failure', e);
        });
    }, []);
    

    return (
        <div>
            <div className="hover:bg-primary/5 hover:border-secondary px-4 py-2 cursor-pointer">
                <div className="flex items-end justify-between">
                    <p className="text-primary text-nunito-semiBold text-xs">
                        {cohort.cohort} 
                        { cohort.curriculum === 'Legacy' ?
                            <span className="bg-badge-legacy-light text-badge-legacy-dark text-[10px] text-nunito-semiBold ml-1 px-1.5 py-0.5 rounded">Legacy</span> :
                            <span className="bg-badge-flatiron-light text-badge-flatiron-dark text-[10px] text-nunito-semiBold ml-1 px-1.5 py-0.5 rounded">Flatiron</span>
                        }
                    </p>
                    {/* Ellipsis Here */}
                    <FontAwesomeIcon className="text-xs hover:text-secondary" icon="ellipsis" />
                </div>
                <span className="text-[10px] text-nunito-light text-primary/70">{cohort_end_date} ({timeSinceGraduation})</span>
                <div className="flex justify-between mb-1 items-end">
                    <span className="text-primary text-[11px]">{noOfGraduates + ' Graduates'} </span>
                    <span className="text-alert-danger-dark  text-[10px]">45%</span>
                </div>
                <ProgressBarDanger />
            </div>
        </div>
    )
}

export default CohortDetails;