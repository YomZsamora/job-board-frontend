
import apiClient from '../../../services/api';
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PrimaryPreloader from '../preLoaders/PrimaryPreloader'
import AlertSuccess from '../Alerts/AlertSuccess';
import AlertDanger from '../Alerts/AlertDanger';
import AlertDangerSec from '../Alerts/AlertDangerSec';

function BulkUploadModal({showBulkUpload}) {

    const [selectedFile,  setSelectedFile] = useState("");
    const [uploadResponse, setUploadResponse] = useState();
    const [cohortDoesntExist, setcohortDoesntExist] = useState(false);
    const [uploadPreloader, setUploadPreloader] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [uploadFail, setUploadFail] = useState(false);

    let cancelUpload = () => showBulkUpload();    
    let onFileChange = event => setSelectedFile(event.target.files[0]);
    let dismissAlert = () => setcohortDoesntExist(false);
     

    const uploadFile = e => {
        setUploadPreloader(true);
        e.preventDefault();
        const data = new FormData();
        data.append('fileToUpload', selectedFile);

        apiClient.get('http://localhost/sanctum/csrf-cookie')
        .then(response => {
            apiClient.post('http://localhost/api/student_bulk_upload', data)
            .then(response => {
                if(response.data.status === 200) {
                    // Successful upload
                    console.log(response);
                    setUploadResponse(response.data.message)
                    setUploadFail(false);
                    setUploadSuccess(true)
                    setUploadPreloader(false);
                } else if(response.data.status === 422){
                    // Failed to find cohort
                    console.log(response);
                    const res = {
                        title: response.data.title,
                        message: response.data.message,
                        buttonText: response.data.buttonText
                    }
                    setUploadResponse(res)
                    setcohortDoesntExist(true)
                    setUploadSuccess(false)
                    setUploadPreloader(false);
                } else {
                    // Default errors with - Duplicates
                    console.log(response);
                    setUploadResponse(response.data.message)
                    setUploadFail(true)
                    setUploadSuccess(false)
                    setUploadPreloader(false);
                }
            })
            .catch(e => {
                console.error('Failure', e);
                setUploadPreloader(false);
            })
        });
    }

    return (
        <div id="top-right-modal" data-modal-placement="top-right" tabIndex="-1" class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-end items-start flex">
            <div className="fixed inset-0 bg-primary-light bg-opacity-10 transition-opacity"></div>
            <div className="overflow-y-auto mr-4 w-1/3">
                <div class="relative w-full max-w-2xl h-full md:h-auto overflow-hidden shadow-xl transform transition-all sm:my-4 sm:max-w-lg sm:w-full">
                    <form onSubmit={uploadFile}>
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div>
                                <div class="flex justify-between items-center">
                                    <h3 className="text-xl leading-6 text-nunito-bold text-secondary" id="modal-title">Bulk Upload Students</h3>
                                    <button onClick={cancelUpload} type="button" class="text-primary hover:text-alert-danger-dark rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" >
                                        <FontAwesomeIcon icon="fa-solid fa-xmark" />
                                    </button>
                                </div>
                                <div className="text-center sm:mt-0 sm:text-left">
                                {/* <h3 className="text-xl leading-6 text-nunito-bold text-secondary" id="modal-title">Bulk Upload Students</h3> */}
                                    <div className="mt-2 text-primary">
                                        <h3 className="text-md leading-6 text-nunito-bold" id="modal-title">How to Upload</h3>
                                        <ol className="list-decimal pl-4 mt-2 text-xs">
                                            <li>Download a <a className="text-secondary" href="https://docs.google.com/spreadsheets/d/13asalRfHUTazUezfYMmqrM3-gBgEIJUdKiEfBYpPUAM/edit?usp=sharing" target="_blank" rel="noreferrer">template here</a>.</li>
                                            <li>Add your data to the template. <br></br> <span className="italic">Using excel make sure to export or save as .csv</span></li>
                                            <li>Upload below for processing.</li>
                                        </ol>
                                        {/* <AlertDangerSec /> */}
                                        { cohortDoesntExist ?  <AlertDangerSec title={uploadResponse.title} message={uploadResponse.message} buttonText={uploadResponse.buttonText} dismiss={dismissAlert} /> : "" }
                                        { uploadSuccess ? <AlertSuccess message={uploadResponse} /> : "" }
                                        { uploadFail ? <AlertDanger message={uploadResponse} /> : "" }
                                        <div className="mt-4 flex justify-center px-6 pt-5 pb-6 border-2 border-primary-light border-dashed bg-gray w-full">
                                            <div className="space-y-1 text-center">
                                                { uploadPreloader ? <PrimaryPreloader width={45} height={45} /> : <FontAwesomeIcon className="h-10 w-10 text-secondary" icon="upload" /> }
                                                <div className="flex text-xs text-primary mb-8">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-secondary">
                                                            <span className="text-secondary">Upload filled in template here.</span>
                                                            <input 
                                                                id="file-upload" 
                                                                name="file-upload" 
                                                                type="file" 
                                                                className="sr-only" 
                                                                onChange={onFileChange} 
                                                                accept=".csv" />
                                                        </label>
                                                        <p className="pl-2">csv format only.</p>
                                                </div>
                                                <p className="text-[10px]">{ selectedFile ? selectedFile.name : "" }</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button onClick={uploadFile} type="submit" className="w-full inline-flex justify-center rounded-md border border-secondary shadow-sm px-4 py-2 bg-secondary text-white hover:bg-white hover:text-secondary sm:ml-3 sm:w-auto sm:text-sm">Upload</button>
                            <button onClick={cancelUpload} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-alert-danger-dark shadow-sm px-4 py-2 font-medium text-alert-danger-dark hover:bg-alert-danger-dark hover:text-white sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BulkUploadModal;