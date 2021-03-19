import React from 'react'
import { Redirect } from 'react-router'
import api from '../api'

function ProtectedRouteWithLayout(props) {

    const jwt = api.getSession();

    if(jwt != null){
        return <Redirect to="/login" />
    }
    
    return (
        <props.layout>
            <props.component />
        </props.layout>
    )
    

}

export default ProtectedRouteWithLayout
