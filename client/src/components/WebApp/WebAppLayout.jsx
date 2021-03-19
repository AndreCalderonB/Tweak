import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {FaSearch,FaBars,FaTimes,FaSignOutAlt, FaUserAstronaut, FaHome, FaUserAlt, FaTachometerAlt, FaChartArea, FaCogs} from 'react-icons/fa'
import UserContext from '../../providers/userContext'

function WebAppLayout(props) {
    
    const [click,setclick] = useState(false)
    const {loginState, userState, searchState} = useContext(UserContext)
    const [loggedIn, setLoggedIn] = loginState
    const [userSearchID, setUserSearchID] =  searchState
    const [user] = userState
    const signOut = () => {
        setLoggedIn(false);
    }

    const toggleClick = () =>{
        if(window.innerWidth < 500){
        setclick(!click);
            if(!document.getElementById("sidebar").classList.contains("active")){
                document.getElementById("sidebar").classList.add("active");
            }else{
                document.getElementById("sidebar").classList.remove("active");
            }
        }

    }
    return (
        <div>
            <div className="wrapper">
                <nav id="sidebar" className="pt-3 pl-3 bg-light">
                    <div className="sidebar-header w-100 text-center">
                        <h1 className="bigger_h1">Tweak</h1>
                        
                    </div>
                    <br/>
                   
                    <div className="row w-75 mx-auto search_nav">
                        <div className="col-9">                      
                            <div className="search_wrapper">
                                <input className="input_transparent w-100" type="text" placeholder="Buscar..."/>
                            </div>
                        </div>
                        <div className="col-2"> 
                            <Link className="sidebar-search-btn my-auto" to="/users"><FaSearch className="nav_search_icon" size={15}/></Link>
                        </div>
                    </div>
                        
                   <br/>
                    <ul className="list-unstyled components">
                        <li className="p-2 active">
                            <div className="row">
                                <div className="col-4 my-auto">
                                    <div className="svg-container d-inline">
                                        <FaHome className="svg align-middle mt-1 mb-1 h-100" size={20} />
                                    </div>
                                </div>
                                <div className="col my-auto d-inline">        
                                    <Link className="my-auto d-inline" to="/dashboard" onClick={toggleClick}>Dashboard</Link>
                                </div>
                            </div>
                        </li>
                        <li className="p-2">
                            <div className="row">
                                <div className="col-4 my-auto">
                                    <div className="svg-container d-inline">
                                        <FaUserAlt className="svg align-middle mt-1 mb-1 h-100" size={20} />
                                    </div>
                                </div>
                                <div className="col-4 my-auto d-inline">        
                                    <Link to={{ pathname:'/profile', id:user._id }} onClick={()=>{toggleClick(); setUserSearchID(user._id)}}>Perfil</Link>
                                </div>
                            </div>
                        </li>
                        <li className="p-2">
                            <div className="row">
                                <div className="col-4 my-auto">
                                    <div className="svg-container d-inline">
                                        <FaTachometerAlt className="svg align-middle mt-1 mb-1 h-100" size={20} />
                                    </div>
                                </div>
                                <div className="col my-auto d-inline">        
                                    <Link to="/tests" onClick={toggleClick}>Pruebas</Link>
                                </div>
                            </div>
                            
                        </li>
                        <li className="p-2">
                            <div className="row">
                                <div className="col-4 my-auto">
                                    <div className="svg-container d-inline">
                                        <FaChartArea className="svg align-middle mt-1 mb-1 h-100" size={20} />
                                    </div>
                                </div>
                                <div className="col my-auto d-inline">        
                                    <Link to="/statistics" onClick={toggleClick}>Estadísticas</Link>
                                </div>
                            </div>
                        </li>
                        <li className="p-2">
                            <div className="row">
                                <div className="col-4 my-auto">
                                    <div className="svg-container d-inline">
                                        <FaCogs className="svg align-middle mt-1 mb-1 h-100" size={20} />
                                    </div>
                                </div>
                                <div className="col my-auto d-inline">        
                                    <Link to="/settings" onClick={toggleClick}>Configuración</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div id="content" className="w-100 webapp-content">
                    <div className="webapp-top">
                    <div className="container-fluid h-100">
                        <div className="row h-100">
                            <div className="my-auto col-4 col-md-4 col-lg-4">
                                <button type="button" id="sidebarCollapse" onClick={toggleClick}>
                                    {click ?  <FaTimes size={30}/> : <FaBars size={30}/> } 
                                </button>
                            </div>
                            <div className="my-auto col col-md-3 col-lg-5">
                                <h1 className="ml-auto mr-auto mobile-title mobile-title mb-0">Tweak</h1>
                            </div>
                            <div className="userInfo col-s-0 col-md-5 col-lg-3 ml-auto my-auto d-inline justify-content-end p-0"> 
                                <FaUserAstronaut className="icon d-inline align-self-end mx-2" size={20}/>
                                <p className="top-bar-user d-inline align-self-end mx-2">{user.name}</p>
                                    <FaSignOutAlt onClick={signOut} className="icon d-inline align-self-end mx-2" size={20}/>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-3 pb-5">
                    {props.children}
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default WebAppLayout
