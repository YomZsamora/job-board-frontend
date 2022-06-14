import { useState } from 'react'
import apiClient from '../../../services/api';
import { RadioGroup } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import * as Unicons from '@iconscout/react-unicons';
import { useForm } from "react-hook-form";
import Datepicker from 'flowbite-datepicker/Datepicker';
import courseOfferings from '../../../data/courseOfferings';


function AddCohortModal({showAddCohort, showAddCohortModal}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (formData, e) => {
        if(selected === "") {
            setInvalidCourseName(true) // Display error for invalid Course Name
        }
        else if(/^[0-9]+$/.test(formData.courseOfferingID)) { // Check if Course Offering ID contains digits
            setInvalidCourseID(false)  
            setInvalidCourseName(false)
            addNewCohort(formData);
            setNewCohort({ courseOfferingname: selected, courseOfferingID: "", cohortStartDate: "", cohortGraduationDate: "" })
            reset();
        } else {
            setInvalidCourseName(false)
            setInvalidCourseID(true) // Display error for invalid Course ID
        }
    }

    const [selected, setSelected] = useState('');
    const [invalidCourseID, setInvalidCourseID] =useState(false);
    const [invalidCourseName, setInvalidCourseName] =useState(false);
    const [newCohort, setNewCohort] = useState({
        courseOfferingname: selected,
        courseOfferingID: "",
        cohortStartDate: "",
        cohortGraduationDate: "",
    })

    // Cancel Add New Cohort and Close Add New Cohort Modal
    let cancelAddCohort = () => showAddCohort();

    // Updating state according to input values
    let handleChange = e => {
        setNewCohort({
            ...newCohort,
            [e.target.name]: e.target.value,
        })
    }

    // Setting up Date Pickers for Start Date and Graduation Date for New Cohort
    let getCohortDates = () => {
        const datepickerStartDate = document.getElementById('cohortStartDate');
        const datepickerGraduationDate = document.getElementById('cohortGraduationDate');
        new Datepicker(datepickerStartDate, {}); 
        new Datepicker(datepickerGraduationDate, {});
    }


    // Submit and POST form data to server/backend
    let addNewCohort = formData => {
        apiClient.get('http://localhost/sanctum/csrf-cookie')
        .then(response => {
            apiClient.post('http://localhost/api/add_new_cohort', {
                course
                email: formData.email,
                password: formData.password
            })
            .then(response => {
                // console.log(response);
                if(response.data.status === 422){
                    setUserDoesntExists(true);
                    setError(response.data.errorMessage);
                    setloginPreloader(false);
                } else {
                    setUserDoesntExists(false);
                    login(response.data);
                    setloginPreloader(false);
                }
            })
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
                                    {/* { userDoesntExists ?  <AlertDanger message={error} /> : <p></p> } */}
                                        <div className="px-4 sm:px-6">
                                            <h2 className="text-lg text-nunito-bold text-primary uppercase" id="slide-over-title">Add a New Cohort</h2>
                                            <p className="text-nunito-regular text-xs text-primary/70">Note: Graduation date has to be provided for new Cohorts. Ongoing cohorts can't be added.</p>
                                        </div>
                                        <div className="relative mt-6 flex-1  sm:px-6">
                                            <div className="absolute inset-0 px-4 sm:px-6">
                                                <div className="h-full">
                                                    <form id="create-cohort-form" onSubmit={handleSubmit(onSubmit)}>
                                                        <div className="w-full">
                                                            <div className="mx-auto w-full max-w-md">
                                                                <p className="text-primary text-sm">Select Course Offering:</p>
                                                                { invalidCourseName ? <p className="text-alert-danger-dark text-xs mt-1">Please Select a Course Offering.</p> : null }
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
                                                                                    <div className="shrink-0 text-secondary items-center rounded-full bg-secondary/20">
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

                                                        <div className="flex flex-col mt-6">
                                                            <div className="flex">
                                                                <button className={`flex-shrink-0 z-10 inline-flex items-center py-2.5 px-2 text-xs text-nunito-regular text-center  ${ selected ? 'bg-primary text-secondary' : 'text-primary' } border border-primary-light rounded-l-md hover:bg-primary-light`} type="button">
                                                                    {selected ? selected.name : 'Course Offering'} 
                                                                </button>
                                                                <div className="relative w-full">
                                                                    <input 
                                                                        {...register("courseOfferingID", { required: 'Please enter the Course ID. Should be a number!' })}
                                                                        className={`block p-2.5 w-full z-20 text-primary bg-gray-50 rounded-r-lg border ${ errors.courseOfferingID ? 'border-alert-danger-dark text-[11px] placeholder-alert-danger-dark' : 'border-primary-light text-sm' }  focus:outline-none`}
                                                                        number="text"
                                                                        autoComplete="off"
                                                                        placeholder={errors.courseOfferingID ? 'Please enter the Course ID. Should be a number!' : 'Enter Course ID'}
                                                                        id="courseOfferingID"
                                                                        name="courseOfferingID"
                                                                        value={newCohort.courseOfferingID} 
                                                                        onChange={handleChange} />
                                                                </div>
                                                            </div>
                                                            { invalidCourseID ? <p className="text-alert-danger-dark text-xs mt-1">Invalid Course ID! Course Offering ID shouldn't contain text.</p> : null }
                                                            <div>
                                                                <small className="mt-1 text-xs text-gray-dark">e.g SDC47, DSF-PT1, SDF-FT3, DSC12, SDF-FT-INT2.</small>
                                                            </div>

                                                            <div className="flex items-center mt-4">
                                                                <div className="relative">
                                                                    <div className={`${errors.cohortStartDate ? 'text-alert-danger-dark' : ''} absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none`}>
                                                                        <Unicons.UilCalendarAlt size="18"  />
                                                                    </div>
                                                                    <input 
                                                                        {...register("cohortStartDate", { required: 'Enter date Cohort started!' })}
                                                                        className={`${errors.cohortStartDate ? 'placeholder-alert-danger-dark' : ''} text-primary block w-full pl-10 p-2.5 text-xs focus:outline-none` }
                                                                        onClick={getCohortDates} 
                                                                        id="cohortStartDate" 
                                                                        datepicker="true"
                                                                        datepicker-autohide="true"
                                                                        type="text" 
                                                                        autoComplete="off"
                                                                        placeholder={errors.cohortStartDate ? 'Enter Cohort Start Date!' : 'Cohort Start Date'}
                                                                        name="cohortStartDate" 
                                                                        selected={newCohort.cohortStartDate}
                                                                        value={newCohort.cohortStartDate}
                                                                        onChange={handleChange} />
                                                                </div>
                                                                
                                                                <div className="relative">
                                                                    <div className={`${errors.cohortStartDate ? 'text-alert-danger-dark' : ''} absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none`}>
                                                                        <Unicons.UilCalendarAlt size="18"  />
                                                                    </div>
                                                                    <input 
                                                                        {...register("cohortGraduationDate", { required: 'Enter date Cohort started!' })}
                                                                        className={`${errors.cohortGraduationDate ? 'placeholder-alert-danger-dark' : ''} text-primary block w-full pl-10 p-2.5 text-xs focus:outline-none`} 
                                                                        onClick={getCohortDates} 
                                                                        id="cohortGraduationDate" 
                                                                        datepicker="true"
                                                                        datepicker-autohide="true"
                                                                        type="text" 
                                                                        autoComplete="off"
                                                                        placeholder={errors.cohortGraduationDate ? 'Enter Graduation Date!' : 'Cohort Start Date'} 
                                                                        name="cohortGraduationDate"
                                                                        selected={newCohort.cohortGraduationDate}
                                                                        value={newCohort.cohortGraduationDate}
                                                                        onChange={handleChange} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button className="flex flex-col items-center w-full mt-8 bg-secondary text-white hover:bg-secondary/20 hover:text-primary transition-all duration-300 uppercase px-6 py-2 text-xs text-nunito-light">
                                                            Add New Cohort
                                                        </button>
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
        </Transition>
    )
}


export default AddCohortModal;