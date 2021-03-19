import React, {useState, useContext} from 'react'
import {Link, Redirect} from 'react-router-dom'
import api from '../api'
import UserContext from '../providers/userContext'

function Login() {

    const {loginState, userState} = useContext(UserContext);
    const [loggedIn, setLoggedIn] = loginState;
    const [user,setUser] = userState;
    const [postData, setPostData] = useState({ email: '', password: ''});

    const handleSubmit = async(e) => {

        e.preventDefault();
        const {email, password } = postData;
        const payload = {email, password }

        await api.userLogin(payload).then(res=>{
            api.setSession(res.data.token);
            setUser(res.data.UserInfo)
            
        })
        setLoggedIn(true)
    }

    if(loggedIn){
        return <Redirect to="/dashboard" />
    }else{
        return (
        
            <div className="container-fluid w-100 h-75 login-BG  d-flex">
    
                <div className="admin-card align-self-center">
                    <h1 className="centered colorB font-weight-bolder" >Login</h1>
                    <br/>
                    <form onSubmit={handleSubmit} method="POST">
                        <div className="row input-row">
                            <input type="email" id="email" name="email" className="contact-form-input centered" placeholder="Correo" value={postData.email} onChange={(e)=> setPostData({ ...postData, email: e.target.value})}/>
                        </div>
                        <br/>
                        <div className="row input-row">
                            <input type="password" id="password" name="password" className="contact-form-input centered" placeholder="Contraseña" value={postData.password} onChange={(e)=> setPostData({ ...postData, password: e.target.value})} />
                        </div>
                        <br/>
                        <div className="row input-row">
                            <button type="submit" className="centered contact-button">Ingresar</button>
                        </div>
                        <hr className="login-spacing"/>
                        <div className="row">
                            <a className="login-link centered" href="/">Olvidé mi contraseña</a>
                        </div>
                        <div className="row">
                            <Link className="login-link centered" to="/register">Registrarme</Link>
                        </div>
                       
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
