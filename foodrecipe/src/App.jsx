import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import Favourite from './pages/favourite/Favourite'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/favourite' element={<Favourite/>}/>
    </Routes>
    </div>
    
  )
}

export default App
