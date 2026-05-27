import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import AddBook from './pages/AddBook'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path='/books' element={<BrowseBooks/>}/>

      <Route path='/add-book' element={<AddBook/>}/>

      <Route path='/book/:id' element={<BookDetails/>}/>

      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App
