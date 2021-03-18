import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
    return (
       
            <div className="container-fluid pt-5 pb-4 footer">
                
                    <div className="row">
                        <div className="col-md-6">
                            <div className="container">
                                <h2 className="font-weight-bold footer-title">Tweak</h2>
                                <hr/>
                                <p className="pl-2 pr-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dui porta semper 
                                bibendum. Arcu at laoreet id porttitor viverra.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="container">
                                <h4 className="footer-subtitle" >Navegación</h4>
                                <ul className="footer-nav">
                                    <li className="nav-item pl-2 pr-2">
                                        <Link className="navbar-item" to="/">Inicio</Link>
                                    </li>
                                    <li className="nav-item pl-2 pr-2">
                                        <Link className="navbar-item" to="/about-us">Nosotros</Link>
                                    </li>
                                    <li className="nav-item pl-2 pr-2">
                                        <Link className="navbar-item" to="/contact">Contacto</Link>
                                    </li>
                                </ul> 
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="container">
                                <h3 className="footer-subtitle">Contacto</h3>
                                <a className="pl-2 pr-2" href="mailto:contacto@tweak.com">contacto@tweakweb.com</a>
                                <br/>
                                <a className="pl-2 pr-2" href="tel:+524495578846">449 557 8846</a>
                            </div>
                        </div>
                    </div>
                
            </div>
        
    )
}

export default Footer
