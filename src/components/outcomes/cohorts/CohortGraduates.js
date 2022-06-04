
import ProgressBarDanger from '../../UIElements/progressBars/ProgressBarDanger';
import CohortGraduatesSearch from './CohortGraduatesSearch'


function CohortGraduates() {
    return (
        <div className="h-screen bg-primary/5 px-8 py-4">
            <div className="flex justify-between mt-1 items-start">
                <div>
                    <span className="bg-badge-legacy-light text-badge-legacy-dark text-[10px] text-nunito-semiBold px-1.5 py-0.5 rounded">Legacy</span>
                    <h2 className="text-xl text-nunito-light">
                        MC47/48
                        <span className="text-[10px] text-nunito-light text-primary/70 ml-2">2 Months Ago</span>
                    </h2>
                </div>
                <div className="text-right">
                    <span className="text-xs text-nunito-light text-primary/70">61 Graduates</span>
                    <ProgressBarDanger />
                    <span className="text-primary text-xs">45%</span>
                </div>
            </div>

            {/* Search Graduates for a particular Cohort  */}
            <CohortGraduatesSearch />

            <div className="mt-6">
                <div class="flex items-center space-x-4">
                    <img class="w-10 h-10 rounded-full" src="/images/user-icon.png" alt="" />
                    <div class="space-y-0 text-primary">
                        <div className="text-sm">Adamu Wang'anya</div>
                        <div class="text-xs text-primary/50">adamu.wang'anya@student.moringaschool.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CohortGraduates;