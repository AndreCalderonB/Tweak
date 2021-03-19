import React from 'react'

function PackCard(props) {
    var price;
    if(props.price === 0){
        price = "¡Gratis!";
    }else{
        price = props.price;
    }
    return (
        <>
        <div className="card m-auto">
            <h2 className="card-title">{props.name}</h2>
            <h4 className="card-subtitle">{price}</h4>
            <br/>
            <p className="card-text">{props.desc}</p>
            <br/>
            <ul className="card-list">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
            </ul>
            <br/>
            <p className="card-button">Registrarme</p>
        </div>
        </> 
    )
}

export default PackCard
