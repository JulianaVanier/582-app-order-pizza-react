import React from 'react'
import bannerTop from '../assests/images/banner-top.jpg';

function HeaderApp() {
  return (
    <div className='banner-top'>
        <div className='container'>
            <div className='box-banner-top'>
                <img src={bannerTop} alt='banner top pizza' />
            </div>
        </div>
    </div>
  )
}

export default HeaderApp