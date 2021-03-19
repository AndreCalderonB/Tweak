import React, {useContext} from 'react'
import { Redirect } from 'react-router'
import api from '../api'
import UserContext from '../providers/userContext'

function ProtectedRouteWithLayout(props) {

    const {loginState} = useContext(UserContext)
    const [loggedIn] = loginState

    const jwt = api.getSession();
    if(jwt === null || (loggedIn === false)){
        return <Redirect to="/login" />
    }else{
        return (
            <props.layout>
                <props.component />
            </props.layout>
        )
    }

}

export default ProtectedRouteWithLayout
