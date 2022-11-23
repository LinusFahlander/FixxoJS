import React from 'react'
import ProductCard from '../components/ProductCard'
import LeftImageSquare from '../assets/static_images/left-2-for-usd.svg'
import RightImageSquare from '../assets/static_images/right-2-for-usd.svg'

const BannerGridSection = ({title, items = []}) => {
  return (
    <section className="banner-grids container">
      <div className="top-banner">
        <div className='for-usd-banner'>
          <img src={LeftImageSquare} alt=" " />
        </div>
        <div className="product-grid">
            <h1>{title}</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 g-4">    
                {
                    items.map( product => <ProductCard key={product.articleNumber} product={product} />)
                }
            </div>
        </div>
      </div>
      <div className="bot-banner">
        <div  className="product-grid">
          <h1>{title}</h1>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 g-4">    
            {
              items.map( product => <ProductCard key={product.articleNumber} product={product} />)
            }
          </div>
        </div>
        <div className='for-usd-banner-bot'>
          <img src={RightImageSquare} alt="" />
        </div>
      </div>
    </section>
  )
}

export default BannerGridSection