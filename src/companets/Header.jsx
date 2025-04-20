import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo/PraktikumLogo'
import MenuIcon from '../assets/icons/MenuIcon'

function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="header_row">
          <Link to='/' className='header_logo'><Logo/></Link>
          <div className="header_nav">
            <Link className='header_link' to='/kurslar'>Kurslar</Link>
            <Link className='header_link' to='/mentorlar'>Mentorlar</Link>
            <Link className='header_link' to='/savolar'>Tez-tez so‘raladigan savollar</Link>
            <Link className='header_link' to='boglanish'>Bog‘lanish</Link>
            <Link className='header_link' to='royxat'>Ro‘yxatdan o‘tish</Link>
          </div>
          <div className="header_mobile">
            <button className='header_menu-btn'><MenuIcon/></button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header