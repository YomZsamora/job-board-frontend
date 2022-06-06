import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import * as Unicons from '@iconscout/react-unicons';

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

function AddCohortModal() {
    const [selected, setSelected] = useState(courseOfferings[0])

    return (
        <div>
            
            <div class="relative z-30" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-primary-light bg-opacity-20 transition-opacity"></div>

                <div class="fixed inset-0 overflow-hidden">
                    <div class="absolute inset-0 overflow-hidden">
                        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <div class="pointer-events-auto relative w-screen max-w-md">
                                <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                    <button type="button" class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                    <span class="sr-only">Close panel</span>
                                    
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    </button>
                                </div>

                                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                    <div class="px-4 sm:px-6">
                                        <h2 class="text-lg text-nunito-bold text-primary uppercase" id="slide-over-title">Add a New Cohort</h2>
                                        <p className="text-nunito-regular text-xs text-primary/70">Note: Graduation date has to be provided for new Cohorts. Ongoing cohorts can't be added.</p>
                                    </div>
                                    <div class="relative mt-6 flex-1 px-4 sm:px-6">
                                    
                                        <div class="absolute inset-0 px-4 sm:px-6">
                                            <div class="h-full">

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

                                                    <div class="flex flex-col mt-6">
                                                        <div className="flex">
                                                            <button class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-2 text-xs text-nunito-regular text-center text-primary border border-primary-light rounded-l-md hover:bg-primary-light" type="button">
                                                                SDF-FT-INT 
                                                            </button>
                                                            <div class="relative w-full">
                                                                <input type="text" class="block p-2.5 w-full z-20 text-sm text-primary bg-gray-50 rounded-r-lg border-l-gray-light border-l-2 border border-primary-light focus:outline-none" placeholder="Enter Course ID" required="" />
                                                            </div>
                                                        </div>
                                                        <p class="mt-1 text-xs text-gray-dark">e.g SDC47, DSF-PT1, SDF-FT3, DSC12, SDF-FT-INT2.</p>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

function CheckIcon(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

export default AddCohortModal;