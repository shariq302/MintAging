import React from 'react'
import '../sass/Banner1.scss'
import overlay_img from '../assets/images/overlay.png' 


function Banner1() {
  return (
    <div className='pb-5 mb-5'>
        <div className='bg_img_banner'>
            <div className='overlay_shadow'>
                <h1  className='overlay_heading_style' >Follow us on Social</h1>
            <img className='overlay_img_style' src={overlay_img} />

            </div>

        </div>
    </div>
  )
}

export default Banner1