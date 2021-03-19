import React from 'react'
import { FaUserCircle, FaInstagramSquare, FaFacebookSquare, FaTwitterSquare, FaExclamationCircle } from 'react-icons/fa'
import ProfilePic from '../../assets/img/UserImg.png'
function ProfileCard(props) {
    return (
        <div className="webapp-card">
            <div className="row my-auto align-items-center">
                <div className="col-3 col-md-1">
                    <span className="svg-container"><FaUserCircle className="svg blue" size={45} /></span>
                </div>
                <div className="col-6 col-md-10"><h2 className="webapp-card-title h-100">Perfil</h2></div>
                <div className="col-3 col-md-1">
                    <button className="search-button">Seguir</button>
                </div>
                
            </div>
            <hr/>
            <div className="row my-3">
                <div className="col-12 col-md-12 col-lg-5 col-xl">
                    <img src={ProfilePic} alt=""/>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl">
                    <h3>{props.name}</h3>
                    <div className="row">
                        <div className="col">
                            Seguidores: xx
                        </div>
                        <div className="col">
                            Siguiendo: xx
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Localización
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Fecha de Nacimiento
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Altura : ----
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Peso : ----
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Deporte: xxxx
                        </div>
                    </div>
                    <div className="row pl-2">
                        <div className="col-12 small">
                            Equipo: xxxx
                        </div>
                        <div className="col-12 small">
                            Posición: xxxx
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 col-xl">
                    <p>{ props.email }</p>
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
                    <div className="row py-3">
                        <button className="search-button" >Contactar</button>
                    </div>
                    <div className="row  report">
                        <div className="offset-10 col-2">
                            <FaExclamationCircle className="blue" size={30} />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProfileCard
