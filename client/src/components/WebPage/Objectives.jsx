import React from 'react'
import Img from '../../assets/img/ObjectivesL.png'
import Registra from '../../assets/img/RegistraImg.png'
import Analiza from '../../assets/img/AnalizaImg.png'
import Compara from '../../assets/img/CompareImg.png'
function Objectives() {
    return (
        <>
            <div className="container-fluid pt-5 pb-5 objectives">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-sm-12 col-lg-6 align-self-center">
                            <h1 className="section-title">
                                Objetivo
                            </h1>
                            <h2 className="section-subtitle">"Lo que no se mide, no se puede mejorar"</h2>
                            <h6>- William Thomson Kelvin</h6>
                            <br/>
                            <div className="container">
                                <p className="section-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat mattis adipiscing 
                                purus ultricies sed. Neque risus viverra eu in imperdiet adipiscing. Augue ornare in viverra
                                arcu ut tristique amet.</p>
                            </div>
                            <img className="img" src={Img} alt=""/>
                        </div>
                        <div className="col-sm-12 col-sm-12 col-lg-6 objectivesR pt-3 pb-3 align-self-center">
                            <div className="centered">
                                <div className="col-md-12 p-3">
                                <div className="container-fluid">
                                    <div className="row objectivesBG">
                                        <div className="col-5 col-sm-4 col-md-5 p-0 align-self-center">
                                                <img className="img objectivesImg my-auto" src={Registra} alt=""/>
                                        </div>
                                        <div className="col-7 col-sm-8 col-md-7 align-self-center">
                                            <h2 className="section-subtitle">Registra</h2>
                                            <p className="section-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                        </div>
                                    </div>
                                </div>

                                </div>
                                <div className="col-md-12 p-3">
                                <div className="container-fluid">
                                    <div className="row objectivesBG">
                                            <div className="col-5 col-sm-4 col-md-5 p-0 align-self-center">
                                                <img className="img objectivesImg" src={Analiza} alt=""/>
                                            </div>
                                        
                                            <div className="col-7 col-sm-8 col-md-7 align-self-center">
                                                <h2 className="section-subtitle">Analiza</h2>
                                                <p className="section-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                            </div>

                                    </div>
                                </div>

                                </div>
                                <div className="col-md-12 p-3">
                                    <div className="row objectivesBG">
                                        <div className="col-5 col-sm-4 col-md-5 p-0 align-self-center">
                                            <img className="img objectivesImg" src={Compara} alt=""/>
                                        </div>
                                        <div className="col-7 col-sm-8 col-md-7 align-self-center">
                                            <h2 className="section-subtitle">Compara</h2>
                                            <p className="section-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Objectives
