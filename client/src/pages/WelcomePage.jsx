import React, {useState, useContext, useEffect} from 'react'

import {FaSignOutAlt, FaUserAstronaut, FaExclamation, FaPlus} from 'react-icons/fa'
import UserContext from '../providers/userContext'
import Select from 'react-select'
import api from '../api'

function WelcomePage() {

    const [click,setclick] = useState(false)
    const [loading,setLoading] = useState(true)
    const [sport,setSport] = useState("")
    const [options, setOptions] = useState([])
    const [positions, setPositions] = useState([])
    const [position, setPosition] = useState("")
    const [currPositions, setCurrPositions] = useState([])
    const {loginState, userState} = useContext(UserContext)
    const [loggedIn, setLoggedIn] = loginState
    const [local, setLocal] = useState({country:'',state:''})
    const [data, setData] = useState({ sport: '', position: '', birthdate: '', height: '', weight:'', bio:'', team:'', localization: {state:'',country:''}});
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
    const handleChange = (selected) => {
        
        if(selected !== sport){
            setSport(selected)
            setData({ ...data, sport: selected})
            setCurrPositions([])
            positions.map(position => {
                if(position.value === selected){
                    position.positions.map(val =>{
                        const obj = {
                            value:val,
                            label:val
                        }
                        return setCurrPositions(currPositions => [...currPositions,obj])
                    })
                }
            })
        }
        console.log(sport)
    }
    const handlePositionChange = (selected) => {
        setPosition(selected)
        setData({ ...data, position: selected})
    }
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
    const submit = async() =>{
        setData({...data, localization:local})
        await api.userDetails(user._id,data).then(res =>{
            console.log(res)
        })
    }
    useEffect(() => {
        const setSports = async() =>{
            const info = await api.getSports()
            info.data.map(sport =>{
                const obj = {
                    value:sport.name,
                    label:sport.name
                }
                const pos = {
                    value:sport.name,
                    positions:sport.positions
                }
                console.log(pos)
                setPositions(positions => [...positions, pos])
                setOptions(options => [...options, obj])
            })
            setLoading(false)
        }
        if(options.length === 0){
            setSports()
        }
    }, [sport, options])

    if(!loading){
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
                                        <p className="w-50 centered text-center">Selecciona el deporte que practicas</p>
                                
                                        <Select styles={styles} placeholder="Seleccionar" options={options} noOptionsMessage={()=> "No se encontraron Deportes"} onChange={(option) => (handleChange(option.value))}/>
                                    </div>
                                </div>
                                <br/>
                                <div className="row my-auto align-items-center">
                                    <div className="centered w-50">
                                        <p className="w-50 centered text-center">Selecciona la posición en la que juegas</p>
                                        { currPositions!=null ? <Select styles={styles} placeholder="Seleccionar" options={currPositions} noOptionsMessage={()=> "No se encontraron posiciones"} onChange={(option) => (handlePositionChange(option.value))}/> : <p>Seleccione un deporte</p>}
                                        
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className="row my-auto align-items-center">
                                    
                                    <div className="col-3 col-md-4">
                                        <span className="svg-container"><FaPlus className="svg blue" size={45} /></span>
                                    </div>
                                    <div className="col-9 col-md-8 py-5">
                                        <h2 className="webapp-card-title h-100">Información Adicional</h2>
                                    </div>
                                </div>
                                <div className="row my-auto w-50 align-items-center centered">
                                    <div className="col">
                                        <label className="mx-4 " htmlFor="altura">Ingresa tu fecha de nacimiento</label>
                                    </div>
                                    <div className="col">
                                        <input className="register-form-input w-100" id="birthdate" type="date" placeholder="Fecha de Nacimiento" onChange={(e)=> setData({ ...data, birthdate: e.target.value})}/>
                                    </div>  
                                </div>
                                <div className="row my-auto w-50 align-items-center centered">
                                    <div className="col">
                                        <label className="mx-4 " htmlFor="altura">Ingresa tu altura</label>
                                    </div>
                                    <div className="col">
                                        <input className="register-form-input w-100" id="altura" type="text" placeholder="Altura (mts)" onChange={(e)=> setData({ ...data, height: e.target.value})}/>
                                    </div>  
                                </div>
                                <div className="row my-auto w-50 align-items-center centered">
                                    <div className="col">
                                        <label className="mx-4 " htmlFor="altura">Ingresa tu peso</label>
                                    </div>
                                    <div className="col">
                                        <input className="register-form-input w-100" id="peso" type="text" placeholder="Peso (kg)" onChange={(e)=> setData({ ...data, weight: e.target.value})}/>
                                    </div>
                                </div>
                                <div className="row my-auto w-50 align-items-center centered">
                                    <div className="col">
                                        <label className="mx-4 " htmlFor="country">País</label>
                                    </div>
                                    <div className="col">
                                        <input className="register-form-input w-100" id="country" type="text" placeholder="Peso (kg)" onChange={(e)=> setLocal({ ...local, country: e.target.value})}/>
                                    </div>
                                </div>
                                <div className="row my-auto w-50 align-items-center centered">
                                    <div className="col">
                                        <label className="mx-4 " htmlFor="state">Estado</label>
                                    </div>
                                    <div className="col">
                                        <input className="register-form-input w-100" id="state" type="text" placeholder="Peso (kg)" onChange={(e)=> setLocal({ ...local, state: e.target.value})}/>
                                    </div>
                                </div>
                                <div className="row my-auto w-50 align-items-center centered">
                                    <div className="col">
                                        <label className="mx-4 " htmlFor="altura">Bio</label>
                                    </div>
                                    <div className="col">
                                        <textarea className="register-form-input w-100" id="altura" type="text" placeholder="Cuenta un poco sobre ti" onChange={(e)=> setData({ ...data, bio: e.target.value})}/>
                                    </div>
                                </div>
                                <div className="row my-3 w-25 align-items-center centered" >
                                    <button className="w-100 contact-button" onClick={submit}>Terminar Registro</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }else{
        return <p>Loading</p>
    }

}

export default WelcomePage
