import React from 'react'
import RecentActivity from '../components/WebApp/RecentActivity'
import LatestTests from '../components/WebApp//LatestTests'
import Stats from '../components/WebApp/MyStats'
import api from '../api'
import { Redirect } from 'react-router'
function Dashboard() {

    const jwt = api.getSession();
    console.log(jwt);
    if(jwt != null){
        return (
            <div className="pt-4">
                <RecentActivity />
                <br/>
                <LatestTests />
                <br/>
                <Stats />
            </div>
        )
    }else{
        return <Redirect to="/login" />
    }
}

export default Dashboard
