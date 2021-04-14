import React, {useContext} from 'react'
import { FaUserCircle, FaInstagramSquare, FaFacebookSquare, FaTwitterSquare, FaExclamationCircle } from 'react-icons/fa'
import api from '../../api'
import ProfilePic from '../../assets/img/UserImg.png'
import UserContext from '../../providers/userContext'

function ProfileCard(props) {
    
    const {userState} = useContext(UserContext)
    const [user] = userState
    
    const followUser = (follower, followed) => {
        api.follow(follower, followed).then(res => {
            console.log(res)
        })
    }
    
    return (
        <div className="webapp-card">
            <div className="row my-auto align-items-center">
                <div className="col-3 col-md-1">
                    <span className="svg-container"><FaUserCircle className="svg blue" size={45} /></span>
                </div>
                <div className="col-4 col-md-8"><h2 className="webapp-card-title h-100">Perfil</h2></div>
                <div className="col-5 col-md-3">
                
                    {user._id === props.userInfo._id ? 
                    null: 
                    (user.following.length === 0) ?
                    (<button className="search-button" onClick={() => followUser(user._id,props.userInfo._id)}>{user.following}</button>) :
                    (user.following.includes(props.userInfo._id)) ?
                    (<button className="search-button" onClick={() => console.log('Unfollow')}>Dejar de Seguir</button>):
                    (<button className="search-button" onClick={() => followUser(user._id,props.userInfo._id)}>{user.following}</button>)
                    }
                </div>
                
            </div>
            <hr/>
            <div className="row my-3">
                <div className="col-12  col-md-12 col-lg-5 col-xl">
                    <img src={ProfilePic} alt=""/>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl">
                    <h3>{props.userInfo.name}</h3>
                    <div className="row">
                        <div className="col">
                            Seguidores: {props.userInfo.followers.length}
                        </div>
                        <div className="col">
                            Siguiendo: {props.userInfo.following.length}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {props.userInfo.details.localization.state}, {props.userInfo.details.localization.country}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Fecha de Nacimiento {(props.userInfo.details.birthdate)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Altura : {props.userInfo.details.height} mts
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Peso : {props.userInfo.details.weight} kg
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Deporte: {props.sport}
                        </div>
                    </div>
                    <div className="row pl-2">
                        {props.userInfo.details.team && <div className="col-12 small"> Equipo: xxxx </div>}

                        <div className="col-12 small">
                            Posición: {props.userInfo.details.position}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl">
                    <p>{ props.userInfo.email }</p>
                    <div className="row">
                        <div className="col-1 mr-1 p-0 d-inline">
                            <FaInstagramSquare className="blue" size={30}/ >
                            
                        </div>
                        <div className="col-1 p-0 mx-1">
                            <FaFacebookSquare className="blue" size={30}/ >
                        </div>
                        <div className="col-1 p-0 mx-1">
                            <FaTwitterSquare className="blue" size={30}/ >
                        </div>
                    </div>
                    {user._id !== props.userInfo._id ?
                    <div>
                        <div className="row py-3">
                            <button className="search-button" >Contactar</button>
                        </div>
                        <div className="row  report">
                            <div className="offset-10 col-2">
                                <FaExclamationCircle className="blue" size={30} />
                            </div>
                        </div>
                    </div>
                    : null}
                </div>
            </div>
            
        </div>
    )
}

export default ProfileCard
