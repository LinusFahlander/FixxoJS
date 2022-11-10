import React from 'react'
import { useParams } from 'react-router-dom'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const ProductDetailsView = () => {
    
    const parms = useParams()

    return (
    <>
        <MainMenuSection />
        <div className="container mt-5">
            <h1>{parms.name}</h1>
        </div>
        <FooterSection />
    </>
  )
}

export default ProductDetailsView