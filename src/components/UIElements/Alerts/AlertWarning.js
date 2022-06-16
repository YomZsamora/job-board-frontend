import React from 'react';

function AlertWarning({message}) {
    return (
        <div className="bg-alert-warning-light border-t-4 border-alert-warning-dark text-alert-warning-dark px-4 py-3 shadow-md" role="alert">
            <div className="flex items-start">
                <p className="text-xs pl-2">{message}</p>
            </div>
        </div>
    )
}

export default AlertWarning;