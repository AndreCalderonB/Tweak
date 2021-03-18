import React from 'react'
import User from '../../assets/img/User.png'
function RecentActivityUser() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img className="userImg" src={User} alt=""/>
                </div>
                <div className="col recentActInfo">
                    <h6 className="recentActUsername">Nombre de Usuario</h6>
                    <p className="small date">XX/XX/XXXX</p>
                    <p className="small">Prueba Realizada</p>
                    <p className="small">100 mts en --:--</p>
                </div>
            </div>
        </div>
    )
}

export default RecentActivityUser
