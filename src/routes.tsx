import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import Categories from '@/pages/Categories'
import Product from '@/pages/Product'
import Checkout from '@/pages/Checkout'

const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default RoutesApp
