import React, {useContext} from 'react'
import { Redirect } from 'react-router'
import api from '../api'
import UserContext from '../providers/userContext'

function ProtectedRouteWithLayout(props) {

    const {loginState} = useContext(UserContext)
    const [loggedIn] = loginState

    const jwt = api.getSession();
<<<<<<< HEAD
    if(jwt === null || (loggedIn === false)){
=======

    if(jwt === null){
>>>>>>> 53f62a65fe1551dc38909bf727e64d0bb12621a0
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
