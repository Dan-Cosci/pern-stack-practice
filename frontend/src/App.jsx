import React from 'react'
import {Routes , Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/home'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <div className='bg-base-200 min-h-screen min-w-full transition-colors duration-300'>
      <Navbar />
      <Routes>
        <Route path='/' element={Home}/>
        <Route path='/product/:id' element={ProductPage}/>
      </Routes>
    </div>
  )
}

export default App
