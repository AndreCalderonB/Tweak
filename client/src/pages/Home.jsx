import React from 'react'
import AboutUs from '../components/WebPage/AboutUs'
import Contact from '../components/WebPage/Contact'
import Packages from '../components/WebPage//Packages'
import {Link} from 'react-router-dom'

function Home() {

    return (
        <>
            <div className="jumbotron jumbotron-index jumbotron-fluid mb-0">
                <div className="container">
                    <h1 className="banner1text display-4 font-weight-bold colorA">Mide</h1>
                    <br/>
                    <h1 className="banner2text display-4 font-weight-bold colorB">Mejora</h1>
                    <br/>
                    <h1 className="banner3text display-4 font-weight-bold colorA">Gana</h1>
                    <br/>
                    <Link className="banner1BtnLink" to="/"><h2 className="banner1Btn">¡Comenzar Ahora!</h2></Link>
                </div>

            </div>            
            <AboutUs/>
            <Packages/>
            <Contact/>
        </>
    )
}

export default Home
