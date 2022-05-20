

function ProgressBarDanger() {
    return (
        <div className="w-full bg-alert-danger-light rounded-full h-1">
            <div className="bg-alert-danger-dark h-1 rounded-full" style={{width: 45 + '%'}}></div>
        </div>
    )
}

export default ProgressBarDanger;