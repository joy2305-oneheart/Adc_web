import React from 'react'
import '../../scss/_custom.scss'
import Wave from '../wave/wave'
const Banner = () => {
  return (
    <div className='adc_banner-waves'>
    <div class="inner-header flex pt-5 pb-5">
      <h1 className='pt-5 pb-5'>Church Never Stops</h1>
    </div>
    <Wave/>
  </div>
  )
}

export default Banner;
