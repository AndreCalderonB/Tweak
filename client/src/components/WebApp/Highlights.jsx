import React, { Component } from 'react'
import Youtube from 'react-youtube'
export class Highlights extends Component {
    render() {
        const opts = {
            height: '260',
            width: '400',
            playerVars: {
                autoplay: 0,
            },
        };
        
        return <Youtube className="video" videoId="8SZX4wmV1jU" opts={opts} onReady={this.onReady}/>;
        
    }
}

export default Highlights
