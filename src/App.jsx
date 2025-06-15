import { useState } from 'react'
import './css/home.css'
import Home from './pages/home'
import Top from './components/Top'
import Down from './components/Down'
import Last from './components/Last'

function App() {
  

  return (
    <>
      <Home />
      <div className='flex flex-wrap'>
        <Top />
        <Down />
        <Last />
      </div>
    </>
  )
}

export default App
