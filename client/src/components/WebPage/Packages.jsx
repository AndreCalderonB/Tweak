import React from 'react'
import Card from './PackCard'
import Packs from '../../assets/js/Packs'
function Packages() {
    return (
        <>
        <div className="container-fluid pckgs pt-5 pb-5">
        <div className="container">
                <div className="packages-text mr-auto ml-auto">
                    <h1 className="section-title mr-auto ml-auto">Paquetes</h1>
                    <h2 className="section-subtitle mr-auto ml-auto">Nuestros Paquetes</h2>
                    <hr className="packages-space mr-auto ml-auto"/>
                    <p className="packages-content section-content mr-auto ml-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                            Egestas dui porta semper bibendum. Arcu at laoreet id 
                                                            porttitor viverra.</p>
                </div>
                <div className="row pack-row justify-content-center mr-auto ml-auto">
                {Packs.map((pack,i)=>{
                    return(
                        <div key={i} className="pack-col col-sm-12 col-md-6 col-lg-4 mt-3">
                            <Card  name={pack.name} price={pack.price} desc={pack.description}/>
                        </div>
                        );
                    })
                }
                </div>
                </div>
        </div>

        </>
    )
}

export default Packages
