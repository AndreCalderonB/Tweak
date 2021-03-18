import React from 'react'

import Navigation from './Navigation'
import Footer from './Footer'
function Layout(props) {
    return (
        <div>
            <Navigation />
                <div className="page-body">
                    {props.children}
                </div>
                
            <Footer />
        </div>
    )
}

export default Layout
