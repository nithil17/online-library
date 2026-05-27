import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import AddBook from './pages/AddBook'
import BrowseBooks from './pages/BrowseBooks'
import BookDetails from './pages/BookDetails'

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
