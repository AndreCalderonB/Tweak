import React, {useContext, useState, useEffect} from 'react'
import { Redirect } from 'react-router'
import api from '../api'
import UserContext from '../providers/userContext'
import {WelcomePage} from '../pages/index'


function ProtectedRouteWithLayout(props) {

    const {loginState, userState} = useContext(UserContext)
    const [loggedIn, setLoggedIn] = loginState
    const [user,setUser] = userState
    const[loading, setLoading] = useState(true)

    useEffect(() => {
        const checkSession = async () =>{
            const jwt = await api.getSession();
            if(jwt.data.msg === "Success"){
                console.log("Success")
                setUser(jwt.data.UserInfo)
                api.setSession(jwt.data.newToken, jwt.data.UserInfo._id)
                setLoggedIn(true)
                
            }
            setLoading(false)
        }
        if(loading){
            checkSession()
        }
    });
    if(loading){
        return (
            <div className="pt-4 pb-5">
                Cargando...
            </div>
        )
    }else{
        if(user === null || (loggedIn === false)){ 
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
}

export default ProtectedRouteWithLayout
