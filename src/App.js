import React, { useEffect, useState} from 'react'
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeView from './view/HomeView' ;
import CategoriesView from './view/CategoriesView';
import ProductsView from './view/ProductsView';
import ProductDetailsView from './view/ProductDetailsView';
import ContactsView from './view/ContactsView' ;
import SearchView from './view/SearchView';
import CompareView from './view/CompareView';
import ShoppingCartView from './view/ShoppingCartView';
import WishListView from './view/WishListView';

import NotFoundView from './view/NotFoundView';

import { ProductContext } from './contexts/contexts'

function App() {
  const [products, setProducts] = useState({
    all: [],
    featuredProducts: []
  })

  useEffect(() => {
    const fetchAll = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({...products, all: await result.json()})
    }
    fetchAll()

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()})
    }
    fetchFeaturedProducts()

  }, [setProducts])


  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/categories" element={<CategoriesView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishListView />} />
        <Route path="/shoppingcart" element={<ShoppingCartView />} />

        <Route path="*" element={<NotFoundView />} />
      </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
