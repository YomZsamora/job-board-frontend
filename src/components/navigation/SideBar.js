import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Unicons from '@iconscout/react-unicons';


function Sidebar() {
    return (
        <aside className="w-56" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 pl-4 border-r border-primary/10 h-screen">
                <a href="/outcomes/dashboard" className="flex items-center">
                    <img src="/images/logo.png" className="w-12 mr-3" alt="Moringa Logo" />
                </a>

                {/* Links */}
                <div className="py-6">
                    <NavLink
                        className={({ isActive }) => "flex items-center p-1 text-xs text-nunito-regular text-primary" + (isActive ? "bg-primary/5 border-r-4 border-secondary text-secondary" : "")}
                        to="/outcomes/dashboard">
                            <Unicons.UilPresentationPlay size="14" />
                            <span className="pl-3">Dashboard</span>
                    </NavLink>
                    <button type="button" className="flex items-center p-1 w-full text-xs text-nunito-regular text-primary" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <Unicons.UilBag size="14" />
                            <span className="pl-3">Jobs</span>
                    </button>
                    <ul id="dropdown-example" className="pt-1 pb-2">
                        <li>
                            <NavLink
                                className={({ isActive }) => "flex items-center p-1 pl-4 w-full text-xs text-nunito-regular text-primary" + (isActive ? "bg-primary/5 border-r-4 border-secondary text-secondary" : "")}
                                to="/outcomes/jobs/applications">
                                    <Unicons.UilEnvelopeBookmark size="14" />
                                    <span className="pl-3">Applications</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => "flex items-center p-1 pl-4 w-full text-xs text-nunito-regular text-primary" + (isActive ? "bg-primary/5 border-r-4 border-secondary text-secondary" : "")}
                                to="/outcomes/jobs/openings">
                                    <Unicons.UilCalling size="14" />
                                    <span className="pl-3">Openings</span>
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink
                        className={({ isActive }) => "flex items-center p-1 w-full text-xs text-nunito-semiBold text-primary" + (isActive ? "bg-primary/5 border-r-4 border-secondary text-secondary" : "")}
                        to="/outcomes/cohorts">
                            <Unicons.UilTrophy size="14" />
                            <span className="pl-3">Cohorts</span>
                    </NavLink>
                    <ul id="dropdown-example" className="pt-1 pb-2">
                        <li>
                            <NavLink
                                className={({ isActive }) => "flex items-center p-1 pl-4 w-full text-xs text-nunito-regular text-primary" + (isActive ? "bg-primary/5 border-r-4 border-secondary text-secondary" : "")}
                                to="/cohorts/graduates">
                                    <Unicons.UilGraduationCap size="14" />
                                    <span className="pl-3">Graduates</span>
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink
                        className={({ isActive }) => "flex items-center p-1 text-xs text-nunito-regular text-primary" + (isActive ? "bg-primary/5 border-r-4 border-secondary text-secondary" : "")}
                        to="/outcomes/employers">
                            <Unicons.UilBuilding size="14" />
                            <span className="pl-3">Employers</span>
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