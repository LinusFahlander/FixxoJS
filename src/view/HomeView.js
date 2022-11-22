import React, { useContext } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContext } from '../contexts/contexts'
import ShowcaseSection from '../sections/ShowcaseSection'
import BannerCommercialSection from '../sections/BannerCommercialSection'

const HomeView = () => {
  window.top.document.title = 'Fixxo.'
  const productContext = useContext(ProductContext)
  
  return (
    <>
      <MainMenuSection />
      <ShowcaseSection />
      <ProductGridSection title="Featured Products" items={productContext.featuredProducts} />
      <BannerCommercialSection />
      <FooterSection />
    </>
  )
}

export default HomeView