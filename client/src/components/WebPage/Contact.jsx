import React from 'react'
import Image from '../../assets/img/Contact.png'
function Contact() {
    return (
        <>
        <div className="container-fluid bg-F9F9F9 pt-3 pb-3">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-7  pr-5">
                        <h1 className="section-title">Contacto</h1>
                        <h2 className="section-subtitle">¡Contáctanos!</h2>
                        <hr/>
                        <form>
                        <div className="row input-row">
                            <div className="col">
                                <input className="contact-form-input w-100 h-100" name="name" type="text" placeholder="Nombre"/>
                            </div>
                            <div className="col">
                                <input className="contact-form-input w-100 h-100" name="lastname" type="text" placeholder="Apellido"/>
                            </div>
                        </div>
                        <div className="row input-row">
                            <div className="col">
                                <input className="contact-form-input w-100 h-100" name="email" type="text" placeholder="Correo Electrónico"/>
                            </div>
                        </div>
                        <div className="row input-row">
                            <div className="col">
                                <input className="contact-form-input w-100" name="affair" type="text" placeholder="Asunto"/>
                            </div>
                        </div>
                        <div className="row input-row">
                            <div className="col">
                                <textarea className="contact-form-input msg w-100" name="text" type="text" placeholder="Mensaje"/>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col w-100">
                            <button className="float-right contact-button">Enviar</button>
                        </div>

                        </div>
                        </form>
                    </div>
                    <div className="col-md-5 pt-5">
                        <img className="img" src={Image} alt=""/>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Contact
