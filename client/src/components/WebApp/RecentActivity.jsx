import React from 'react'
import {FaExclamationCircle} from 'react-icons/fa'
import UserCard from './RecentActivityUser'
function RecentActivity() {
    return (
        <>
            <div className="webapp-card">
                <div className="row my-auto align-items-center">
                    <div className="col-3 col-md-1">
                        <span className="svg-container"><FaExclamationCircle className="svg blue" size={45} /></span>
                    </div>
                    <div className="col"><h2 className="webapp-card-title h-100">Actividad Reciente</h2></div>
                    
                </div>
                <hr/>
                <div className="row py-3">
                    <div className="col-12 col-md-4">
                        <UserCard />
                    </div>
                    <div className="col-12 col-md-4">
                        <UserCard />
                    </div>
                    <div className="col-12 col-md-4">
                        <UserCard />
                    </div>
                        
                      
                </div>
            </div>
        </>
    )
}

export default RecentActivity
