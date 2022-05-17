import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AlertWarning({message}) {
    return (
        <div className="bg-alert-warning-light border-t-4 border-alert-warning-dark rounded-b text-alert-warning-dark px-4 py-3 shadow-md my-2" role="alert">
            <div className="flex">
            <FontAwesomeIcon className="h-4 w-4 mr-4" icon="triangle-exclamation" />
                <div>
                <p className="text-xs">{message}</p>
                </div>
            </div>
        </div>
    )
}

export default AlertWarning;