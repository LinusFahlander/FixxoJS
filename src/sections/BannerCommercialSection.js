import React from 'react'
import LeftImage from '../assets/static_images/pamela-reifs.svg'
import RightImage from '../assets/static_images/lets-be.svg'

const BannerCommercialSection = () => {
  return (
    <section>
        <div className="commercial-banners container">
            <img className="left-banner" src={LeftImage} alt="Pamela reif's" />
            <img className="right-banner" src={RightImage} alt="Let's be" />
        </div>
    </section>
  )
}

export default BannerCommercialSection