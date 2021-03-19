import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {FaSearch,FaBars,FaTimes,FaSignOutAlt, FaUserAstronaut, FaHome, FaUserAlt, FaTachometerAlt, FaChartArea, FaCogs, FaExclamation} from 'react-icons/fa'
import UserContext from '../providers/userContext'
import Select from 'react-select'

function WelcomePage() {

    const [click,setclick] = useState(false)
    const [sport,setSport] = useState("")
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
    const players = [
        {value: 'futbol', label: 'Futbol'},
        {value: 'americano', label: 'Futbol Americano'},
        {value: 'natacion', label: 'Natacion'},
    ]
    const handleChange = (selected) => {
        setSport(selected)
        
    }
    console.log(sport)
    const styles = {
        control: (provided) => ({
            ...provided,
            border: "1px solid rgb(243 243 243)",
            borderBottom: "2px solid rgb(243 243 243)",
            backgroundColor: "rgb(248 248 248)",
          }),
          menu: (provided) => ({
            ...provided,
            border: "0px",
            backgroundColor: "rgb(248 248 248)",
          }),
          multiValue: (provided) => ({
            ...provided,
            backgroundColor: "rgb(4 138 212)",
            color: "White",
            marginRight: 10,
            borderRadius: 8,
            padding: "1px 6px",
          }),
          multiValueLabel: (provided) => ({
            ...provided,
            color: "white",
          }),
          multiValueRemove: (provided) => ({
            ...provided,
            ':hover': {
                backgroundColor: "rgb(4 138 212)",
                color: "white",
            },

          }),
    }
    return (
        <div>
            <div className="wrapper">
                <div id="content" className="w-100 webapp-content">
                    <div className="webapp-top">
                    <div className="container-fluid h-100">
                        <div className="row h-100">
                            <div className="my-auto col col-md-3 col-lg-5">
                                <h1 className="ml-auto white mr-auto mb-0">Tweak</h1>
                            </div>
                            <div className="userInfo col-s-0 col-md-5 col-lg-3 ml-auto my-auto d-inline justify-content-end p-0"> 
                                
                                <FaUserAstronaut className="icon d-inline align-self-end mx-2" size={20}/>
                                <p className="top-bar-user d-inline align-self-end mx-2">{user.name}</p>
                                    <FaSignOutAlt onClick={signOut} className="icon d-inline align-self-end mx-2" size={20}/>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-3 pt-5 pb-5 h-100">
                    <div className="webapp-card">
                        <div className="row my-auto align-items-center">
                            <div className="col py-4">
                                <h2 className="webapp-card-title h-100 centered">¡Bienvenido!</h2>
                                <br/>
                                <p className="w-50 centered text-center">Gracias por unirte a nuestra comunidad, nos 
                                da mucho gusto que estés con nosotros</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="row my-auto align-items-center">
                            
                                <div className="col-3 col-md-4">
                                    <span className="svg-container"><FaExclamation className="svg blue" size={45} /></span>
                                </div>
                                <div className="col-9 col-md-8 py-5">
                                    <h2 className="webapp-card-title h-100">Información Importante</h2>
                                    
                                </div>
                        </div>
                        <div className="row">
                            <p className="w-50 centered text-center">Esta información es crucial para que puedas usar la aplicación</p>
                        </div>
                        <div className="row my-auto align-items-center">
                        
                            <div className="centered w-50">
                                <Select styles={styles} placeholder="Seleccionar" options={players} noOptionsMessage={()=> "No se encontraron Deportes"} onChange={(option) => (handleChange(option.value))}/>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default WelcomePage
