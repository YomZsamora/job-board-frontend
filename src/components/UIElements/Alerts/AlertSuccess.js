import React from 'react';

function AlertSuccess({message}) {
    return (
        <div className="bg-alert-success-light border-t-4 border-alert-success-dark text-alert-success-dark px-4 py-3 shadow-md" role="alert">
            <div className="flex items-start">
                <p className="text-xs pl-2">{message}</p>
            </div>
        </div>
    )
}

export default AlertSuccess;