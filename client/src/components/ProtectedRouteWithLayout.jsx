import React from 'react'

function ProtectedRouteWithLayout(props) {
    const jwt = api.getSession();
    console.log(jwt);
    if(jwt != null){
        return <Redirect to="/login" />
    }else{
        return (
            <props.layout>
                <props.component />
            </props.layout>
        )
    }

}

export default ProtectedRouteWithLayout
