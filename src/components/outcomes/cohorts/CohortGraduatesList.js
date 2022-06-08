

function CohortGraduatesList({graduate}) {

    return (
        <div className="px-8">
            <div className="mt-2">
                <div className="flex items-center space-x-4">
                    <img className="w-8 h-8 rounded-full" src="/images/user-icon.png" alt="" />
                    <div className="space-y-0 text-primary">
                        <div className="text-xs capitalize">{graduate.first_name + ` ` + graduate.last_name}</div>
                        <div className="text-[10px] text-primary/50">{graduate.email}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CohortGraduatesList;