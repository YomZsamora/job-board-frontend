import * as Unicons from '@iconscout/react-unicons';

function AlertDangerSec({title, message, buttonText, dismiss}) {
    return (
        <div id="alert-additional-content-2" class="p-4 mb-4 bg-alert-danger-light rounded-b border-t-4 border-alert-danger-dark text-alert-danger-dark px-4 py-3 shadow-md my-2" role="alert">
            <div class="flex items-center">
                <Unicons.UilExclamationTriangle size="20" />
                <h3 class="text-lg text-nunito-bold text-alert-danger-dark">{title}</h3>
            </div>
            <div class="mt-2 mb-4 text-xs text-alert-danger-dark">
                {message}
            </div>
            <div class="flex">
                <button type="button" class="text-alert-danger-light bg-alert-danger-dark hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-red-800 dark:hover:bg-red-900">
                <Unicons.UilPlusCircle size="18" />
                {buttonText}
                </button>
                <button onClick={dismiss} type="button" class="text-red-700 bg-transparent border border-red-700 hover:bg-alert-danger-dark hover:text-alert-danger-light focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center " data-dismiss-target="#alert-additional-content-2" aria-label="Close">
                Dismiss
                </button>
            </div>
        </div>
    )
}

export default AlertDangerSec;