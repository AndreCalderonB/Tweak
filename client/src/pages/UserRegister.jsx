import {React, useState} from 'react'
import api from '../api'
function UserRegister() {
    const [postData, setPostData] = useState({ name: '', email: '', password: '', password2: ''});


    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password, password2 } = postData;
        const payload = {name, email, password, password2}
        console.log(payload)
        await api.registerUser(payload).then(res=>{
            window.alert('Consulta tu correo para activar tu cuenta :)')
        })
        
    }
    return (
        <div className="container-fluid w-100 h-75 login-BG  d-flex">
            <div className="admin-card align-self-center p-3 pt-5">
                <h1 className="centered colorB font-weight-bolder" >Crear una Cuenta</h1>
                <br/>
                <hr className="login-spacing"/>
                    <form autoComplete="off" onSubmit={handleSubmit} method="POST">
                        <div className="row centered">
                            <div className="col-lg-6 col-md-12 col-12 py-3">
                                <input className="register-form-input centered w-100" type="name" name="name" variant="outlined" placeholder="Nombre"  value={postData.name} onChange={(e)=> setPostData({ ...postData, name: e.target.value})}/>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12 py-3">
                                <input className="register-form-input centered w-100" type="email" name="email" variant="outlined" placeholder="Correo"  value={postData.email} onChange={(e)=> setPostData({ ...postData, email: e.target.value})}/>
                            </div>
                        </div>
                        <div className="row centered">
                            <div className="col-lg-6 col-md-12 col-12 py-3">
                                <input className="register-form-input centered w-100" name="password" type="password" variant="outlined" placeholder="Contraseña"  value={postData.password} onChange={(e)=> setPostData({ ...postData, password: e.target.value})}/>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12 py-3">
                                <input className="register-form-input centered w-100" name="password2" type="password" variant="outlined" placeholder="Confirmar Contraseña"  value={postData.password2} onChange={(e)=> setPostData({ ...postData, password2: e.target.value})}/>
                            </div>
                        </div>
                        <div className="row py-3">
                            <button className="contact-button centered" type="submit">Registrarme</button>
                        </div>
                            
                            {/*
                            <input type="text" name="lastname" variant="outlined" placeholder="Apellido"  value={postData.lastname} onChange={(e)=> setPostData({ ...postData, lastname: e.target.value})}/>
                            <input type="text" name="username" variant="outlined" placeholder="Nombre de Usuario"  value={postData.username} onChange={(e)=> setPostData({ ...postData, username: e.target.value})}/>

                                Input para imagen
                                <FileBase 
                                    type="file" 
                                    name="img"
                                    multiple={false}  
                                    onDone={({base64}) => setPostData({...postData, img: base64 })}    
                                />
                            */}
                    </form>
            </div>
        </div>
    )
}

export default UserRegister
