import React from 'react';

function AlertDanger({message}) {
    return (
        <div className="bg-alert-danger-light border-t-4 border-alert-danger-dark rounded-b text-alert-danger-dark px-4 py-3 shadow-md my-2" role="alert">
            <div className="flex items-start">
                <p className="text-xs pl-2">{message}</p>
            </div>
        </div>

        
    )
}

export default AlertDanger;