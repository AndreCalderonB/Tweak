import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {FaBars,FaTimes} from 'react-icons/fa'

function Navigation() {


    const [click,setClick] = useState(true)



    const [collapsed,setCollapse] = useState(false)

    

    const handleClick = () => {
        setCollapse(!collapsed)
        setClick(!click)
    }

    return (
        
            <nav className=" navbar navbar-expand-lg fixed-top bg-light">
                <div className="container-fluid">
                <Link className="navbar-brand nav-title ml-5 mr-5" to="/">
                        <h1 className="font-weight-bold">Tweak</h1>
                </Link> 
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <div  onClick={handleClick}>
                                {click ? <FaBars height="70px"/> : <FaTimes height="70px"/>} 
                        </div>
                </button>
                    <div className={(click ? 'collapse' : '') + ' navbar-collapse pt-2'} id="navbar">
                        
                        <ul className="navbar-nav">
                            <li className="nav-item pl-2 pr-2">
                                <Link  onClick={handleClick} className="navbar-item" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item pl-2 pr-2">
                                <Link  onClick={handleClick} className="navbar-item" to="/about-us">Nosotros</Link>
                            </li>
                            <li className="nav-item pl-2 pr-2">
                                <Link  onClick={handleClick} className="navbar-item" to="/contact">Contacto</Link>
                            </li>
                        </ul> 
                        <ul className={`navbar-nav ml-auto ${click ? "nav-menu active" : 'nav-menu'}`}>
                            <li className="nav-item pl-2 pr-2">
                                <Link  onClick={handleClick} className="navbar-item login-btn" to="/login">Ingresar</Link>
                            </li>
                        </ul>    
                        {/*                        
                        <div  onClick={handleClick}>
                                {click ? <FaBars height="70px"/> : <FaTimes height="70px"/>} 
                        </div>
                        */}

                    </div>
                </div>
                
            </nav>
    
        
    )
    
}

export default Navigation
