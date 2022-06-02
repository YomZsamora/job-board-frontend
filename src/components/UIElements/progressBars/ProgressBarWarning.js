
function ProgressBarWarning() {
    return (
        <div className="w-full bg-alert-warning-light rounded-full h-1">
            <div className="bg-alert-warning-dark h-1 rounded-full" style={{width: 45 + '%'}}></div>
        </div>
    )
}

export default ProgressBarWarning;