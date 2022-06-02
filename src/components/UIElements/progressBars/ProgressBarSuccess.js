

function ProgressBarSuccess() {
    return (
        <div className="w-full bg-alert-success-light rounded-full h-1">
            <div className="bg-alert-success-dark h-1 rounded-full" style={{width: 45 + '%'}}></div>
        </div>
    )
}

export default ProgressBarSuccess;