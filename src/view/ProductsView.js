import React, { useContext } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import FooterSection from '../sections/FooterSection'
import { ProductContext } from '../contexts/contexts'

const ProductsView = () => {
  window.top.document.title = 'Products︱Fixxo.'
  const productContext = useContext(ProductContext)

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products"/>
      <ProductGridSection title="Products" items={productContext.all} />
      <FooterSection />
    </>
  )
}

export default ProductsView