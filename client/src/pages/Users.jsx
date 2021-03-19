import React, {useState, useEffect, useContext} from 'react'
import {FaSearch, FaUsers} from 'react-icons/fa'
import Select from 'react-select'
import ProfilePic from '../assets/img/ProfilePick.png'
import api from '../api'
import UserContext from '../providers/userContext'

function Users() {
    
    const formatOptions = [
        { value: 'es', label: 'Menor a Mayor' },
        { value: 'en', label: 'Mayor a Menor' }
    ];
    const userOptions = [
        { value: 'all', label: 'Todos' },
        { value: 'atletas', label: 'Atletas' },
        {value: 'entrenadores', label: 'Entrenadores'}
    ];
    const styles = {
        control: (provided) => ({
            ...provided,
            border: "1px solid rgb(243 243 243)",
            height: "20px",
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
        const [loading, setLoading] = useState(true)
        const [users,setUsers] = useState(null)
        const {userState} = useContext(UserContext)
        const [user, setUser] = userState

        useEffect(() => {
            const getUsers = async () =>{
                const users = await api.getUsers(user._id)
                console.log(users.data)
                setUsers(users.data)
                setLoading(false)
            }
            getUsers()
        }, []);

    return (
        <div className="mt-4">
            <div className="webapp-card">
                <div className="row my-auto align-items-center">
                    <div className="col-3 col-md-1">
                        <span className="svg-container"><FaSearch className="svg bg-blue white p-1" size={45} /></span>
                    </div>
                    <div className="col"><h2 className="webapp-card-title h-100">Búsqueda Avanzada</h2></div>
                </div>
                <hr/>
                <div className="row px-4">
                    <h4>Criterios de Búsqueda</h4>
                    <div className="row my-2 ">
                        <div className="col-12 col-md-4">
                            <div className="row  my-1">
                                <div className="col-12 col-md-6 mb-2">
                                    Edad:
                                </div>
                                <div className="col-12 col-md-6">
                                    <input className="w-100 statform_input" type="text"/>
                                </div>
                            </div>  
                            <div className="row  my-1">
                                <div className="col-12 col-md-6 mb-2">
                                    Peso:
                                </div>
                                <div className="col-12 col-md-6">
                                    <input className="w-100 statform_input" type="text"/>
                                </div>
                            </div> 
                            <div className="row  my-1">
                                <div className="col-12 col-md-6 mb-2">
                                    Altura:
                                </div>
                                <div className="col-12 col-md-6">
                                    <input className="w-100 statform_input" type="text"/>
                                </div>
                            </div>                           
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="row  my-1">
                                <div className="col-12 col-md-6 mb-2">
                                    Deporte:
                                </div>
                                <div className="col-12 col-md-6">
                                    <input className="w-100 statform_input" type="text"/>
                                </div>
                            </div> 
                            <div className="row  my-1">
                                <div className="col-12 col-md-6 mb-2">
                                    Posición:
                                </div>
                                <div className="col-12 col-md-6">
                                    <input className="w-100 statform_input" type="text"/>
                                </div>
                            </div> 
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="row  my-1">
                                <div className="col-12 col-md-6 mb-2">
                                    Prueba:
                                </div>
                                <div className="col-12 col-md-6">
                                    <input className="w-100 statform_input" type="text"/>
                                </div>
                            </div> 
                            <div className="row  my-1">
                                <div className="col-12 col-md-6 mb-2">
                                    Organizar Resultados de:
                                </div>
                                <div className="col-12 col-md-6">
                                    <Select styles={styles} className="w-100" id="playerAmountSelect" placeholder="Seleccionar" options={formatOptions} />
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                
            </div>
            <br/>
            <div className="webapp-card">
                <div className="row my-auto align-items-center">
                    <div className="col-3 col-md-1">
                        <span className="svg-container"><FaUsers className="svg bg-blue white" size={45} /></span>
                    </div>
                    <div className="col"><h2 className="webapp-card-title h-100">Usuarios</h2></div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-2">
                            Buscar por Nombre:
                        </div>
                        <div className="col-12 col-md-6">
                            <input className="w-100 statform_input" type="text"/>
                        </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row  my-1">
                                <div className="col-12 col-md-6 mb-2">
                                    <p className="my-auto">
                                        Tipo de Usuario:
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <Select styles={styles} className="w-100" id="playerAmountSelect" placeholder="Seleccionar" options={userOptions} />
                                </div>
                            </div> 
                    </div>
                </div>
                <hr/>

                <div className="row px-5 m-0">
                    <div className="col-md-6 col-12 my-3">
                        <div className="row">
                            <div className="col-md-5 col-12">
                                <img className="userSearchPic" src={ProfilePic} width="150" height="150" alt=""/>
                            </div>
                            <div className="col-md-7 col-12">
                                    <h5>Nombre de Usuario</h5>
                                    <div className="row mb-2">
                                        <div className="col">
                                            <small>Seguidores: XX </small>
                                        </div>
                                        <div className="col">
                                            <small>Siguiendo: XX</small>
                                        </div>
                                    </div>
                                    <p className="mb-2">Equipo: XXXXXXXX</p>
                                    <p className="mb-2">Posición: XXXXXXX</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 my-3">
                        <div className="row">
                            <div className="col-md-5 col-12">
                                <img className="userSearchPic" src={ProfilePic} width="150" height="150" alt=""/>
                            </div>
                            <div className="col-md-7 col-12">
                                    <h5>Nombre de Usuario</h5>
                                    <div className="row mb-2">
                                        <div className="col">
                                            <small>Seguidores: XX </small>
                                        </div>
                                        <div className="col">
                                            <small>Siguiendo: XX</small>
                                        </div>
                                    </div>
                                    <p className="mb-2">Equipo: XXXXXXXX</p>
                                    <p className="mb-2">Posición: XXXXXXX</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 my-3">
                        <div className="row">
                            <div className="col-md-5 col-12">
                                <img className="userSearchPic" src={ProfilePic} width="150" height="150" alt=""/>
                            </div>
                            <div className="col-md-7 col-12">
                                    <h5>Nombre de Usuario</h5>
                                    <div className="row mb-2">
                                        <div className="col">
                                            <small>Seguidores: XX </small>
                                        </div>
                                        <div className="col">
                                            <small>Siguiendo: XX</small>
                                        </div>
                                    </div>
                                    <p className="mb-2">Equipo: XXXXXXXX</p>
                                    <p className="mb-2">Posición: XXXXXXX</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 my-3">
                        <div className="row">
                            <div className="col-md-5 col-12">
                                <img className="userSearchPic" src={ProfilePic} width="150" height="150" alt=""/>
                            </div>
                            <div className="col-md-7 col-12">
                                    <h5>Nombre de Usuario</h5>
                                    <div className="row mb-2">
                                        <div className="col">
                                            <small>Seguidores: XX </small>
                                        </div>
                                        <div className="col">
                                            <small>Siguiendo: XX</small>
                                        </div>
                                    </div>
                                    <p className="mb-2">Equipo: XXXXXXXX</p>
                                    <p className="mb-2">Posición: XXXXXXX</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 my-3">
                        <div className="row">
                            <div className="col-md-5 col-12">
                                <img className="userSearchPic" src={ProfilePic} width="150" height="150" alt=""/>
                            </div>
                            <div className="col-md-7 col-12">
                                    <h5>Nombre de Usuario</h5>
                                    <div className="row mb-2">
                                        <div className="col">
                                            <small>Seguidores: XX </small>
                                        </div>
                                        <div className="col">
                                            <small>Siguiendo: XX</small>
                                        </div>
                                    </div>
                                    <p className="mb-2">Equipo: XXXXXXXX</p>
                                    <p className="mb-2">Posición: XXXXXXX</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 my-3">
                        <div className="row">
                            <div className="col-md-5 col-12">
                                <img className="userSearchPic" src={ProfilePic} width="150" height="150" alt=""/>
                            </div>
                            <div className="col-md-7 col-12">
                                    <h5>Nombre de Usuario</h5>
                                    <div className="row mb-2">
                                        <div className="col">
                                            <small>Seguidores: XX </small>
                                        </div>
                                        <div className="col">
                                            <small>Siguiendo: XX</small>
                                        </div>
                                    </div>
                                    <p className="mb-2">Equipo: XXXXXXXX</p>
                                    <p className="mb-2">Posición: XXXXXXX</p>
                            </div>
                        </div>
                    </div>
                
                </div>
                <hr/>
            </div>
        </ div>
    )
}

export default Users
