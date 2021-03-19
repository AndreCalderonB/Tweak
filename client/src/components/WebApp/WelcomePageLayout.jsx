import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {FaSearch,FaBars,FaTimes,FaSignOutAlt, FaUserAstronaut, FaHome, FaUserAlt, FaTachometerAlt, FaChartArea, FaCogs} from 'react-icons/fa'
import UserContext from '../../providers/userContext'

function WelcomePageLayout(props) {
    
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

export default WelcomePageLayout
