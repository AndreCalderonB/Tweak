import React, {useContext} from 'react'
import { Redirect } from 'react-router'
import api from '../api'
import UserContext from '../providers/userContext'
import {WelcomePage} from '../pages/index'
function ProtectedRouteWithLayout(props) {

    const {loginState, userState} = useContext(UserContext)
    const [loggedIn] = loginState
    const [user] = userState
    console.log(user)
    const jwt = api.getSession();

    if(jwt === null || (loggedIn === false)){
        return <Redirect to="/login" />
    }else{
        if(user.completedRegistration){
            return (
                <props.layout>
                    <props.component />
                </props.layout>
            )
        }else{
            return(
                <WelcomePage />
            )
        }

    }

}

export default ProtectedRouteWithLayout
