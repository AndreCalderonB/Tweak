import React, {useEffect, useState} from 'react'
import ProfileCard from '../components/WebApp/ProfileCard'
import {useParams} from 'react-router-dom'
import Bio from '../components/WebApp/BioCard'
import api from '../api'
function Profile(props) {

    const[loading, setLoading] = useState(true)

    const[userInfo, setUserInfo] = useState(null)
    const payload = props.id
    


    useEffect(() => {
        const getUser = async () =>{
            const user = await api.showUser(payload)
            console.log(user.data)
            setUserInfo(user.data)
            setLoading(false)
        }
        getUser()
    },[payload]);
    if (loading){
        return (
            <div className="pt-4 pb-5">
                Cargando...
            </div>
        )
    }else{
        return (
            <div className="pt-4 pb-5">
                <ProfileCard name={userInfo.name} email={userInfo.email} />
                <br/>
                {/*
                <Bio />
                */}
            </div>
        )
    }

}

export default Profile
