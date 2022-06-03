import React from 'react';

function AlertPrimary({message}) {
    return (
        <div className="bg-alert-primary-light border-t-4 border-alert-primary-dark rounded-b text-alert-primary-dark px-4 py-3 shadow-md my-2" role="alert">
            <div className="flex items-start">
                <p className="text-xs pl-2">{message}</p>
            </div>
        </div>
    )
}

export default AlertPrimary;