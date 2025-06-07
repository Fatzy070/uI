import { useState } from 'react'
import './css/home.css'
import Home from './pages/home'
import Top from './components/Top'
import Down from './components/Down'

function App() {
  

  return (
    <>
      <Home />
      <div className='flex flex-wrap'>
        <Top />
        <Down />
      </div>
    </>
  )
}

export default App
