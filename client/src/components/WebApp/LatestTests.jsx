import React from 'react'
import {FaClock} from 'react-icons/fa'
import Test from './LatestTestComp'
function LatestTests() {
    return (
        <div className="webapp-card">
                <div className="row my-auto align-items-center">
                    <div className="col-3 col-md-1">
                        <span className="svg-container"><FaClock className="svg blue" size={45} /></span>
                    </div>
                    <div className="col"><h2 className="webapp-card-title h-100">Últimas Pruebas</h2></div>
                    
                </div>
                <hr/>
                <div className="row py-3 justify-content-center">
                    <div className="col-12 col-md-3 text">
                        <Test />
                    </div>
                    <div className="col-12 col-md-3">
                        <Test />
                    </div>
                    <div className="col-12 col-md-3">
                        <Test />
                    </div>
                    <div className="col-12 col-md-3">
                        <Test />
                    </div>
                </div>
        </div>
    )
}

export default LatestTests
