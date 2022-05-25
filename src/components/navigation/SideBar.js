import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <aside className="w-40" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 pl-4 border-r border-primary/10 h-screen">
                <a href="/outcomes/dashboard" className="flex items-center">
                    <img src="/images/logo.png" className="w-12 mr-3" alt="Moringa Logo" />
                </a>

                {/* Links */}
                <div className="py-6">
                    <NavLink
                        className={({ isActive }) => "flex items-center p-1 text-xs text-nunito-semiBold text-primary" + (isActive ? "bg-primary/5 border-r-4 border-secondary text-secondary" : "")}
                        to="/outcomes/dashboard">
                            Dashboard
                    </NavLink>
                    <button type="button" className="flex items-center p-1 w-full text-xs text-nunito-semiBold text-primary" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <span className="flex-1 text-left whitespace-nowrap" sidebar-toggle-item>Jobs</span>
                    </button>
                    <ul id="dropdown-example" className="pt-1 pb-2">
                        <li>
                            <NavLink
                                className={({ isActive }) => "flex items-center p-1 pl-4 w-full text-xs text-nunito-regular text-primary" + (isActive ? "bg-primary/5 border-r-4 border-secondary text-secondary" : "")}
                                to="/outcomes/jobs/applications">
                                    Applications
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => "flex items-center p-1 pl-4 w-full text-xs text-nunito-regular text-primary" + (isActive ? "bg-primary/5 border-r-4 border-secondary text-secondary" : "")}
                                to="/outcomes/jobs/openings">
                                    Openings
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink
                        className={({ isActive }) => "flex items-center p-1 w-full text-xs text-nunito-semiBold text-primary" + (isActive ? "bg-primary/5 border-r-4 border-secondary text-secondary" : "")}
                        to="/outcomes/cohorts">
                            Cohorts
                    </NavLink>
                    <ul id="dropdown-example" className="pt-1 pb-2">
                        <li>
                            <NavLink
                                className={({ isActive }) => "flex items-center p-1 pl-4 w-full text-xs text-nunito-regular text-primary" + (isActive ? "bg-primary/5 border-r-4 border-secondary text-secondary" : "")}
                                to="/cohorts/graduates">
                                    Graduates
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink
                        className={({ isActive }) => "flex items-center p-1 text-xs text-nunito-semiBold text-primary" + (isActive ? "bg-primary/5 border-r-4 border-secondary text-secondary" : "")}
                        to="/outcomes/employers">
                            Employers
                    </NavLink>
                </div>
                    
                
                {/* Job Placement */}
                <div className="mt-6 mr-4 py-2 border-t border-primary/10 ">
                    <div className="flex justify-between items-end">
                        <span className="text-primary text-[11px]">Job Placement </span>
                        <span className="text-alert-success-dark  text-[10px]">81%</span>
                    </div>
                    <div className="w-full bg-alert-success-light/40 rounded-full h-1">
                        <div className="bg-alert-success-dark h-1 rounded-full" style={{width: 81 + '%'}}></div>
                    </div>
                </div>
                
            </div>
         </aside>
    )
}

export default Sidebar;