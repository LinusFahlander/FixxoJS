import React, { useContext } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContext } from '../contexts/contexts'

const HomeView = () => {
  window.top.document.title = 'Fixxo.'
  const productContext = useContext(ProductContext)
  
  return (
    <>
      <MainMenuSection />
      <ProductGridSection title="Featured Products" items={productContext.featuredProducts} />
      <FooterSection />
    </>
  )
}

export default HomeView