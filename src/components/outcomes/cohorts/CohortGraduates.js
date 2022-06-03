
import ProgressBarDanger from '../../UIElements/progressBars/ProgressBarDanger';
import CohortGraduatesSearch from './CohortGraduatesSearch'


function CohortGraduates() {
    return (
        <div className="h-screen bg-primary/5 px-8 py-4">
            <h2 className="text-xl text-nunito-light mb-1">MC47/48</h2>
            <ProgressBarDanger />
            <div className="flex justify-between mt-1 items-end">
                <span className="text-xs text-nunito-light text-primary/70">61 Graduates</span>
                <span className="text-primary text-xs">45%</span>
            </div>

            {/* Search Graduates for a particular Cohort  */}
            <CohortGraduatesSearch />
            
        </div>
    )
}

export default CohortGraduates;