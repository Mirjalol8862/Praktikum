import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'


function Main() {
  return (
    <main className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default Main