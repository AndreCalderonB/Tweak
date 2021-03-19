import React from 'react'
import Highlights from './Highlights'
import {FaUsers, FaTrophy} from 'react-icons/fa'
import MultiLineChart from './MultiLineChart'
import TestImg from '../../assets/img/TestImg.png'
import CoachImg from '../../assets/img/CoachImg.png'

function BioCard() {
    return (
        <div className="webapp-card">
            <div className="row align-items-center ml-0">
                <div className="col-12 col-md-12"><h2 className=" h-100">Entrenadores</h2></div>
                <div className="row px-5 py-3">
                    <div className="col-12 col-md-4 p-0">
                        <div className="row p-0">
                            <div className="col-5">
                                <img className="testimg" src={CoachImg} alt=""/>
                            </div>
                            <div className="col-7 p-0">
                                <h5>Nombre de Coach</h5>
                                <p className=" pl-2">Entrenador</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 p-0">
                        <div className="row p-0">
                            <div className="col-5">
                                <img className="testimg" src={CoachImg} alt=""/>
                            </div>
                            <div className="col-7 p-0">
                                <h5>Nombre de Coach</h5>
                                <p className=" pl-2">Entrenador Defensivo</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <hr/>
            <div className="row align-items-center ml-0">
                <div className="col-12 col-md-12"><h2 className=" h-100">Nutrición</h2></div>
                <div className="row px-5 py-3">
                    <div className="col-12 col-md-4 p-0">
                        <div className="row p-0">
                            <div className="col-5">
                                <img className="testimg" src={CoachImg} alt=""/>
                            </div>
                            <div className="col-7 p-0">
                                <h5>Nombre de Nutriólogo</h5>
                                <p className=" pl-2">Nutriólogo</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <hr/>
            <div className="row my-auto align-items-center ml-0">
                <div className="col-12 col-md-12">
                    <h2 className="h-100">Biografía</h2>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="container p-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec nec cursus cras amet, quam auctor tortor imperdiet. Tortor felis eget gravida ut a, nisi, lectus. Nullam orci donec tincidunt turpis ligula morbi ultrices ut sagittis. Nulla eleifend ultricies enim consectetur.
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pr-0">
                        <h3 className="webapp-section-title">Highlights</h3>
                        <Highlights />
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row  align-items-center ml-0 py-3 ">
                <div className="row">
                    <div className="col-12 col-md-12 pb-4">
                        <div className="col-6 col-md-10"><h2 className=" h-100">Nutrición</h2></div>
                    </div>
                </div>

                <div className="row px-4 justify-content-center">
                    <div className="offset-1 col-12 col-md">
                        <div className="row my-auto align-items-center">
                            <div className="offset-1 col-2 col-md p-0">
                                <span className="svg-container"><FaUsers className="svg blue" size={35} /></span>
                            </div>
                            <div className="col-7 col-md-10 my-auto"><h4 className="h-100">Equipos</h4></div>
                        </div>
                        <ul className="no-style">
                            <li>Nombre de Equipo, XX/XX/XXXX-XX/XX/XXXX</li>
                            <li>Nombre de Equipo, XX/XX/XXXX-XX/XX/XXXX</li>
                            <li>Nombre de Equipo, XX/XX/XXXX-XX/XX/XXXX</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md">
                        <div className="row my-auto align-items-center">
                            <div className="offset-1 col-2 col-md p-0">
                                <span className="svg-container"><FaTrophy className="svg blue" size={35} /></span>
                            </div>
                            <div className="col-7 col-md-10 my-auto"><h4 className="h-100">Logros</h4></div>
                        </div>
                        <ul className="no-style">
                            <li>Reconocimiento, XX/XX/XXXX</li>
                            <li>Reconocimiento, XX/XX/XXXX</li>
                            <li>Reconocimiento, XX/XX/XXXX</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row align-items-center ml-0">
                <div className="row">
                    <div className="col-6 col-md-10"><h2 className=" h-100">Últimas Pruebas</h2></div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="row my-1">
                            <div className="col-5">
                                <img className="testimg" src={TestImg} alt=""/>
                            </div>
                            <div className="col-7 line-sm">
                                <h5 className="blue-test-bg p-1"><strong>Nombre de Prueba</strong></h5>
                                <p>Última fecha: XX/XX/XXXX</p>
                                <p>Último Tiempo: --:--</p>
                                <p>Mejor Tiempo: --:--</p>
                            </div>
                        </div>
                        <div className="row my-1">
                            <div className="col-5">
                                <img className="testimg" src={TestImg} alt=""/>
                            </div>
                            <div className="col-7 line-sm">
                                <h5 className="green-test-bg p-1"><strong>Nombre de Prueba</strong></h5>
                                <p>Última fecha: XX/XX/XXXX</p>
                                <p>Último Tiempo: --:--</p>
                                <p>Mejor Tiempo: --:--</p>
                            </div>
                        </div>                        
                        <div className="row my-1">
                            <div className="col-5">
                                <img className="testimg" src={TestImg} alt=""/>
                            </div>
                            <div className="col-7 line-sm">
                                <h5 className="red-test-bg p-1"><strong>Nombre de Prueba</strong></h5>
                                <p>Última fecha: XX/XX/XXXX</p>
                                <p>Último Tiempo: --:--</p>
                                <p>Mejor Tiempo: --:--</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-7">
                        <MultiLineChart chartname="chart" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BioCard
