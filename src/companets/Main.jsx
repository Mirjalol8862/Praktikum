import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'


function Main() {
  return (
    <main className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  )
}

export default Main