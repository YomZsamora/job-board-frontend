import { useEffect, useState } from 'react';
import apiClient from '../../../services/api';
import ProgressBarDanger from '../../UIElements/progressBars/ProgressBarDanger';
import CohortGraduatesSearch from './CohortGraduatesSearch'
import calcDateDifference from '../../../services/dateDifference'
import CohortGraduatesList from './CohortGraduatesList';


function CohortGraduates({activeCohort}) {

    
    const [activeCohortGraduates, setActiveCohortGraduates] = useState([]);
    const [activeCohortNoOfGraduates, setActiveCohortNoOfGraduates] = useState(0);

    useEffect(() => {
        apiClient.get('http://localhost/sanctum/csrf-cookie')
        .then(response => {
            apiClient.get(`http://localhost/api/get_cohort_graduates/${activeCohort.id}`)
            .then(response => {
                setActiveCohortNoOfGraduates(response.data.noOfGraduates);
                setActiveCohortGraduates(response.data.graduates)
            })
        });
    }, [activeCohort]);

    // console.log(activeCohort);
    const timeSinceGraduation = calcDateDifference(activeCohort.end_date);

    return (
        <div className="flex flex-col bg-gray-light h-screen pt-4">
            <div className="px-8 mb-4">
                {/* Selected or Active Cohort General Stats */}
                <div className="flex justify-between mt-1 items-start">
                    <div>
                        { activeCohort.curriculum === 'Legacy' ?
                            <span className="bg-badge-legacy-light text-badge-legacy-dark text-[10px] text-nunito-semiBold px-1.5 py-0.5 rounded">Legacy</span> :
                            <span className="bg-badge-flatiron-light text-badge-flatiron-dark text-[10px] text-nunito-semiBold px-1.5 py-0.5 rounded">Flatiron</span>
                        }
                        <h2 className="text-xl text-nunito-light">
                            {activeCohort.cohort}
                            <span className="text-[10px] text-nunito-light text-primary/70 ml-2">{timeSinceGraduation}</span>
                        </h2>
                    </div>
                    <div className="text-right">
                        <span className="text-xs text-nunito-light text-primary/70">{activeCohortNoOfGraduates} Graduates</span>
                        <ProgressBarDanger />
                        <span className="text-primary text-xs">45%</span>
                    </div>
                </div>
                {/* Search Graduates for a particular Cohort  */}
                <CohortGraduatesSearch activeCohortGraduates={activeCohortGraduates} />
            </div>

            {/* Graduates List */}
            <div className="h-full overflow-y-auto pb-32">
                {activeCohortGraduates.map( graduate => (
                    <div key={graduate.id}>
                        <CohortGraduatesList graduate={graduate} />
                    </div>
                    ))
                }
            </div>
            

            

            {/* Graduates avatar and add graduate to Cohort */}
            
            <div className="flex flex-wrap justify-between sticky bottom-0 mt-2 py-2 px-8 border-t border-primary/10 bg-gray-light">
                {/* <h4 className="text-nunito-light text-xs mb-1">Graduates</h4> */}
                <div className="flex flex-wrap items-center">
                    <div className="flex -space-x-2">
                        <img className="w-8 h-8 border-2 border-primary/10 rounded-full" src="/images/avatar.jpeg" alt="" />
                        <img className="w-8 h-8 border-2 border-primary/10 rounded-full" src="/images/avatar.jpeg" alt="" />
                        <img className="w-8 h-8 border-2 border-primary/10 rounded-full" src="/images/avatar.jpeg" alt="" />
                        <img className="w-8 h-8 border-2 border-primary/10 rounded-full" src="/images/avatar.jpeg" alt="" />
                        <img className="w-8 h-8 border-2 border-primary/10 rounded-full" src="/images/avatar.jpeg" alt="" />
                        <img className="w-8 h-8 border-2 border-primary/10 rounded-full" src="/images/avatar.jpeg" alt="" />
                    </div>
                    <a className="flex items-center justify-center w-6 h-6 text-[10px] text-nunito-regular bg-primary/10 rounded-full " href="#">+41</a>
                    <a className="flex items-center justify-center w-6 h-6 text-lg text-nunito-regular rounded-full text-secondary ml-2 border-2 border-secondary/40 border-dashed" href="#">+</a>
                </div>

                <div className="">
                    <button className="text-alert-danger-dark text-xs text-nunito-semiBold uppercase py-2.5 text-center inline-flex items-center" type="button">
                        <span>Delete MC47/48 </span>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default CohortGraduates;