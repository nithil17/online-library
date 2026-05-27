import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/store.js'
import { useSelector } from 'react-redux'
import { books } from './data/books.js'
import './styles/app.css';
const books = useSelector((state) => state.books.booksAll);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <BrowserRouter>
    <App />
  </BrowserRouter>,

  </Provider>
 
)
