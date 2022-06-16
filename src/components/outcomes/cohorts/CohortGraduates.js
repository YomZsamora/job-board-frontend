import { useEffect, useState } from 'react';
import apiClient from '../../../services/api';
import ProgressBarDanger from '../../UIElements/progressBars/ProgressBarDanger';
import CohortGraduatesSearch from './CohortGraduatesSearch'
import calcDateDifference from '../../../services/dateDifference'
import CohortGraduatesList from './CohortGraduatesList';
import * as Unicons from '@iconscout/react-unicons';
import { useOutletContext } from "react-router-dom";

function CohortGraduates({activeCohort, showBulkUploadModal}) {

    const { setShowBulkUploadModal } = useOutletContext();
    const [activeCohortGraduates, setActiveCohortGraduates] = useState([]);
    const [activeCohortNoOfGraduates, setActiveCohortNoOfGraduates] = useState(0);
    const [activeGraduate, setActiveGraduate] = useState({})

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

    let handleBulkUpload = () => setShowBulkUploadModal(!showBulkUploadModal);
    let selectedGraduate = graduate => setActiveGraduate(graduate)
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
                        <span className={`${activeCohortNoOfGraduates === 0 ? 'text-alert-danger-dark' : 'text-primary/70'} text-xs text-nunito-light`}>{activeCohortNoOfGraduates === 0 ? 'Graduates Not Added' : activeCohortNoOfGraduates + ` Graduates`}</span>
                        <ProgressBarDanger />
                        <span className="text-primary text-xs">45%</span>
                    </div>
                </div>
                {/* Search Graduates for a particular Cohort  */}
                <CohortGraduatesSearch activeCohortGraduates={activeCohortGraduates} selectedGraduate={selectedGraduate} />
                
            </div>

            {/* Active / Selected Graduate Details */}
            <div className={`group flex items-center border-r-4 border-secondary space-x-4 px-2 bg-primary py-2 cursor-pointer ${ activeGraduate.first_name === undefined || activeCohortNoOfGraduates === 0 ? 'hidden' : 'block' } `}>
                <img className="w-8 h-8 rounded-full" src="/images/user-icon.png" alt="" />
                <div className="space-y-0  text-secondary">
                    <div className="text-xs capitalize ">{activeGraduate.first_name + ` ` + activeGraduate.last_name}</div>
                    <div className="text-[10px] ">{activeGraduate.email}</div>
                </div>
            </div>

            {/* Graduates List */}
            <div className="h-full overflow-y-auto pb-28">
                
                {activeCohortNoOfGraduates === 0 
                ? (
                    <div className="relative px-16 w-full h-full flex items-center">
                        <div className="p-6 text-center">
                            <Unicons.UilGraduationCap className="mx-auto mb-4 text-alert-success-dark" size="70"  />
                            <h3 className="mb-5 text-sm text-primary">{`Graduates have not been added to ${activeCohort.cohort}. Do you want to add the Graduates now?`}</h3>
                            <button onClick={handleBulkUpload} type="button" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-alert-success-light hover:text-alert-success-dark duration-300 text-white bg-alert-success-dark focus:outline-none text-nunito-semiBold rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                Yes, Upload!
                            </button>
                        </div>
                    </div>
                )
                : activeCohortGraduates.map( graduate => (
                    <div key={graduate.id}>
                        <CohortGraduatesList graduate={graduate} activeGraduate={activeGraduate} selectedGraduate={selectedGraduate} />
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