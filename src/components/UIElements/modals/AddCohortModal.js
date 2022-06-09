import { useState, useEffect } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import * as Unicons from '@iconscout/react-unicons';
import Datepicker from 'flowbite-datepicker/Datepicker';


const courseOfferings = [
    {
        name: 'SDC',
        description: 'Software Development (Legacy)',
    },
    {
        name: 'SDF-FT',
        description: 'Software Development Flatiron - Full-Time',
    },
    {
        name: 'SDF-FT-INT',
        description: 'Software Development Flatiron - Full-Time - International',
    },
    {
        name: 'DSC',
        description: 'Data Science (Legacy)',
    },
    {
        name: 'DSF-FT',
        description: 'Data Science Flatiron - Full-Time',
    },
    {
        name: 'DSF-PT',
        description: 'Data Science Flatiron - Part-Time',
    },
    
]

function AddCohortModal({showAddCohort, showAddCohortModal}) {

    const [selected, setSelected] = useState(courseOfferings[0]);

    let cancelAddCohort = () => showAddCohort();
    let getStartDate = () => {
        const datepickerEl = document.getElementById('cohortStartDate');
        console.log(datepickerEl);
        new Datepicker(datepickerEl, {
            // options
        }); 
    }
    

    return (

        <Transition
        show={showAddCohortModal}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
          <div>            
            <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">

                <div className="fixed inset-0 bg-primary-light bg-opacity-20 transition-opacity"></div>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <div className="pointer-events-auto relative w-screen max-w-md">
                                <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                    <button type="button" className="rounded-md text-secondary hover:text-alert-danger-dark hover:scale-150 transition-all duration-300` focus:outline-none focus:ring-1 focus:ring-alert-danger-dark">
                                        <span className="sr-only">Close panel</span>
                                        <Unicons.UilTimes onClick={cancelAddCohort} size="18"  />
                                    </button>
                                </div>

                                <div className="flex h-full flex-col justify-between overflow-y-scroll bg-white pt-6 shadow-xl">
                                    <div className="px-4 sm:px-6">
                                        <h2 className="text-lg text-nunito-semiBold text-primary uppercase" id="slide-over-title">Add a New Cohort</h2>
                                        <p className="text-nunito-regular text-xs text-primary/70">Note: Graduation date has to be provided for new Cohorts. Ongoing cohorts can't be added.</p>
                                    </div>
                                    <div className="relative mt-6 flex-1  sm:px-6">
                                        <div className="absolute inset-0 px-4 sm:px-6">
                                            <div className="h-full">
                                                <form>
                                                    <div className="w-full">
                                                        <div className="mx-auto w-full max-w-md">
                                                            <p className="text-primary text-sm">Select Course Offering:</p>
                                                            <RadioGroup value={selected} onChange={setSelected}>
                                                                <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                                                                <div className="space-y-2">
                                                                    {courseOfferings.map((courseOffering) => (
                                                                    <RadioGroup.Option
                                                                        key={courseOffering.name}
                                                                        value={courseOffering}
                                                                        className={({ active, checked }) =>
                                                                        `${
                                                                            active
                                                                            ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                                                            : ''
                                                                        }
                                                                        ${
                                                                            checked ? 'bg-primary text-secondary transition-all duration-300' : 'bg-white'
                                                                        }
                                                                            relative flex cursor-pointer rounded-md px-2 py-2 shadow-md focus:outline-none overflow-hidden`
                                                                        }
                                                                    >
                                                                        {({ active, checked }) => (
                                                                        <>
                                                                            <div className="flex w-full items-center justify-between">
                                                                            <div className="flex items-center">
                                                                                <div className="text-sm">
                                                                                <RadioGroup.Label
                                                                                    as="p"
                                                                                    className={`text-nunito-regular text-xs ${
                                                                                    checked ? 'text-secondary' : 'text-primary'
                                                                                    }`}
                                                                                >
                                                                                    {courseOffering.name}
                                                                                </RadioGroup.Label>
                                                                                <RadioGroup.Description
                                                                                    as="span"
                                                                                    className={`inline text-[10px] text-nunito-light ${
                                                                                    checked ? 'text-secondary' : 'text-primary'
                                                                                    }`}
                                                                                >
                                                                                    <span>
                                                                                    {courseOffering.description}
                                                                                    </span>
                                                                                </RadioGroup.Description>
                                                                                </div>
                                                                            </div>
                                                                            {checked && (
                                                                                <div className="shrink-0 text-secondary items-center rounded-full bg-secondary/20 transition-all duration-300 hover:scale-[3.4] hover:-translate-x-1">
                                                                                    <Unicons.UilCheck size="18"  />
                                                                                </div>
                                                                            )}
                                                                            </div>
                                                                        </>
                                                                        )}
                                                                    </RadioGroup.Option>
                                                                    ))}
                                                                </div>
                                                            </RadioGroup>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col mt-10">
                                                        <div className="flex">
                                                            <button className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-2 text-xs text-nunito-regular text-center text-primary border border-primary-light rounded-l-md hover:bg-primary-light" type="button">
                                                                SDF-FT-INT 
                                                            </button>
                                                            <div className="relative w-full">
                                                                <input type="text" className="block p-2.5 w-full z-20 text-sm text-primary bg-gray-50 rounded-r-lg border-l-gray-light border-l-2 border border-primary-light focus:outline-none" placeholder="Enter Course ID" required="" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <small className="mt-1 text-xs text-gray-dark">e.g SDC47, DSF-PT1, SDF-FT3, DSC12, SDF-FT-INT2.</small>
                                                        </div>

                                                        <div className="flex items-center mt-4">
                                                            <div className="relative">
                                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                                    <Unicons.UilCalendarAlt size="18"  />
                                                                </div>
                                                                <input onClick={getStartDate} id="cohortStartDate" datepicker type="text" className="text-primary block w-full pl-10 p-2.5 text-xs focus:outline-none" placeholder="Start Date " />
                                                            </div>
                                                            
                                                            <div className="relative">
                                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                                    <Unicons.UilCalendarAlt size="18"  />
                                                                </div>
                                                                <input datepicker type="text" className="text-primary block w-full pl-10 p-2.5 text-xs focus:outline-none" placeholder="Graduation Date" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>        
                                    </div>
                                    <button className="w-full bg-secondary text-white hover:bg-secondary/20 hover:text-secondary transition-all duration-300 uppercase px-6 py-4 text-sm text-nunito-light">
                                        Add New Cohort
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Transition>
        
        
    )
}


export default AddCohortModal;