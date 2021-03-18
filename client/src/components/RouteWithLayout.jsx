import React from 'react'

function RouteWithLayout(props) {

        return (
            <props.layout>
                <props.component />
            </props.layout>
        )
    

}

export default RouteWithLayout
