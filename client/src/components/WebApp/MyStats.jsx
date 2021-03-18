import React from 'react'
import {FaChartArea} from 'react-icons/fa'
import Chart from './StatChart'
function MyStats() {
    return (
        <div className="webapp-card">
                <div className="row my-auto align-items-center">
                    <div className="col-3 col-md-1">
                        <span className="svg-container"><FaChartArea className="svg bg-blue white" size={45} /></span>
                    </div>
                    <div className="col"><h2 className="webapp-card-title h-100">Tus Estadísticas</h2></div>
                    
                </div>
                <hr/>
                <div className="container-fluid py-3">
                    <div className="row my-0 mx-0">
                        <div className="col p-0">
                            <div className="container p-0">
                                <div className="row">
                                    <div className="col-8">
                                        <Chart chartname="chart one" />
                                    </div>
                                    <div className="col p-0 line-sm">
                                        <p> <strong>Nombre de Prueba</strong> </p>
                                        <p className="avg">+ --:--</p>
                                        <p>Último Tiempo --:--</p>
                                        <p className="small date">Fecha: XX/XX/XXXX</p>

                                        <p>Mejor Tiempo --:--</p>
                                        <p className="small date">Fecha: XX/XX/XXXX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col p-0">
                            <div className="container p-0">
                                <div className="row">
                                    <div className="col-8">
                                        <Chart chartname="chart two" />
                                    </div>
                                    <div className="col p-0 line-sm">
                                        <p> <strong>Nombre de Prueba</strong> </p>
                                        <p className="avg">+ --:--</p>
                                        <p>Último Tiempo --:--</p>
                                        <p className="small date">Fecha: XX/XX/XXXX</p>

                                        <p>Mejor Tiempo --:--</p>
                                        <p className="small date">Fecha: XX/XX/XXXX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3 mx-0">
                        <div className="col p-0">
                            <div className="container p-0">
                                <div className="row">
                                    <div className="col-8">
                                        <Chart chartname="chart three" />
                                    </div>
                                    <div className="col p-0 line-sm">
                                        <p> <strong>Nombre de Prueba</strong> </p>
                                        <p className="avg">+ --:--</p>
                                        <p>Último Tiempo --:--</p>
                                        <p className="small date">Fecha: XX/XX/XXXX</p>

                                        <p>Mejor Tiempo --:--</p>
                                        <p className="small date">Fecha: XX/XX/XXXX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col p-0">
                            <div className="container p-0">
                                <div className="row">
                                    <div className="col-8">
                                        <Chart chartname="chart four" />
                                    </div>
                                    <div className="col p-0 line-sm">
                                        <p> <strong>Nombre de Prueba</strong> </p>
                                        <p className="avg">+ --:--</p>
                                        <p>Último Tiempo --:--</p>
                                        <p className="small date">Fecha: XX/XX/XXXX</p>

                                        <p>Mejor Tiempo --:--</p>
                                        <p className="small date">Fecha: XX/XX/XXXX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default MyStats
