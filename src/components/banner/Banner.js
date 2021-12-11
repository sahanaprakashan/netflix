import React, { useEffect } from 'react'
import './banner.css'

function Banner() {
    useEffect(() => {
        
        
    }, [])
    return (
        <div className="banner">
            <div className="content" >
                <h1 className="title" >movie name</h1>
                <div className="bannerbuttons" >
                    <button className="button" >play</button>
                    <button className="button" >my list</button>
                </div>
                <h1 className='discription' >A police officer is on Gopalakrishnan's ('Gopi') trail. </h1>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner
