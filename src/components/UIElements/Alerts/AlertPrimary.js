import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AlertPrimary({title, message}) {
    return (
        <div className="bg-alert-primary-light border-t-4 border-alert-primary-dark rounded-b text-alert-primary-dark px-4 py-3 shadow-md my-2" role="alert">
            <div className="flex">
            <FontAwesomeIcon className="h-6 w-6 mr-4" icon="check" />
                <div>
                <p className="text-nunito-semiBold text-sm">{title}</p>
                <p className="text-xs">{message}</p>
                </div>
            </div>
        </div>
    )
}

export default AlertPrimary;