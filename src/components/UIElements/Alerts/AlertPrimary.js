import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AlertPrimary() {
    return (
        <div class="bg-alert-primary-light border-t-4 border-alert-primary-dark rounded-b text-alert-primary-dark px-4 py-3 shadow-md my-2" role="alert">
            <div class="flex">
            <FontAwesomeIcon className="h-6 w-6 mr-4" icon="check" />
                <div>
                <p class="font-bold">Our privacy policy has changed</p>
                <p class="text-sm">Make sure you know how these changes affect you.</p>
                </div>
            </div>
        </div>
    )
}

export default AlertPrimary;