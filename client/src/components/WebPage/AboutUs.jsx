import React from 'react'
import img from '../../assets/img/Nosotros.png'
function AboutUs() {
    return (
    <>
        <div className="container-fluid bg-F9F9F9 pt-5 pb-5">
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-sm-3 col-md-5">
                        <img className="img" src={img} alt=""/>
                    </div>
                    <div className="col-sm-9 col-md-7 pl-5">
                        <br/>
                        <h1 className="section-title">Nosotros</h1>
                        <h2 className="section-subtitle">La mejor plataforma para analisis de rendimiento.</h2>
                        <hr/>
                        <div className="container">
                        <p className="section-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat mattis adipiscing purus 
                        ultricies sed. Neque risus viverra eu in imperdiet adipiscing. Augue ornare in viverra arcu ut tristique 
                        amet. Viverra adipiscing libero et sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
                        volutpat mattis adipiscing purus ultricies sed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default AboutUs
