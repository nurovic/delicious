import React from 'react'
import Pages from './pages/Pages'
import Category from './components/Category'
import Search from './components/Search'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Search />  
        <Category />  
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App