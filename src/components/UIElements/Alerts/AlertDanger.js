import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AlertDanger({message}) {
    return (
        <div className="bg-alert-danger-light border-t-4 border-alert-danger-dark rounded-b text-alert-danger-dark px-4 py-3 shadow-md my-2" role="alert">
            <div className="flex">
            <FontAwesomeIcon className="h-4 w-4 mr-4" icon="fa-solid fa-ban" />
                <div>
                <p className="text-xs">{message}</p>
                </div>
            </div>
        </div>

        
    )
}

export default AlertDanger;