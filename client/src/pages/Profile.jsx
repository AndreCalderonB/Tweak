import React, {useEffect, useState} from 'react'
import ProfileCard from '../components/WebApp/ProfileCard'
import Bio from '../components/WebApp/BioCard'
import api from '../api'
function Profile(props) {

    const[loading, setLoading] = useState(true)
    const[userInfo, setUserInfo] = useState(null)
    const[userSport, setUserSport] = useState("")
    const payload = props.id
    
    useEffect(() => {
        const getUser = async() =>{
            await api.showUser(payload).then(res => {
                console.log(res.data)
                setUserInfo(res.data.userInfo)
                setUserSport(res.data.sportName)
                setLoading(false)
            })

        }
        getUser()
        
    },[payload])

    if (loading){
        return (
            <div className="pt-4 pb-5">
                Cargando...
            </div>
        )
    }else{
        return (
            <div className="pt-4 pb-5">
                <ProfileCard userInfo={userInfo} sport={userSport} />
                <br/>
                <Bio userInfo={userInfo} />
            </div>
        )
    }

}

export default Profile
