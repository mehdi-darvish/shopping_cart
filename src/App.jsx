import React from 'react'
import Header from './components/Header'
import Home from './pages/Home/Home'
import { Routes , Route } from 'react-router-dom'
import Favorites from './pages/Favorites/Favorites'
import Cart from './pages/Cart/Cart'

const App = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App