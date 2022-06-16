

function CohortGraduatesList({graduate, activeGraduate, selectedGraduate}) {

    let handleGraduateSelect = graduate => selectedGraduate(graduate)

    return (
        <div className="pl-8">
                <div  onClick={() => handleGraduateSelect(graduate)} className={`group flex items-center space-x-4 py-2 cursor-pointer ${ activeGraduate.email === graduate.email ? 'hidden ' : 'block' } `}>
                    <img className="w-8 h-8 rounded-full" src="/images/user-icon.png" alt="" />
                    <div className="space-y-0">
                        <div className="text-xs capitalize group-hover:text-secondary">{graduate.first_name + ` ` + graduate.last_name}</div>
                        <div className="text-[10px] text-primary/50 group-hover:text-secondary">{graduate.email}</div>
                    </div>
                </div>
        </div>
    )
}

export default CohortGraduatesList;