import React from 'react'
import RecentActivity from '../components/WebApp/RecentActivity'
import LatestTests from '../components/WebApp//LatestTests'
import Stats from '../components/WebApp/MyStats'
import api from '../api'
import { Redirect } from 'react-router'
function Dashboard() {

    return (
        <div className="pt-4">
            <RecentActivity />
            <br/>
            <LatestTests />
            <br/>
            <Stats />
        </div>
    )
}

export default Dashboard
